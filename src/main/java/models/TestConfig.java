package models;

import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;

import java.util.AbstractQueue;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class TestConfig {

    private JsonObject config;
    private int port;
    private String address;
    private List<String> nodes;
    private String pem;
    private String app;
    private String globalDefinition;
    private String specificDefinition;
    private Queue<Case> cases;
    private boolean isDistributed;

    public TestConfig(String _config){
        this.parse(new JsonObject(_config));
    }

    public TestConfig(JsonObject config){
        this.parse(config);
    }

    private void parse(JsonObject config){
        this.config = config;
        this.app = config.getString("name");
        this.port = config.getInteger("port");
        this.address = config.getString("address");
        this.nodes = config.getJsonArray("nodes").getList();
        this.pem = config.getString("pem");
        this.globalDefinition = config.getString("globalDefinition");
        this.specificDefinition = config.getString("specificDefinition");
        this.isDistributed = config.getBoolean("isDistributed");
        this.cases = new LinkedList<>();
        for(Object o: config.getJsonArray("cases").getList()){
            JsonObject _case = (JsonObject) o;
            this.cases.add(new Case(_case.getInteger("numChats"),_case.getInteger("numUsers") ));
        }
    }

    public JsonObject getConfig() { return config; }

    public Case nextCase(){
        return this.cases.poll();
    }

    public boolean casesEmpty(){
        return this.cases.isEmpty();
    }

    public int getPort() { return port; }

    public String getAddress() { return address; }

    public List<String> getNodes() { return nodes; }

    public String getPem() { return pem; }

    public String getApp() { return app; }

    public String getGlobalDefinition() { return globalDefinition; }

    public String getSpecificDefinition() { return specificDefinition; }

    public boolean isDistributed(){ return this.isDistributed; }
}
