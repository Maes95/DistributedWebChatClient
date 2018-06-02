package client;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.AsyncResult;
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import models.Case;
import models.Result;
import models.TestConfig;

public class ClientManager extends AbstractVerticle{

	public static final int REPEAT_LIMIT = 10;

	@Override
	public void start() {

		vertx.eventBus().consumer("create.test", (msg) -> {
			TestConfig config = new TestConfig((JsonObject) msg.body());
			launchCase(config, (r)-> {
				vertx.eventBus().publish("finish", "FINISH");
			});
		});

	}

	public void launchCase(TestConfig config, Handler<AsyncResult<String>> finishCallback){

		if(config.casesEmpty()){
			finishCallback.handle(Future.succeededFuture("FINISH"));
		}else{
			Case currentCase = config.nextCase();
			launchClient(REPEAT_LIMIT, currentCase, config, new Result( currentCase, config, REPEAT_LIMIT ), (e)-> {
				// NEW CASE RESULT
				System.out.println("NEW RESULT "+currentCase);
				vertx.eventBus().publish("new.result", e.result().toJson());
				launchCase(config, finishCallback);
			});
		}

	}

	public void launchClient(int count, Case _case, TestConfig config, Result result, Handler<AsyncResult<Result>> finishCallback) {

		if(count == 0) {
			finishCallback.handle(Future.succeededFuture(result));
		}else {
			vertx.deployVerticle(new ClientGenerator(_case, config, result,(e)-> {
				// NEW ITERATION RESULT
				System.out.println("RESULT ITERATION: "+ (REPEAT_LIMIT - count + 1));
				vertx.eventBus().publish("new.interation", count);
				this.launchClient(count-1, _case, config, result, finishCallback);
			}));
		}

	}

	private void test(){
		JsonObject _config = new JsonObject()
				.put("port", 9000)
				.put("address", "localhost")
				.put("name","Vertx")
				.put("globalDefinition","")
				.put("specificDefinition","")
				.put("pem","TFG.pem")
				.put("isDistributed",false)
				.put("nodes", new JsonArray())
				.put("cases", new JsonArray()
						.add(new JsonObject().put("numChats", 1).put("numUsers", 5))
						.add(new JsonObject().put("numChats", 1).put("numUsers", 10))
				);

		vertx.eventBus().send("create.test", _config);
	}

}
