let x ="racecarr";
let reverse =''
let newString
if(typeof x ==='number'){
    newString = x.toString();
}
else{
     newString = x;
}
for(let i = newString.length -1 ; i>=0; i--){
 reverse = reverse + newString[i];
}
if(reverse===newString){
    console.log( newString," is palindrome")
}
else{
    console.log( newString," is  not palindrome")
}