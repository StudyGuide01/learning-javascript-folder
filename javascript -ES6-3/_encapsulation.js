'use strict';

// ==================== Encapsulation with class 

class BankAcoount {
  holderName;
  #balance = 0;

  constructor(holderName, balance = 0) {
    this.holderName = holderName;
    this.#balance = balance;
    this.accountNumber = Date.now();
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdrawal(amount) {
    this.#balance -= amount;
  }

// setBalance(amount) {
//   if (isNaN(amount)) {
//       throw new Error('input must be a valid number, not string');
//     }

// this.#balance += amount;
// }

// getBalance() {
// return this.#balance;
// }

set balance(amount) {
  if (isNaN(amount)) {
      throw new Error('input must be a valid number, not string');
    }

this.#balance += amount;
}

get balance() {
return this.#balance;
}


}

const person1 = new BankAcoount('javed', 5000);

// Prevent adding wrong properties
Object.seal(person1);



try {
	// person1.setBalance(200);
person1.balance = 6000;
} catch (error) {
	console.log(error);
}

// console.log(`current balance is : ${person1.getBalance()}`)
console.log(`current balance is : ${person1.balance}`)

console.log(person1);
