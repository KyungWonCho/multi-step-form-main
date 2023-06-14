let monthElements = document.querySelectorAll(".month");
let yearElements = document.querySelectorAll(".year");
let monthlyDiv = document.querySelector(".monthly");
let yearlyDiv = document.querySelector(".yearly");
let slider = document.querySelector("#slider");
let curStep = 1;

// buttons

document.querySelector("#next").addEventListener("click", function(){
  if(curStep == 1){
    // info 입력 안하면 못넘어가게 해야함.
    nameInfo = document.querySelector("#name").value;
    emailInfo = document.querySelector("#email").value;
    phoneInfo = document.querySelector("#phone").value;
    if(nameInfo==""){
      document.querySelector("#name-alert").style.display = "block";
      document.querySelector("#name").setAttribute("class", "req");
    }
    else {
      document.querySelector("#name-alert").style.display = "none";
    }
    if(emailInfo==""){
      document.querySelector("#email-alert").style.display = "block";
      document.querySelector("#email").setAttribute("class", "req");
    }
    else{
      document.querySelector("#email-alert").style.display = "none";
    }
    if(phoneInfo==""){
      document.querySelector("#phone-alert").style.display = "block";
      document.querySelector("#phone").setAttribute("class", "req");
    }
    else{
      document.querySelector("#phone-alert").style.display = "none";
    }
    if(nameInfo=="" || emailInfo=="" || phoneInfo == ""){
      return;
    }
    document.querySelector("#back").style.display = "block";
    document.querySelector("#circle-1").setAttribute("class", "circle");
    document.querySelector("#circle-2").setAttribute("class", "circle current");
    document.querySelector("#step-1").style.display = "none";
    document.querySelector("#step-2").style.display = "block";
    curStep = 2;
  }
  else if(curStep == 2){
    if(plan == ""){
      document.querySelector(".plan-alert").style.display = "block";
      return;
    }
    document.querySelector("#circle-2").setAttribute("class", "circle");
    document.querySelector("#circle-3").setAttribute("class", "circle current");
    document.querySelector("#step-2").style.display = "none";
    document.querySelector("#step-3").style.display = "block";
    curStep = 3;
  }
  else if(curStep == 3){
    document.querySelector("#circle-3").setAttribute("class", "circle");
    document.querySelector("#circle-4").setAttribute("class", "circle current");
    document.querySelector("#step-3").style.display = "none";
    document.querySelector("#step-4").style.display = "block";
    document.querySelector("#next").style.display = "none";
    document.querySelector("#confirm").style.display = "block";
    finishUp();
    curStep = 4;
  }
});

document.querySelector("#confirm").addEventListener("click", function(){
  document.querySelector("#step-4").style.display = "none";
  document.querySelector("#step-end").style.display = "block";
  document.querySelector("footer").style.display = "none";
});

document.querySelector("#back").addEventListener("click", function(){
  if(curStep == 2){
    document.querySelector("#circle-1").setAttribute("class", "circle current");
    document.querySelector("#circle-2").setAttribute("class", "circle");
    document.querySelector("#step-1").style.display = "block";
    document.querySelector("#step-2").style.display = "none";
    curStep = 1;
  }
  else if(curStep == 3){
    document.querySelector("#circle-2").setAttribute("class", "circle current");
    document.querySelector("#circle-3").setAttribute("class", "circle");
    document.querySelector("#step-2").style.display = "block";
    document.querySelector("#step-3").style.display = "none";
    curStep = 2;
  }
  else if(curStep == 4){
    document.querySelector("#circle-3").setAttribute("class", "circle current");
    document.querySelector("#circle-4").setAttribute("class", "circle");
    document.querySelector("#step-3").style.display = "block";
    document.querySelector("#step-4").style.display = "none";
    document.querySelector("#next").style.display = "block";
    document.querySelector("#confirm").style.display = "none";
    document.querySelectorAll(".finish .addon-select").forEach(function(data){
      document.querySelector(".finish").removeChild(data);
    });
    curStep = 3;
  }
});

// step 1

let nameInfo = "";
let emailInfo = "";
let phoneInfo = "";

document.querySelectorAll(".get-string input").forEach(function(data){
  data.addEventListener("focus", function(){
    this.setAttribute("class", "");
  });
});

// step 2

let monthly = true;
let plan = "";

slider.addEventListener("click", function(){
  if(monthly){    // go to yearly
    monthly = false;
    monthElements.forEach(function(data){
      data.style.display = "none";
    });
    yearElements.forEach(function(data){
      data.style.display = "block";
    });
    monthlyDiv.style.color = "hsl(231, 11%, 63%)";
    yearlyDiv.style.color = "hsl(213, 96%, 18%)";
  }
  else{           // go to monthly
    monthly = true;
    monthElements.forEach(function(data){
      data.style.display = "block";
    });
    yearElements.forEach(function(data){
      data.style.display = "none";
    });
    yearlyDiv.style.color = "hsl(231, 11%, 63%)";
    monthlyDiv.style.color = "hsl(213, 96%, 18%)";
  }
});

for(let i=0; i<yearElements.length; i++){
  yearElements[i].style.display = "none";
}

let planDivArray = document.querySelectorAll(".plan");

