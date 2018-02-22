package web;

import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.AsyncResult;
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.buffer.Buffer;

public class Client extends AbstractVerticle {

	// CONSTANTS

	public static final int NUM_MESSAGES = 500;
	public static final int TIME = 5000;

	// CLASS VARIABLES

	private final int totalUsers;
	private final int numChats;
	private final int numUsersPerChat;
	private final int port;
	private final String address;
	private int totalMessagePerChat;
	private long total_avg_time = 0;

	private final AtomicInteger sentMessages = new AtomicInteger(0);
	private final AtomicLong times = new AtomicLong(0);
	private final AtomicInteger done = new AtomicInteger(0);
	private final AtomicBoolean finished = new AtomicBoolean(true);
	private Handler<AsyncResult<Long>> handler;


  public Client(int port, String address, int numChats, int numUsersPerChat, Handler<AsyncResult<Long>> handler) {
	  this.port = port;
	  this.address = address;
	  this.numChats = numChats;
	  this.numUsersPerChat = numUsersPerChat;
	  this.totalUsers = numUsersPerChat * numChats;
	  this.handler = handler;
	  this.totalMessagePerChat = (NUM_MESSAGES*totalUsers) / numChats;
  }

  @Override
  public void start() throws Exception {
	  for (int i = 0; i < totalUsers; i++) {
		  createClient(
                  // User name
                  "User" + Double.toString(Math.random()),
                  // Chat name
                  "chat_"+(i%numChats),
                  // Total messages
                  NUM_MESSAGES * numUsersPerChat * numUsersPerChat
          );
      }
  }

  public void createClient(String userName, String chatName, long totalMessages) {

	  final AtomicInteger numberOfMessages = new AtomicInteger(0);

	  vertx.createHttpClient().websocket(this.port, this.address, "/chat", websocket -> {

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
              if (done.get()==totalUsers){
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
				total_avg_time += avg_time;
				vertx.undeploy(this.deploymentID(), res -> {
				  if (res.succeeded()) {
					  handler.handle(Future.succeededFuture(total_avg_time));
				  } else {
				    System.out.println("Undeploy failed!");
				  }
				});
      }
  }


}
