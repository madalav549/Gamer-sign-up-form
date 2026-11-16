const nameInput =  document.getElementById("callsign");
const emailInput = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("confirmation");
const form = document.querySelector("form");
const submitButton = document.getElementById("submit-button");
const filledCountElement = document.querySelector(".ready-count-mobile");
const operatorId = document.getElementById("operator-id");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let filledCount = 0;

function checkName(nameInput){
  const callSign = nameInput.value.trim();

  if(callSign.length < 3){
    nameInput.parentElement.querySelector(".error-message-wrapper").style.display = "flex";
    nameInput.parentElement.querySelector(".input-helper-text").style.display = "none";
    nameInput.classList.add("input-error");
    operatorId.textContent = "Unassigned";
    return false;
  } else{
    nameInput.parentElement.querySelector(".error-message-wrapper").style.display = "none";
    nameInput.parentElement.querySelector(".input-helper-text").style.display = "block";
    nameInput.classList.remove("input-error");
    operatorId.textContent = callSign;
    return true;
  }
};

function checkEmail(emailInput){
  const email = emailInput.value.trim();

  if(emailRegex.test(email)){
    emailInput.parentElement.querySelector(".error-message-wrapper").style.display = "none";
    //emailInput.parentElement.querySelector(".input-helper-text").style.display = "block";
    emailInput.classList.remove("input-error");
    return true;
  } else{
    emailInput.parentElement.querySelector(".error-message-wrapper").style.display = "flex";
    //emailInput.parentElement.querySelector(".input-helper-text").style.display = "none";
    emailInput.classList.add("input-error");
    return false;
  }
};

submitButton.addEventListener("click", ()=>{
  let count = 0;
  
  if(checkName(nameInput)){
    count++;
  }

  if(checkEmail(emailInput)){
    count++;
  }

  filledCount = count;
  filledCountElement.textContent = `${filledCount}/5`
});