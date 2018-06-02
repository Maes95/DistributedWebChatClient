package client;

import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.AsyncResult;
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.buffer.Buffer;
import models.Case;
import models.Metrics;
import models.Result;
import models.TestConfig;

public class ClientGenerator extends AbstractVerticle {

	// CONSTANTS

	public static final int NUM_MESSAGES = 100;
	public static final int TIME = 1000;
	public static final int DELAY = 1000;

	// CLASS VARIABLES
	private int totalMessagePerChat;

	private final AtomicInteger sentMessages = new AtomicInteger(0);
	private final AtomicLong times = new AtomicLong(0);
	private final AtomicInteger done = new AtomicInteger(0);
	private final AtomicBoolean finished = new AtomicBoolean(true);
	private Handler<AsyncResult<Result>> handler;
	private final int totalUsers;

	private final Result result;
	private final TestConfig config;
	private final Case _case;


  public ClientGenerator(Case _case, TestConfig config, Result result, Handler<AsyncResult<Result>> handler) {
        this._case = _case;
		this.config = config;
	  	this.result = result;
		this.handler = handler;
        this.totalUsers = _case.getNumUsersPerChat() * _case.getNumChats();
		this.totalMessagePerChat = NUM_MESSAGES*_case.getNumUsersPerChat();

  }

  @Override
  public void start() {

	  for (int i = 0; i < this.totalUsers; i++) {
		  createClient(
                  // User name
                  "User" + Double.toString(Math.random()),
                  // Chat name
                  "chat_"+(i%_case.getNumChats()),
                  // Total messages
                  NUM_MESSAGES * _case.getNumUsersPerChat() * _case.getNumUsersPerChat()
          );
      }

      if(config.isDistributed()){
          vertx.setPeriodic(DELAY, id ->{
              for (String node: config.getNodes() ) {
                  vertx.executeBlocking(future -> {
                      future.complete(ClientUtils.getMetrics(config.getPem(), node));
                  }, res -> {
                      result.addMetric(node, (Metrics) res.result());
                  });
              }
          });
      }
  }

  public void createClient(String userName, String chatName, long totalMessages) {

	  final AtomicInteger numberOfMessages = new AtomicInteger(0);

	  vertx.createHttpClient().websocket(config.getPort(), config.getAddress(), "/chat", websocket -> {

	  websocket.handler((Buffer buffer) -> {
          String respuesta = ClientUtils.parseBuffer(buffer);
          Long _time = System.currentTimeMillis()-Long.parseLong(respuesta.substring(respuesta.indexOf("/") + 1));
          times.addAndGet(_time);
          numberOfMessages.addAndGet(1);
          // When THIS user recive all messages from his chat
          if (numberOfMessages.get()== totalMessagePerChat){
              websocket.close();
              // When ALL users recive all messages
              done.addAndGet(1);
              if (done.get()==this.totalUsers){
                  finishTest(totalMessages);
              }
          }
      });

      // CONNECTION MESSAGE

      websocket.writeFinalTextFrame("{\"chat\":\""+chatName+"\",\"name\":\""+userName+"\"}");

      //SENDER

      vertx.setTimer(2000, (Long arg0) -> {
          vertx.setPeriodic(TIME / NUM_MESSAGES, new Handler<Long>() {
              int i = 0;

              @Override
              public void handle(Long arg0) {
                  if (i < NUM_MESSAGES) {
                  websocket.writeFinalTextFrame(
                          "{\"name\":\""+userName+"\","
                          + "\"chat\":\""+chatName+"\","
                          +"\"message\":\""+Integer.toString(sentMessages.getAndAdd(1))+"/"+System.currentTimeMillis()+"\"}");
                      i++;
                  }
	          }
          	});
	      });
	  });


  }

  public synchronized void finishTest(long totalMessages){
      if(finished.get()){
			finished.getAndSet(false);
			long avg_time = times.get()/totalMessages;
		  	result.addTime(avg_time);
			vertx.undeploy(this.deploymentID(), res -> {
				if (res.succeeded()) {
					handler.handle(Future.succeededFuture(result));
				} else {
					System.out.println("Undeploy failed!");
				}
			});
      }
  }


}
