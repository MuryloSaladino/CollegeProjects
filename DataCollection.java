import java.util.ArrayList;
import java.util.Comparator;

public class DataCollection {
    
    private ArrayList<Double> data;
    
    public DataCollection(ArrayList<Double> data) {
        this.data = data;
        this.data.sort(Comparator.naturalOrder());
    }

    public void showData() {
        System.out.println("\n\nColecao de dados:\n" + data.toString());
    }

    public float arithmeticAverage() {
        float result = 0;
        for (Double item : data) {
            result += item;
        }
        return result / data.size();
    }

    public double median() {
        if(data.size() % 2 == 0) {
            int index = Math.round(data.size() / 2);
            return (data.get(index) + data.get(index + 1)) / 2;
        }
        return data.get(Math.round(data.size() / 2) + 1);
    }

    public double samplingVariance() {
        float average = this.arithmeticAverage();
        float total = 0;

        for (Double item : data) {
            total += Math.pow(item - average, 2);
        }
        return total / (data.size() - 1);
        // return Math.pow(total / (data.size() - 1), 0.5);
    }

    public double standardDeviation() {
        double total = 0;
        float average = this.arithmeticAverage();
        
        for (int i = 0; i < data.size(); i++) {
            total += Math.pow(data.get(i) - average, 2);
        }

        return Math.pow(total / data.size(), 0.5);
    }

    public double variationCoefficient() {
        return this.standardDeviation() / this.arithmeticAverage() * 100;
    }

    public boolean lowDispersion() {
        return this.variationCoefficient() <= 30;
    }
}
