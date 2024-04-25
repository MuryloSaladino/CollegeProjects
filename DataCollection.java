import java.util.ArrayList;
import java.util.Comparator;

/**
 * A class to construct a collection of data, useful for statiscs analysis.
 * @author Murylo Saladino
 */
public class DataCollection {
    
    private ArrayList<Double> data;
    
    /**
     * Creates and returns an instance of DataCollection from an ArrayList. 
     *
     * @param  data An ArrayList<Double> with the data to be observed.
     */
    public DataCollection(ArrayList<Double> data) {
        this.data = data;
        this.data.sort(Comparator.naturalOrder());
    }

    /**
     * Prints the ArrayList with the data into the console. No return. 
     */
    public void showData() {
        System.out.println("\n\nColecao de dados:\n" + data.toString());
    }

    /**
     * Calculates and returns the arithmetic average in the collected data. <p>
     * <b>Formula:</b> <p>
     * Arithmetic Avg = (X1 + X2 + X3 ... Xn)  /  n
     * 
     * @return the arithmetic average as a double.
     */
    public double arithmeticAverage() {
        double result = 0;
        for (Double item : data) {
            result += item;
        }
        return result / data.size();
    }

    /**
     * Finds and returns the median inside the collected data. <p>
     * <b>Formula:</b> <p>
     * Median is the element at the middle of the list. 
     * If the list has an even number of elements, then it will be the average between the two elements of the middle.
     * 
     * @return the median as a double.
     */
    public double median() {
        if(data.size() % 2 == 0) {
            int index = Math.round(data.size() / 2);
            return (data.get(index) + data.get(index + 1)) / 2;
        }
        return data.get(Math.round(data.size() / 2) + 1);
    }

    /**
     * Calculates and returns the sampling variance through the collected data.
     * <b>Formula:</b> <p>
     * Sampling Variance = ((x1 - Avg)^2 + (x2 - Avg)^2 + (x3 - Avg)^2 ... (xn - Avg)^2)  /  n - 1
     * 
     * @return the sampling variance as a double.
     */
    public double samplingVariance() {
        double average = this.arithmeticAverage();
        double total = 0;

        for (Double item : data) {
            total += Math.pow(item - average, 2);
        }
        return total / (data.size() - 1);
    }

    /**
     * Calculates and returns the standard deviation through the collected data.
     * <b>Formula:</b> <p>
     * Standard Deviation = √ Arithmetic Avg
     * 
     * @return the standard deviation as a double.
     */
    public double standardDeviation() {
        double total = 0;
        double average = this.arithmeticAverage();
        
        for (int i = 0; i < data.size(); i++) {
            total += Math.pow(data.get(i) - average, 2);
        }

        return Math.pow(total / data.size(), 0.5);
    }

    /**
     * Calculates and returns the variation coefficient in the collected data.
     * <b>Formula:</b> <p>
     * Variation Coefficient = Standard Deviation / Arithmetic Avg * 100
     * 
     * @return the variation coefficient as a double.
     */
    public double variationCoefficient() {
        return this.standardDeviation() / this.arithmeticAverage() * 100;
    }

    /**
     * Calculates and returns the standard deviation through the collected data.
     * The type of the dispersion is given by the Variation Coefficient. 
     * If the coefficient is lower than 30%, then it will be homogeneous, otherwise, it will be heterogeneous.
     * 
     * @return true for homogeneous or false for heterogeneous.
     */
    public boolean lowDispersion() {
        return this.variationCoefficient() <= 30;
    }
}
