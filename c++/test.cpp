#include <iostream>
#include <string>
#include <cstdlib>


using namespace std;

int main( )
{
    string author = "XXX";  // These are
    string title = "XXX";  // the data input
    string isbn  = "XXX";  // strings
    string resp  = "XXX";
    string is_book_new = " ";
    string is_required = " ";

    double order_factor = 0.0;
    double price       = 0.0;   // Receives qoh conversion
    int expected_enrollment = 0; // Used in the output screen only
    double number_of_book_to_order = 0.0;
    double value_of_book = 0.0;

    //**********  Begin Title Screen  **********

    cout << "                    Miramar College Book Ordering System" << endl;
    cout << endl;
    cout << "                      Programmer: Darya Rostami" << endl;
    cout << endl<< endl<< endl<< endl;

            //  ****** Transition  ******

    cout << "Press <ENTER> to Continue"; //cin.getline(cin, resp); // Prompt and gets user resp
    getline(cin, resp);

    system("cls");  // This is a system call which is not available in Macs

    //**********   End Title Screen  ************

    //**********  Begin Input Screen  ***********

    cout << endl;
    cout << "                    Miramar College Book Ordering System" << endl;
    cout << endl;
    cout << "                                 Input Screen" << endl;
    cout << endl << endl << endl;
    cout << "Input Data and Press Enter." << endl;
    cout << endl << endl << endl << endl;

    cout << "                   Title :  "; getline(cin, title);
    cout << endl;
    cout << "                   ISBN:  "; getline(cin, isbn);
    cout << endl;
    cout << "                   Author:  "; getline(cin, author);
    cout << endl;
     cout << "                   Price:  ";
    //   getline(cin, price);
    cin >> price ;
    cout << endl;
    cout << "                   Expected Enrollment:  ";
    //getline(cin, number_of_enrollment);
    cin >> expected_enrollment;
    cout << endl;
    cout << "                   Required (Y or N)?:  "; getline(cin, is_required);
    cout << endl;
    cout << "                   Is New or Not?(Y or N):  "; getline(cin, is_book_new);
    cout << endl<< endl << endl << endl << endl << endl;
    cout << "                   Required (Y or N)?:  "; getline(cin, is_required);
    cout << endl;

    cout << "                         Press <ENTER> to Continue"; getline(cin, resp);
    system("cls");

    // price =atof(price.data());
    cout << "price " << price;
   //**********   End Input Screen  ************
    cout <<"Number of enrolment"<< expected_enrollment;
    cout << " Title " << title <<endl;
     cout << " required " << is_required <<endl;

    
     if (is_book_new == "Y") { //book is new
        if (is_required == "Y") { // if book is required
            // orderFactor = 1.0;
            number_of_book_to_order = 1.0 * expected_enrollment;
        }

        else { // if book is not required
            // orderFactor = 0.35;
            number_of_book_to_order = 0.35 * expected_enrollment;
         }
    }
    else{
         if (is_required == "Y") { // if book is required
            // orderFactor = 0.6;
            number_of_book_to_order = 0.6 * expected_enrollment;
        }

        else { // if book is not required
            // orderFactor = 0.1;
            number_of_book_to_order = 0.1 * expected_enrollment;

         } 
    } // end of order factorization calculation 
    cout << "number of book to order" << number_of_book_to_order;

    value_of_book = price * number_of_book_to_order;
    cout << "Value of book is: " << value_of_book;
 
}
// //     //*********  Begin Output Screen  ***********

// //     cout << "                    Miramar College Book Ordering System" << endl;
// //     cout << endl;

// //     cout << "                               Output Screen" << endl;
// //     cout << endl << endl;
// //     // ***** start order factorization calculation*******

// //    cout << " if(book is new)" << endl;


// //          order_factor = 1.0;   // Book is new and required

// // cout << "else"  << endl;

// //          order_factor = 0.35;  // Book is new but not required

// // cout << " if (book is used)" << endl;

// //         order_factor = 0.6;  // Book is not new but is required

// // cout << "    else" << endl;

// //         order_factor = 0.1;  // Book is not new and is not required





// //     books = atoi( qoh.data() );
// //     inven_cost = atof( price.data() );
// //     books_order  = books * inven_cost;

// //     cout << "       books_order  " << books_order << endl;

// //     //**** end of calculation ***

// //             //  ****** end output screen  ******
// //             //  ****** being exit screen  ******

// //     cout << endl;
// //     cout << "                    Miramar College Book Ordering System" << endl;
// //     cout << endl;
// //     cout << "                      Thank you!" << endl;

// //     cout << "Press <ENTER> to Continue"; getline(cin, resp);
// //     system("cls");

// //     return 0;

// // }//End of int main