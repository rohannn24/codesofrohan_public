class Parent1 {
public:
    void show() {
        cout << "Parent1 show" << endl;
    }
};

class Parent2 {
public:
    void show() {
        cout << "Parent2 show" << endl;
    }
};

class Child : public Parent1, public Parent2 {};

int main() {
    Child c;
    c.show(); 
    return 0;
}
