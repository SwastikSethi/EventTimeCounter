
// const newYears =new Date(document.getElementById('inputDate').value) ;

const daysEle = document.getElementById("days")
const hoursEle = document.getElementById("hours")
const minutesEle = document.getElementById("minutes")
const secondsEle = document.getElementById("seconds")


function formatTime (time){
    return time < 10? (`0${time}`) : time;
}

// countdown(newYears);
// setInterval(countdown(newYears), 1000);
let newYears = '1 Jan 2099';


function countdown (){
    const Idate = document.getElementById('inputDate').value;
    newYears =  Idate
    // console.log('scnasonc')
    // const IMonth = document.getElementById('inputMonth').value;
    // const IYear = document.getElementById('inputYear').value;
    // console.log(newYears)

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const TotalSeconds = (newYearsDate-currentDate) / 1000;
    
    const days = Math.floor(TotalSeconds/3600/24);
    const hours = Math.floor(TotalSeconds/3600 % 24);
    const minutes = Math.floor(TotalSeconds/60)% 60;
    const seconds = Math.floor(TotalSeconds)%60;
    // console.log(days);
    
    daysEle.innerHTML = days;
    hoursEle.innerHTML = formatTime(hours);
    minutesEle.innerHTML = formatTime(minutes);
    secondsEle.innerHTML = formatTime(seconds);
    
} 
// countdown();
document.getElementById('submit').onclick = countdown();
setInterval(countdown, 1000);
