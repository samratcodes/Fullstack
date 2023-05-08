let x =1234;
let xlength =x.toString();
let rev=0
let digit = 0
for(let i=0;i<xlength;i++){
     digit = x %10
 rev = (rev*10)
x= x/10;
}
if(x==rev){
    console.log("the number is not  palindrome")
}
else{
    console.log("the number is  palindrome")
}

