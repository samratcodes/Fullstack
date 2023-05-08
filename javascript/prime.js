let x = 1;
let Prime = true;

if (x < 2) {
  console.log("the number is not prime");
} 
else {
        for (let i = 2; i < x; i++) {
          if (x % i === 0) {
            Prime = false;
            break;
          }
        }
        
        if (Prime) {
          console.log(x , " is a prime number");
        } else {
          console.log(x , " is not a prime number");
        }
    }