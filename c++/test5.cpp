#include <iostream>
#include <string>
#include <cstdlib>
using namespace std;
int main() {
   int num1=15 ,num2=10, sum;
   int number_of_enrollment = 0;
   cin>> number_of_enrollment;
   sum = num1 + num2;
   number_of_enrollment = number_of_enrollment * sum;
   cout<<"Sum of "<<num1<<" and "<<num2<<" is "<<sum <<endl << number_of_enrollment;

   return 0;
}