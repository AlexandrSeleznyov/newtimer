import Swal from '../node_modules/sweetalert2/dist/sweetalert2.js';

const dataField = document.getElementById("date-selector")
let targetDate = 0;  
const selector = document.querySelector(".timer");
const button = document.getElementById("push-button");
button.addEventListener("click", buttonOnKlick);
dataField.addEventListener("input", dataOnKlick);

function dataOnKlick(e){
   
    targetDate = new Date(e.target.value);
    if ((targetDate - Date.now()) <= 0 ) {
      Swal.fire('Please choose a date in the future');
      button.disabled = true;
      console.log("button", button)
      
      } else {
      button.disabled = false; }
   
}



function buttonOnKlick(e){
  timer();
  
 
}
function pad(value) {
return String(value).padStart(2, "0");
}  

function getTimerComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs};
  }

function timer(){

  let timeInterval = setInterval(()=>{
  const currentDate = Date.now();
  if (targetDate -  currentDate){
    
  }
  const time = getTimerComponents(targetDate -  currentDate);
  console.log("targetDate -  currentDate", targetDate -  currentDate);
  console.log("time", time);
  if ((targetDate -  currentDate) <= 0){
    clearInterval(timeInterval);
    return;
  }
  console.log(time);
  console.log(time.secs);
  selector.children[0].firstElementChild.textContent = time.days;
  selector.children[1].firstElementChild.textContent = time.hours;
  selector.children[2].firstElementChild.textContent = time.mins;
  selector.children[3].firstElementChild.textContent = time.secs;

  }, 1000);
 
  }



  
  
  
