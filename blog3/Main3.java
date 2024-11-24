interface Vehicle {
    default void start() {
        System.out.println("Vehicle is starting");
    }
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car is starting");
    }
}

public class Main3 {
    public static void main(String[] args) {
        Vehicle car = new Car();
        car.start(); // Outputs: Car is starting
    }
}
