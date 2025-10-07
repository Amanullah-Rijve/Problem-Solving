#include <iostream>
#include<conio.h>
using namespace std;

int main(){

    // 2d 3d array

    char letter[2][4]={
        {'A','B','C','D'},
        {'E','F','G','H'}
    };

    for(int i=0;i<2;i++){
        for(int j=0;j<4;j++){
            cout<<letter[i][j]<< " ";
        }
        cout<<endl;
    }

    getch();
}
