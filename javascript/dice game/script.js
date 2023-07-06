'use strict';
let score =[0,0];
let playing=true;
const newbtn = document.querySelector('.btn--new');
const player1el = document.querySelector('.player--0');
const player2el = document.querySelector('.player--1');
const score1el = document.querySelector('#score--0');
const score2el = document.querySelector('#score--1');
const current1el = document.getElementById('current--0');
const current2el = document.getElementById('current--1');
const dice= document.querySelector('.dice')
const btnroll= document.querySelector('.btn--roll');
const btnnew =document.querySelector('.btn--new')
const btnhold= document.querySelector('.btn--hold');
let current=0;
let activeplayer=0;
score1el.textContent=0;
score2el.textContent = 0;
dice.classList.add('hidden');
const switchplayer = function(){
       document.getElementById(`current--${activeplayer}`).textContent=0;
    activeplayer = activeplayer ===0 ? 1 : 0;
    current=0;
    player1el.classList.toggle('player--active')
    player2el.classList.toggle('player--active');
}

btnroll.addEventListener('click',function(){
    if(playing){
    //generate random number
    const random=Math.trunc(Math.random()*6+1)
    //display dice
    dice.classList.remove('hidden')
    dice.src=`dice-${random}.png`
// add to current score
if(random !==1){
    current += random;
    document.getElementById(`current--${activeplayer}`).textContent = current;

}
else{
 switchplayer();
}}
});
btnhold.addEventListener('click',function(){
     if(playing){
 score[activeplayer]= score[activeplayer]+current;
 
   document.getElementById(`score--${activeplayer}`).textContent =
     score[activeplayer];
if (score[activeplayer]>=10) {
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--active');
 playing=false;
dice.classList.add('hidden');
} else {
  switchplayer();
}}
})

newbtn.addEventListener('click',function(){
  console.log(`clicked`);
 score = [0, 0];
 document.getElementById('score--0').textContent = score[0];
 document.getElementById('score--1').textContent = score[1];
  current = 0;
  document.getElementById(`current--${activeplayer}`).textContent= current;
   playing = true;
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove('player--winner');
      document
        .querySelector('.player--0')
        .classList.add('player--active');
})


