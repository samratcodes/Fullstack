

const inputType=document.querySelector('#inputType');
const form=document.querySelector('#form');
const labelValue = document.getElementById('labelValue');

labelValue.addEventListener('keyup',(event) => {
  const keypressed= event.key;
  if (keypressed==='Enter'){
   const type = inputType.value;
   const value = labelValue.value;
    let labelInput=document.createElement('label')
    let div=document.createElement('div')


   let input;
   if(type=='textarea'){
    input=document.createElement('textarea')
   }
   else{
    input= document.createElement('input')
   }
   labelInput.innerHTML=value;
  input.type=type;
  input.classList.add('form-control')
   
  labelInput.classList.add('form-control');
  div.classList.add('mb-3')
  if(type!== 'submit'){
    div.appendChild(labelInput)
  }
  if(type==='submit'){
    input.classList.add('btn')
    input.classList.add('btn-success')
    input.value=value;
   }
 
  div.appendChild(input)
  form.append(div)
  }
})

























