const qAndAItems = document.querySelectorAll(".qAndA-item");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");
const validatedFields={
  "name":false,
  "phone":false
}

qAndAItems.forEach(qA => {
  qA.addEventListener("click",()=>{
    if(qA.className === "qAndA-item hidden"){
      qA.className ="qAndA-item";
    }
    else{
      qA.className ="qAndA-item hidden";
    }
  })
})



//Маска для номера
const inputBlock = document.querySelector(".phone-input");
const phoneInput = document.querySelector("input[name='phone']");
const mask="+7(___)___-__-__";

phoneInput.addEventListener('click',()=>{
  if(!phoneInput.value.includes("+7(")){
    phoneInput.value="+7(";
  }
  
  inputBlock.classList.remove("hideMask");
})
phoneInput.addEventListener('input',()=>{

  if(!phoneInput.value.includes("+7(")){
    phoneInput.value="+7(";
  }
  for(let i = 3; i<phoneInput.value.length;++i){
    if(i == 6 || i == 10 || i == 13){
      continue;
    }
    if(isNaN(Number(phoneInput.value[i])) || phoneInput.value[i] == " "){
      phoneInput.value = phoneInput.value.slice(0,i)
    }
  }

  switch (phoneInput.value.length){
    case 6:
      phoneInput.value+=")";
      break;
    case 10:
      phoneInput.value +="-";
      break;
    case 13:
      phoneInput.value+="-";
      break;
    case 16:
      validatedFields.phone =true;
      phoneInput.classList.remove("error");
      phoneInput.classList.add("validated");
      mailInput.focus()
    case 17:
      phoneInput.value=phoneInput.value.slice(0,16);
      break;
    default:
      validatedFields.phone = false;
      break;   
  }


  
  let slicedMask =mask.slice(phoneInput.value.length);
  let phoneMask = phoneInput.value +slicedMask;  
  inputBlock.setAttribute('data-after', phoneMask);

})

phoneInput.addEventListener("keydown", (event)=>{
  let key = event.key;

  if(key == "Backspace" ||key ==  "Delete"){
    switch (phoneInput.value.length){
      case 7:
        phoneInput.value =phoneInput.value.slice(0,6);
        break;
      case 11:
        phoneInput.value =phoneInput.value.slice(0,10);
        break;
      case 14:
        phoneInput.value =phoneInput.value.slice(0,13);
        break;
      default:
        break;   
    }     
  }
});


//Валидация почты
const mailInput = document.querySelector("input[name='e-mail']");

mailInput.addEventListener("input",(e)=>{
  let val = e.target.value;
  let emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if(val == ""){
    mailInput.classList.remove("validated");
    mailInput.classList.remove("error");
    delete validatedFields["e-mail"];
    return; 
  }
  if(emailRegExp.test(val)){
    validatedFields["e-mail"] = true;
    mailInput.classList.remove("error");
    mailInput.classList.add("validated");
  }
  else{
    validatedFields["e-mail"] = false;
    mailInput.classList.remove("error");
  }
})

//Валидация имени
const nameInput = document.querySelector("input[name='name']");

nameInput.addEventListener('input',(e)=>{
  let val = e.target.value;
  let nameRegExp = /^[а-яА-Я]{2,}\s[а-яА-Я]{2,}\s[а-яА-Я]{2,}$/gm;
  if(nameRegExp.test(val.trim())){
    validatedFields.name = true;
    nameInput.classList.remove("error")
    nameInput.classList.add("validated");

  }
  else{
    validatedFields.name = false;
  }
})


//Валидация текста вопроса
const textArea = document.querySelector("textarea");

textArea.addEventListener("input", (e) =>{
  if(e.target.value.length > 1){
    textArea.classList.add("validated");
  }
  else{
    textArea.classList.remove("validated")
  }
})


//Отправка формы
submitBtn.addEventListener("click",()=>{
  let isEnable =true;
  let firstInvalidInput = 0;
  const fieldsKeys = Object.keys(validatedFields);
  for(let i =0;i<fieldsKeys.length;++i){
    let checkingInput = document.querySelector(`input[name='${fieldsKeys[i]}']`); 
    checkingInput.classList.remove("error");
    if(!validatedFields[fieldsKeys[i]]){
      isEnable = false;
      checkingInput.classList.add("error")
    }
  }
  if(document.querySelector(`input.error`)) document.querySelector(`input.error`).focus();

  if(isEnable)console.log("submit");
  //form.submit();
})




//Показ бургера
const menu = document.querySelector(".burger-menu");

menu.addEventListener("click",()=>{
  menu.classList.toggle("isClosed");
  document.querySelector("body").classList.toggle("menuOpen");
})