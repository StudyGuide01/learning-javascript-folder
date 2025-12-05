//=================== INHERITANCE WITH CUNSTRUCTURE ===========================//
// function BankAcoount(holderName, balance=0){

// this.holderName = holderName;
// this.balance = balance;
// this.accountNumber = Date.now();
// }


// //inherit parent constructor inside chiled
// function CurrentAccount(holderName, balance=0){
// BankAcoount.call(this, holderName,balance);
// this.limit = 10000;
// }


// BankAcoount.prototype.diposit = function(amount){
// // amount > this.limit ? console.log('please increse your account') : this.balance += amount;
// this.balance += amount;
// }

// BankAcoount.prototype.withdrawel = function(amount){
// this.balance -= amount;
// }

// CurrentAccount.prototype.takeLoan = function(amount){
// console.log('you can take a loan')
// }


// //link parent prototype from chiled
// CurrentAccount.prototype = Object.create(BankAcoount.prototype)



// const person1 = new BankAcoount('javed',500);
// const person2 = new CurrentAccount('samir')
// person2.diposit(20000);
// console.log(person2);



// ==================== inheritance with class

class BankAcoount{
holderName;
balance = 0;

constructor(holderName, balance=0) {
this.holderName = holderName;
this.balance = balance;
this.accountNumber = Date.now();
}

diposit(amount) {
this.balance += amount;
}

withdrawal(amount) {
this.balance -= amount;
}
}

class SavingAccount extends BankAcoount{
limit= 50000;

constructor(holderName, balance){
super(holderName, balance)
}

}

const person1 = new BankAcoount('javed',5000);
const person2 = new BankAcoount('samir');
const saving = new SavingAccount('jakir');
saving.diposit(1500);

//encapsulation
person1.balance = 'hello';

console.log(person1);
console.log(person2);
console.log(saving)



