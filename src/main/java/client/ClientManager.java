package client;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.AsyncResult;
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import models.Result;
import models.TestConfig;

public class ClientManager extends AbstractVerticle{

	public static final int REPEAT_LIMIT = 10;

	@Override
	public void start() {

		vertx.eventBus().consumer("create.test", (msg) -> {
			TestConfig config = new TestConfig((JsonObject) msg.body());
			launchClient(REPEAT_LIMIT, config, new Result( config, REPEAT_LIMIT ), (e)-> {
				// CALLBACK AT FINISH
				System.out.println(e.result().toJson());
			});
		});

		JsonObject _config = new JsonObject()
				.put("port", 5000)
				.put("address", "localhost")
				.put("numUsers", 10)
				.put("numChatRooms", 2)
				.put("app","Vertx")
				.put("globalDefinition","")
				.put("specificDefinition","")
				.put("pem","Vertx.pem")
				.put("nodes", new JsonArray()
						.add("ubuntu@ec2-34-245-123-57.eu-west-1.compute.amazonaws.com")
						.add("ubuntu@ec2-52-30-159-128.eu-west-1.compute.amazonaws.com")
				);

		vertx.eventBus().send("create.test", _config);
	}

	public void launchClient(int count, TestConfig config, Result result, Handler<AsyncResult<Result>> finishCallback) {
		if(count == 0) {
			finishCallback.handle(Future.succeededFuture(result));
		}else {
			vertx.deployVerticle(new ClientGenerator(config,result,(e)-> {
				System.out.println(e.result().toJson());
				this.launchClient(count-1, config, result, finishCallback);
			}));
		}
	}

}
