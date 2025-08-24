#include <iostream>
#include <iomanip>
using namespace std;

int main(){

    int a ;
    long long b ;
    char c ;
    double d ;
    double e ;
    
    cin >> a>>b>>c>>d>>e;

    cout <<a <<endl;
    cout <<b <<endl;
    cout <<c <<endl;
    cout << fixed << setprecision(3) << d << endl;   
    cout << fixed << setprecision(15) << e << endl;
    return 0;
}