planDivArray.forEach(function(planDiv){
  planDiv.addEventListener("click", function(){
    if(plan!=""){
      document.querySelector("#"+plan).setAttribute("class", "plan");
    }
    plan = planDiv.getAttribute("id");
    planDiv.setAttribute("class", "plan selected");
    document.querySelector(".plan-alert").style.display = "none";
  });
});

// step 3

let onlineService = document.querySelector("#online-service");
let largerStorage = document.querySelector("#larger-storage");
let customProfile = document.querySelector("#custom-profile");
let isOnlineService = false;
let isLargerStroage = false;
let isCustomProfile = false;

document.querySelector("#online-service").addEventListener("click", function(){
  if(isOnlineService==false) {
    isOnlineService = true;
    onlineService.setAttribute("class", "addon checked");
    document.querySelector("#online-service input").checked=true;
  }
  else {
    isOnlineService = false;
    onlineService.setAttribute("class", "addon");
    document.querySelector("#online-service input").checked=false;
  }
});

document.querySelector("#larger-storage").addEventListener("click", function(){
  if(isLargerStroage==false) {
    isLargerStroage = true;
    largerStorage.setAttribute("class", "addon checked");
    document.querySelector("#larger-storage input").checked=true;
  }
  else {
    isLargerStroage = false;
    largerStorage.setAttribute("class", "addon");
    document.querySelector("#larger-storage input").checked=false;
  }
});

document.querySelector("#custom-profile").addEventListener("click", function(){
  if(isCustomProfile==false) {
    isCustomProfile = true;
    customProfile.setAttribute("class", "addon checked");
    document.querySelector("#custom-profile input").checked=true;
  }
  else {
    isCustomProfile = false;
    customProfile.setAttribute("class", "addon");
    document.querySelector("#custom-profile input").checked=false;
  }
});

// step 4

let planName = "";
let planPrice = "";
let totalPrice = 0;

function finishUp(){
  if(plan=="arcade"){
    if(monthly) planPrice = "$9/mo", planName = "Arcade (Monthly)", totalPrice=9;
    else planPrice = "$90/yr", planName ="Arcade (Yearly)", totalPrice=90;
  }
  else if(plan=="advanced"){
    if(monthly) planPrice = "$12/mo", planName = "Advanced (Monthly)", totalPrice=12;
    else planPrice = "$120/yr", planName = "Advanced (Yearly)", totalPrice=120;
  }
  else{
    if(monthly) planPrice = "$15/mo", planName="Pro (Monthly)", totalPrice=15;
    else planPrice = "$150/yr", planName="Pro (Yearly)", totalPrice=150;
  }
  document.querySelector(".finish .plan-name").innerHTML = planName;
  document.querySelector(".finish .plan-price").innerHTML = planPrice;
  if(!isOnlineService && !isLargerStroage && !isCustomProfile) {
    document.querySelector(".finish .plan-select").style.borderBottom = "none";
    document.querySelector(".finish .plan-select").style.paddingBottom = 0;
  }
  if(isOnlineService){
    if(monthly)
      document.querySelector(".finish").appendChild(createAddOnDiv("Online service", 1));
    else
      document.querySelector(".finish").appendChild(createAddOnDiv("Online service", 10));
  }
  if(isLargerStroage){
    if(monthly)
      document.querySelector(".finish").appendChild(createAddOnDiv("Larger storage", 2));
    else
      document.querySelector(".finish").appendChild(createAddOnDiv("Larger storage", 20));
  }
  if(isCustomProfile){
    if(monthly)
      document.querySelector(".finish").appendChild(createAddOnDiv("Customizable profile", 2));
    else
      document.querySelector(".finish").appendChild(createAddOnDiv("Customizable profile", 20));
  }
  if(monthly) document.querySelector(".total .total-name").innerHTML = "Total (per month)";
  else document.querySelector(".total .total-name").innerHTML = "Total (per year)";
  let totalPriceString = "";
  if(monthly) totalPriceString = "+$"+totalPrice+"/mo";
  else totalPriceString = "+$"+totalPrice+"/yr";
  document.querySelector(".total .total-price").innerHTML = totalPriceString;
}

function createAddOnDiv(name, price){
  let addOnSelectDiv = document.createElement("div");
  addOnSelectDiv.setAttribute("class", "addon-select");
  let addOnNameDiv = document.createElement("div");
  addOnNameDiv.setAttribute("class", "addon-name");
  addOnNameDiv.innerHTML = name;
  let addOnPriceDiv = document.createElement("div");
  addOnPriceDiv.setAttribute("class", "addon-price");
  let priceString = "+$"+price;
  if(monthly) priceString=priceString+"/mo";
  else priceString=priceString+"/yr";
  addOnPriceDiv.innerHTML = priceString;
  totalPrice+=price;
  addOnSelectDiv.appendChild(addOnNameDiv);
  addOnSelectDiv.appendChild(addOnPriceDiv);
  return addOnSelectDiv;
}

document.querySelector(".finish .plan-select .plan-info .change a").addEventListener("click", function(){
  document.querySelector("#circle-2").setAttribute("class", "circle current");
  document.querySelector("#circle-4").setAttribute("class", "circle");
  document.querySelector("#step-2").style.display = "block";
  document.querySelector("#step-4").style.display = "none";
  document.querySelector("#next").style.display = "block";
  document.querySelector("#confirm").style.display = "none";
  document.querySelectorAll(".finish .addon-select").forEach(function(data){
    document.querySelector(".finish").removeChild(data);
  });
  curStep = 2;
});

