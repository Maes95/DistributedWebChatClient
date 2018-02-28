package client;

import java.io.IOException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.vertx.core.buffer.Buffer;
import io.vertx.core.json.Json;

public class ClientUtils  {
	
	Json a = new Json();
	
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

}
