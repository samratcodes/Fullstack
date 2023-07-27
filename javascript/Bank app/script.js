'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


let displayMovements=function(movements,sort=false){

  const movs=sort ? movements.slice().sort((a,b)=>
  a-b):movements;
  containerMovements.innerHTML='';
movs.forEach((mov,i)=> {
 const type = mov > 0 ? 'deposit' : 'withdrawal';

  const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
       <div class="movements__value">${mov}$</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin',html)
});
}




const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}$`;

  const interest = acc
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `${interest}$`;
};

const Createusername =function(accs){
  accs.forEach(function(acc){
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
  })
}
Createusername(accounts) 

const updateui= function(acc){
  //Display movement
  displayMovements(acc.movements);

  //Display Balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
}


//Event handler
let currentAccount;
btnLogin.addEventListener('click',function(e){
  //Prevent form from submitting
  e.preventDefault();

 currentAccount= accounts.find(acc=>acc.username===
    inputLoginUsername.value);

    if(currentAccount?.pin === Number(inputLoginPin.value))
    {
      //Display Ui and message
      labelWelcome.textContent = `Welcome back ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;
      
      //Clear input fields
      inputLoginUsername.value =inputLoginPin.value ='';
      inputLoginPin.blur();
      updateui(currentAccount);
    }
});

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);;
  const receiverAcc = accounts.find(
    acc=>acc.username===inputTransferTo.value
    );
  inputTransferAmount.value =inputTransferTo.value='';

if (
  amount > 0 &&
  receiverAcc &&
  currentAccount.balance >= amount &&
  receiverAcc?.username !== currentAccount.username
) {
  //Doing the transfer
  currentAccount.movements.push(-amount);
  receiverAcc.movements.push(amount);
 //Update UI
  updateui(currentAccount);
}
});

btnLoan.addEventListener('click',function(e){
  e.preventDefault();
const amount=Number(inputLoanAmount.value);
if (amount>0 && currentAccount.movements.some(mov=>
  mov >=amount/10)){
    //Add movement
    currentAccount.movements.push(amount);

    updateui(currentAccount)
  }
  inputLoanAmount.value ='';
});
btnClose.addEventListener('click',function(e){
  e.preventDefault();
  
 if (inputCloseUsername.value===currentAccount.username
  && Number(inputClosePin.value)===currentAccount.pin){
    
   const index = accounts.findIndex(acc=> acc.username===currentAccount.username);
console.log(index);

  accounts.splice(index,1);

  //Hide UI
  containerApp.style.opacity= 0;
 }
inputCloseUsername.value = inputClosePin.value = '';

});
let sorted= false;

btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted=!sorted;
})




///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const Juliadata = [3, 5, 2, 12, 7]
// const Katedata= [4, 1, 15, 8, 3]

// const checkDogs=function(dogsJulia, dogsKate){
// const correctedJulia =dogsJulia.slice(1,-2)
// const correctedKate =dogsKate.slice()

//   correctedJulia.forEach(function(mov,i){
//     const Age =mov>3?'Adult':'puppy';
//     console.log(`Dog number ${i+1} is an ${Age}, and is ${mov} years old`);
//   })
//    correctedKate.forEach(function (mov, i) {
//      const Age = mov > 3 ? 'Adult' : 'puppy';
//      console.log(`Dog number ${i + 1} is an ${Age}, and is ${mov} years old`);
//    });

// }
// checkDogs(Juliadata,Katedata);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//  let arr =['a','b','c','d','e'];
// console.log( arr.slice(2));
// console.log(arr.splice(2))
// console.log(arr)


// const arr2=['j','i','h','g','f'];
// console.log(arr2.reverse());
  
// for(const movement of movements){
//  if (movement > 0) {
//    console.log(`you deposired ${movement}`);
//  } else {
//    console.log(`you withdrew ${Math.abs(movement)}`);
//  }
// }
// movements.forEach(function(movement){
//   if (movement > 0) {
//     console.log(`you deposired ${movement}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// });



// movements.forEach(function(movement,i,arr){
//   console.log(movement)
//   console.log(`this is ${i}`)
//   console.log(arr)
// })

// const unq= new Set(['USD','EUR','GBP'])
// unq.forEach(function(){})


// const eurToUsd =1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementsUSD= movements.map(mov=>mov*eurToUsd
//   );
//   console.log(movementsUSD)
//   const lol= movements.filter(function(mov){
//     return mov>0;
//   }
//   )
//   console.log(lol)
// const withdrawal= movements.filter(function(mov){
//   return mov<0;
// })
// console.log(withdrawal)
// const balance = movements.reduce(function(acc,curr,i,arr){
//   console.log(`index ${i}:${acc}`)
// return acc +curr ;
// },0);
// console.log(balance)


// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
// */
// const calcAverageHumanAge = function(ages){
//   let humanAge =ages.map(function(age){
//      if(age<=2){
//       return 2*age
//      }
//      else{
//       return 16 + age *4;
//      }
//   }).filter(function(age){
//   return age>18
//  }).reduce(function(acc,curr,i,arr){
//    return ((acc+ curr )/arr.length)
//   },0)
//   console.log(humanAge);
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);


// const bankDepositSum= accounts.flatMap(acc=>acc.movements).filter(mov=> mov> 0).reduce((sum,cur)=>sum+cur,0);
// console.log(bankDepositSum);
// const numDeposits1000 =accounts.flatMap(
//   acc=> acc.movements).filter(mov => mov>1000).length;
//   console.log(numDeposits1000);

//   const sums = accounts.flatMap(acc =>acc.movements).reduce((sums,cur)=>{ cur>0 ? (sums.deposits+=cur): (sums.withdrawals+=cur);
//   return sums;
//   },
//   {deposits:0,withdrawals:0} 
//   );
//   console.log(sums);

//   const convertTitleCase= function(title){
//    const exceptions =['a','an','the','but','or','on','in','with'];

//    const titleCase = title.toLowerCase().split(' ').map(word=>exceptions.includes(word)? word : word[0].toUpperCase()+ word.slice(1));
//    return titleCase.join(' ')
//   }
//   console.log(convertTitleCase('this is a nice title'))

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(function(dog){
  dog.Recfood = Math.trunc( dog.weight ** 0.75 * 28);
})

console.log(dogs);


// const saradog = dogs.filter(function(dog){
//  if (dog.owners.includes('Sarah'))
//  {
//   return dog.owners
//  }
// }

 const saradog = dogs.find(function(dog){
  return dog.owners.includes('Sarah')
 }  
);

console.log(`Sarah dog is eating${saradog.curFood<saradog.Recfood?' Okay':' Much more'}`);

const ownersEatTooMuch = dogs.filter(function(dog){
 
  return dog.Recfood < dog.curFood 
}).flatMap(dogg=> dogg.owners)
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter(function (dog) {
    return dog.Recfood > dog.curFood;
  })
  .flatMap(dogg => dogg.owners);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooLittle.join(' and ')}Eat too much `)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.filter(checkEatingOkay));

