package web;

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
								.put("port", 9000)
								.put("address", "localhost")
								.put("numUsers", 10)
								.put("numChatRooms", 4);



		vertx.eventBus().consumer("new.test", (msg) -> {
			JsonObject config = (JsonObject) msg.body();
			launchClient(REPEAT_LIMIT, (e)-> {
				// CALLBACK AT FINISH
				System.out.println(e.result());
			}, config, new ArrayList<Long>());
		});

		vertx.eventBus().send("new.test", _config);


	}

	public void launchClient(int count, Handler<AsyncResult<List<Long>>> handler, JsonObject config, List<Long> list) {
		if(count == 0) {
			handler.handle(Future.succeededFuture(list));
		}else {
			vertx.deployVerticle(new Client(
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
					this.launchClient(count-1, handler, config, list);
				}
			));
		}
	}

}
