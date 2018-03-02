package models;

import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;

import java.util.List;

public class TestConfig {

    private JsonObject config;
    private int totalUsers;
    private int numChats;
    private int numUsersPerChat;
    private int port;
    private String address;
    private List<String> nodes;
    private String pem;
    private String app;
    private String globalDefinition;
    private String specificDefinition;

    public TestConfig(String _config){
        this.parse(new JsonObject(_config));
    }

    public TestConfig(JsonObject config){
        this.parse(config);
    }

    private void parse(JsonObject config){
        this.config = config;
        this.app = config.getString("app");
        this.port = config.getInteger("port");
        this.address = config.getString("address");
        this.numChats = config.getInteger("numChatRooms");
        this.numUsersPerChat = config.getInteger("numUsers");
        this.nodes = config.getJsonArray("nodes").getList();
        this.pem = config.getString("pem");
        this.globalDefinition = config.getString("globalDefinition");
        this.specificDefinition = config.getString("specificDefinition");
        this.totalUsers = numUsersPerChat * numChats;
    }

    public JsonObject getConfig() { return config; }

    public int getTotalUsers() { return totalUsers; }

    public int getNumChats() { return numChats; }

    public int getNumUsersPerChat() { return numUsersPerChat; }

    public int getPort() { return port; }

    public String getAddress() { return address; }

    public List<String> getNodes() { return nodes; }

    public String getPem() { return pem; }

    public String getApp() { return app; }

    public String getGlobalDefinition() { return globalDefinition; }

    public String getSpecificDefinition() { return specificDefinition; }
}
