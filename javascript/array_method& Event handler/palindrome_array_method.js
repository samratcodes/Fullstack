let given='samrat';
let split;
if (typeof(given)==='number'){
 split = given.toString().split('');}
else{
   split=given.split('');
}
let reverse= split.reverse();
let join=reverse.join('');
console.log(join, 'is the reverse');
if(join===given){
    console.log(given,'is palindrome');
}
else{
    console.log(given,'is not palindrome');
}