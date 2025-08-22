#include <iostream>
using namespace std;

int main(){

    int x,y;
    cout << " Enter First Integer: ";
    cin >> x;

    cout << " Enter Second Integer: ";
    cin >> y;
    
    int sum = x+y;
    cout << "The sum is: " <<sum <<"\n";
    int sub = x-y;
    cout << " The Sub is: " <<sub << "\n";
    int mul = x*y;
    cout <<" The Multi is : " <<mul <<endl;
    int div = x/y;
    cout << "The Division is: " <<div <<endl;
    int mod = x%y;
    cout << " The modules is: " <<mod;
    
    return 0;
}