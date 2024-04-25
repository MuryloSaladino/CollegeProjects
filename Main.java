class Main {

    public static void main(String[] args) {

        DataCollection dataCollection = new DataCollection(new Double[]{14.0,14.0,15.0,15.0,16.0,16.0}); 

        dataCollection.showData();

        System.out.println("\nMédia aritmética: " + dataCollection.arithmeticAverage());
        System.out.println("\nMediana: " + dataCollection.median());
        System.out.println("\nVariância Amostral: " + dataCollection.samplingVariance());
        System.out.println("\nDesvio padrao: " + dataCollection.standardDeviation());
        System.out.println("\nCoeficiente de variacao(%): " + dataCollection.variationCoefficient());
        System.out.println("\nDispersao: " + (dataCollection.lowDispersion() ? "Homogenea" : "Heterogenea"));
    }
}