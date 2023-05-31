//GRAB ELEMENTS OF PAGE
const user_name = document.getElementById('user_name')
const user_deposit = document.getElementById('user_deposit')
const user_withdrawal = document.getElementById('user_withdrawal')
let display = document.getElementById('output')
let message = ""


//DEFINE EACH FUNCTION GRABBING INFORMATION
const nameFun =  () => {
    console.log('name clicked')
     nameUser = prompt("please enter your name")
    display.innerHTML += "USER: " + nameUser + "<br>"
}

function depositFunc(){
    console.log('deposit clicked')
    let deposit = parseFloat(prompt("how much you want to deposit"))
    //CHECK FOR NUMBER
    display.innerHTML += "Deposit: " + deposit + "<br>"
}


function withdrawalFunc(){
    console.log('widthrawal clicked')
    let withdrawal = parseFloat( prompt("How much to withdrawal"))
    //CHECK FOR NUMBER
    display.innerHTML += "Withdrawal: " + withdrawal + "<br>"
}

//CREATE EVENTS
user_name.addEventListener('click', nameFun)
user_deposit.addEventListener('click', depositFunc)
user_withdrawal.addEventListener('click', withdrawalFunc)


function bankAccount(ownerName){
   
    let balance = 0
    const owner = ownerName
    
    return {
        withdrawal : function(widthrawalAmount){
            if(widthrawalAmount > balance){
                console.log("not sufficient money")
            }else{
                balance -= widthrawalAmount
                console.log("widthrawl successful")
            }
        },
        deposit : function(depositAmount){
            if(depositAmount > 1000){
                console.log("amount bigger than 1000 must be done at bank")
            }else{
                balance += depositAmount
            }
        },
        getBalance : function(){
            console.log(`current balance is ${balance}`)
        },
        getOwner : function(){
            console.log(`The name of this account is ${owner}`)
        }
    }//end of object
}

const obj1 = bankAccount("shirin")
obj1.getBalance()
obj1.getOwner()
obj1.deposit(500)
obj1.withdrawal(100)
obj1.getBalance()