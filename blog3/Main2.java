interface Animal {
    void eat();
}

interface Bird {
    void fly();
}

class Bat implements Animal, Bird {
    public void eat() {
        System.out.println("Bat eats insects.");
    }

    public void fly() {
        System.out.println("Bat flies at night.");
    }
}

public class Main2 {
    public static void main(String[] args) {
        Bat bat = new Bat();
        bat.eat(); // Outputs: Bat eats insects.
        bat.fly(); // Outputs: Bat flies at night.
    }
}
