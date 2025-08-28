#include<stdio.h>
int main(){

printf("Fathers Amount:");
int amount1;
scanf("%d",&amount1);
printf("Mothers Amount:");
int amount2;
scanf("%d",&amount2);
printf("Brothers Amount:");
int amount3;
scanf("%d",&amount3);

/// output 1
int total = (amount1+amount2+amount3);
prinft("Total Money Availvable: %d",total);

printf("Enter purchase amount:");
int purchase;
scanf("%d",&purchase);

/// output 2
Printf("Enter Payment method (0/1): ");
int payment;
switch(payment){

case 0:
    printf("You Have Chosen for Mobile Banking and you will get 15% offer")
    break;

case 1:
    prinft("You Have Chosen Hand Cash and there is no offer for you")
    break;

default:
    prinft("Method Not Available");

   if(case 0){
    int discount = (purchase)-15%
    printf("Amount after  Discount %d",discount);
   } else{
      int remaining = (total - purchase);
      printf("Your Remaining money %d",remaining);
   }
}


return 0;
}
