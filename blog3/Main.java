class A {
    void display() {
        System.out.println("A");
    }
}

class B extends A {
    @Override
    void display() {
        System.out.println("B");
    }
}

class C extends A {
    @Override
    void display() {
        System.out.println("C");
    }
}

// If Java allowed multiple inheritance?
// class D extends B, C { }

public class Main {
    public static void main(String[] args) {
        // D d = new D();
        // d.display(); 
    }
}
