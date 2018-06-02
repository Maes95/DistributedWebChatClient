package models;

import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author michel
 */
public class Result {
    
    private final int numChats;
    private final int numUsers;
    private final int repeat_limit;
    private final String app;
    private final String globalDefinition;
    private final String specificDefinition;
    private final boolean isDistributed;
    private final ArrayList<Long> times;
    private final Map<String, List<Metrics>> nodeMetrics;

    public Result(Case _case, TestConfig config , int repeat_limit){
        this.repeat_limit = repeat_limit;
        this.times = new ArrayList<>(repeat_limit);
        this.numChats = _case.getNumChats();
        this.numUsers = _case.getNumUsersPerChat();
        this.app = config.getApp();
        this.isDistributed = config.isDistributed();
        this.globalDefinition = config.getGlobalDefinition();
        this.specificDefinition = config.getSpecificDefinition();
        this.nodeMetrics = new HashMap<>();
        for (String node: config.getNodes() ) {
            this.nodeMetrics.put(node, new ArrayList<>());
        }
    }

    public JsonObject toJson(){
        JsonObject response = new JsonObject();
        response.put("numChats", this.getNumChats());
        response.put("numUsers", this.getNumUsers());
        response.put("app", this.getApp());
        response.put("isDistributed", this.isDistributed);
        response.put("globalDefinition", this.getGlobalDefinition());
        response.put("specificDefinition", this.getSpecificDefinition());

        // TIMES
        JsonArray timesList = new JsonArray();
        long avg_time = 0;
        this.times.remove(0); // REMOVE FIRST TIME, NO RELEVANT
        for(long time : this.getTimes()){
            avg_time += time;
            timesList.add(time);
        }
        avg_time = avg_time / (getRepeat_limit() - 1);
        response.put("avgTime", avg_time);
        response.put("times", timesList);

        // METRICS
        JsonArray nodesMetrics = new JsonArray();
        for (String node: this.nodeMetrics.keySet() ) {
            double avg_cpu_use = 0;
            double avg_ram = 0;
            JsonObject nodeMetrics = new JsonObject();
            JsonArray ramResults = new JsonArray();
            JsonArray cpuUseResults = new JsonArray();
            for(Metrics metric : this.nodeMetrics.get(node)){
                ramResults.add(metric.getRam());
                cpuUseResults.add(metric.getCpu());
            }
            nodeMetrics.put("id", node);
            nodeMetrics.put("cpuUse", cpuUseResults);
            nodeMetrics.put("ram", ramResults);
            nodesMetrics.add(nodeMetrics);
        }
        response.put("nodesMetrics", nodesMetrics);
        return response;
    }
    
    public void addTime(long time){
        this.getTimes().add(time);
    }    
    
    public void addMetric(String node, Metrics metric){
        this.nodeMetrics.get(node).add(metric);
    }

    public int getNumChats() {
        return numChats;
    }

    public int getNumUsers() {
        return numUsers;
    }

    public int getRepeat_limit() {
        return repeat_limit;
    }

    public String getApp() {
        return app;
    }

    public String getGlobalDefinition() {
        return globalDefinition;
    }

    public String getSpecificDefinition() {
        return specificDefinition;
    }

    public ArrayList<Long> getTimes() {
        return times;
    }

}
