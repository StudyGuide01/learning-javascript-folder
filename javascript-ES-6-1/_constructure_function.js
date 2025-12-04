function BankAccount(holderName, balance=0){
this.holderName = holderName;
this.balance = balance;
this.accountNumber =   Date.now();

//deposit method
// this.deposit = function(amount){
// this.balance += amount;
// }

this.withdrawal = (amount)=>{
this.balance -= amount;
}
}


const javedAccount = new BankAccount('javed',500);
const samirAccount = new BankAccount('samir',500);

// console.log(javedAccount);
// console.log(samirAccount);

// BankAccount.prototype.test = 'this is test';
BankAccount.prototype.deposit = function(amount){
this.balance += amount;
}

// console.log(BankAccount.prototype);
// javedAccount.deposit(6000);
// console.log(javedAccount);


// ============== open account
const openAccountForm = document.querySelector('#openAccountForm');
const holderName = document.querySelector('#holderName');
const amount = document.querySelector('#amount');
const openButton = document.querySelector('#open-button');
const accounts = [];

openAccountForm.addEventListener('submit',function(e){
e.preventDefault();
const account = new BankAccount(holderName.value, +amount.value);
accounts.push(account);
console.log(accounts);
holderName.value = '';
amount.value = '';

})


//================ deposit form

const depositForm = document.querySelector('#depositForm');
const AcountNumber = document.querySelector('#AcountNumber');
const balance = document.querySelector('#balance');
const depositButton = document.querySelector('#deposit-button');

depositForm.addEventListener('submit',(e)=>{
e.preventDefault();
const account = accounts.find(acount=>acount.accountNumber === +AcountNumber.value);
account.deposit(+balance.value);
// account.withdrawal(+balance.value);
console.log(accounts);

})
