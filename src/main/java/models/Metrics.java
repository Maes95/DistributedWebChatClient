package models;

/**
 *
 * @author michel
 */
public class Metrics {
    
    private final double cpu;
    private final int ram;
    
    public Metrics(int ram, double cpu){
        this.cpu = cpu;
        this.ram = ram;
    }
    
    public Metrics(){
        this.cpu = 0.0;
        this.ram = 0;
    }
    
    @Override
    public String toString(){
        return " RAM: "+getRam()+" CPU: "+getCpu()+"%";
    }

    /**
     * @return the cpu
     */
    public double getCpu() {
        return cpu;
    }

    /**
     * @return the ram
     */
    public double getRam() {
        return ram;
    }
    
    
}
