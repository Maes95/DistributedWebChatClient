import java.io.*;

public class Prueba {

    public static void main(String[] args) throws IOException {

        System.out.println(getCPUusage());
        System.out.println(getRAMusage());
    }

    public static int getRAMusage(){
        int ram;
        try{
            String[] command = { "./ram"};
            Process process = Runtime.getRuntime().exec(command);
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            ram = Integer.valueOf(reader.readLine());
        }catch(Exception e){
            ram = 0;
        }

        return ram;
    }

    public static double getCPUusage(){
        Double cpu;
        try{
            String[] command = { "./cpu"};
            Process process = Runtime.getRuntime().exec(command);
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            reader.readLine();// FIRST LINE NOT RELEVANT
            cpu = Double.valueOf(reader.readLine().replace(',','.'));
        }catch(Exception e){
            cpu = 0.0;
        }

        return cpu;
    }
}
