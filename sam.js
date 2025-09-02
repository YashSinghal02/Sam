// Offer Count Down Start
    function countDown() {
      const futureDate = new Date("September 30, 2025 12:00:00").getTime();
      const currentDate = new Date().getTime();
      const distance = futureDate - currentDate;

      if (distance < 0) {
        document.getElementById("countdown").innerHTML = "<h2>Offer Expired</h2>";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    }

    countDown(); 
    setInterval(countDown, 1000);
// Offer Count Down Ends


// Chat AI
  function cutChat() {
    document.getElementById("chatWidget").style.display = "none";
  }

// Counter Start

let c1=0;
let Interval1=setInterval(counter1,4);

function counter1(){
if(c1 < 500)
{
    console.log("Run");
    document.querySelector(".count-num1").innerHTML=++c1;
}
else{
    clearInterval(Interval1);
}
}

// 2
let c2=0;
let Interval2=setInterval(counter2,13);

function counter2(){
if(c2 < 150)
{
    console.log("Run");
    document.querySelector(".count-num2").innerHTML=++c2;
}
else{
    clearInterval(Interval2);
}
}

// 3

let c3=0;
let Interval3=setInterval(counter3,80);

function counter3(){
if(c3 < 25)
{
    console.log("Run");
    document.querySelector(".count-num3").innerHTML=++c3;
}
else{
    clearInterval(Interval3);
}
}

// 3

let c4=0;
let Interval4=setInterval(counter4,5);

function counter4(){
if(c4 < 400)
{
    console.log("Run");
    document.querySelector(".count-num4").innerHTML=++c4;
}
else{
    clearInterval(Interval4);
}
}


// Counter End

//  POP UPs Start
const popUp = () => {
    document.querySelector(".container-popup").classList.toggle("container-popup-show");
    document.querySelector("body").classList.toggle("body-show");

    console.log("hello")
};

// let Show=setTimeout(popUp,2000)
let Show=setTimeout(() => {
    popUp()
},2000)





//  POP UPs End


// Footer For Phone Accordion

function Acc(e){
        // e.target.parentElement.classList.toggle("acc-show");

    e.target.parentElement.parentElement.classList.toggle("acc-footer-show");
    // e.target.parentElement.nextElementSibling.classList.toggle("acc-show");

console.log(e.target);
}

    function Accfivesix(e){
        // e.target.parentElement.classList.toggle("acc-show");

    e.target.parentElement.parentElement.classList.toggle("acc-foote-show-56");
    // e.target.parentElement.nextElementSibling.classList.toggle("acc-show");

console.log(e.target);
}

    function Accthree(e){
        // e.target.parentElement.classList.toggle("acc-show");

    e.target.parentElement.parentElement.classList.toggle("acc-foote-show-3");
    // e.target.parentElement.nextElementSibling.classList.toggle("acc-show");

console.log(e.target);
}


    function Accfour(e){
        // e.target.parentElement.classList.toggle("acc-show");

    e.target.parentElement.parentElement.classList.toggle("acc-foote-show-4");
    // e.target.parentElement.nextElementSibling.classList.toggle("acc-show");

console.log(e.target);
}
