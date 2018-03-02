package web;

import models.Result;
import io.vertx.core.AbstractVerticle;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;
import io.vertx.ext.web.handler.sockjs.BridgeOptions;
import io.vertx.ext.web.handler.sockjs.PermittedOptions;
import io.vertx.ext.web.handler.sockjs.SockJSHandler;
import java.awt.Desktop;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author michel
 */
public class TestResultsServer extends AbstractVerticle {

    @Override
    public void start() throws Exception {

        Router router = Router.router(vertx);

        // Allow events for the designated addresses in/out of the event bus bridge
        BridgeOptions opts = new BridgeOptions()
        // CLIENT TO SERVER
        .addInboundPermitted(new PermittedOptions().setAddressRegex("(.)*"))
        // SERVER TO CLIENT
        .addOutboundPermitted(new PermittedOptions().setAddressRegex("(.)*"));

        // Create the event bus bridge and add it to the router.
        SockJSHandler ebHandler = SockJSHandler.create(vertx).bridge(opts);
        router.route("/eventbus/*").handler(ebHandler);

        // Create a router endpoint for the static content.
        router.route().handler(StaticHandler.create());

        // Start the web server and tell it to use the router to handle requests.
        vertx.createHttpServer().requestHandler(router::accept).listen(8080);

        vertx.eventBus().consumer("new.test", (msg) -> {
            System.out.println(msg.body());
        });

        TestResultsServer.openBrowser();
    }

    public void send(Result result){
        vertx.eventBus().publish("new.result", result.toJson());
    }

    public static void openBrowser() {
        if(Desktop.isDesktopSupported()){
            try {
                Desktop.getDesktop().browse(new URI("http://localhost:8080/"));
            } catch (URISyntaxException | IOException ex) {
                Logger.getLogger(TestResultsServer.class.getName()).log(Level.SEVERE, null, ex);
            }
        }else{
            System.out.println("Open http://localhost:8080/ in your browser");
        }
    }
}
