#include <iostream>
#include <string>
using namespace std;

int main(){

    int n;
    cin >> n;

    string word[]= {"one","two","three","four","five","six","seven","eight","nine"};

    if(n>=1 && n<=9){
        cout << word[n-1];
    }else if(n==0){
        cout << "Its a 0";
    }
    else{
        cout << "grater than 9";
    }


    return 0;
}