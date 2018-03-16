package client;

import java.io.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.vertx.core.buffer.Buffer;
import io.vertx.core.json.Json;
import models.Metrics;

public class ClientUtils  {
	
	public static String parseBuffer(Buffer buff){
        JsonNode message = null;
        ObjectMapper mapper = new ObjectMapper();
        try {
            message = mapper.readTree(buff.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return message.get("message").asText();
    }

    public static Metrics getMetrics(String pem, String machine){
	    return new Metrics(
                getRAMusage(pem, machine),
                getCPUusage(pem, machine)
        );
    }

    private static int getRAMusage(String pem, String machine){
        int ram;
        try{
            String[] command = { "./scripts/ram", pem, machine};
            Process process = Runtime.getRuntime().exec(command);
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            ram = Integer.valueOf(reader.readLine());
        }catch(Exception e){
            System.err.println("Can't get RAM usage");
            System.err.println(e);
            ram = 0;
        }

        return ram;
    }

    private static double getCPUusage(String pem, String machine){
        Double cpu;
        try{
            String[] command = { "./scripts/cpu", pem, machine};
            Process process = Runtime.getRuntime().exec(command);
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            reader.readLine();// FIRST LINE NOT RELEVANT
            cpu = Double.valueOf(reader.readLine().replace(',','.'));
        }catch(Exception e){
            System.err.println("Can't get CPU usage");
            System.err.println(e);
            cpu = 0.0;
        }

        return cpu;
    }

}
