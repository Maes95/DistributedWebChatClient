package client;

import java.util.ArrayList;
import java.util.List;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.AsyncResult;
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.json.JsonObject;

public class ClientManager extends AbstractVerticle{

	public static final int REPEAT_LIMIT = 10;

	@Override
	public void start() {

		JsonObject _config = new JsonObject()
								.put("port", 5000)
								.put("address", "localhost")
								.put("numUsers", 17)
								.put("numChatRooms", 4);



		vertx.eventBus().consumer("create.test", (msg) -> {
			JsonObject config = (JsonObject) msg.body();
			launchClient(REPEAT_LIMIT, config, new ArrayList<Long>(), (e)-> {
				// CALLBACK AT FINISH
				System.out.println(e.result());
			});
		});

		vertx.eventBus().send("create.test", _config);


	}

	public void launchClient(int count, JsonObject config, List<Long> list, Handler<AsyncResult<List<Long>>> finishCallback) {
		if(count == 0) {
			finishCallback.handle(Future.succeededFuture(list));
		}else {
			vertx.deployVerticle(new ClientGenerator(
				// PORT
				config.getInteger("port"),
				// ADDRESS
				config.getString("address"),
				// Nº CHAT ROOMS
				config.getInteger("numChatRooms"),
				// Nº USERS PER CHAT
				config.getInteger("numUsers"),
				// CALLBACK WHEN CLIENT STOP
				(e)-> {
					list.add(e.result());
					System.out.println(e.result());
					this.launchClient(count-1, config, list, finishCallback);
				}
			));
		}
	}

}
