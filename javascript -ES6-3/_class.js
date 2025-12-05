class BackAcoount{
holderName;
accountNumber;
balance;
constructor(holderName, balance=0){
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

const person1 = new BackAcoount('javed',2000);
person1.diposit(1000);
person1.withdrawal(1000);

const person2 = new BackAcoount('samir');
person2.diposit(1000);
console.log(person1);
console.log(person2);
