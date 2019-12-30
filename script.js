//remaining weeks to birthday
// the modulo result is used to calculate the remainder after the previous division
// to set minimum date input to curent date
let today = new Date(); 
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

if (dd<=9){
    dd = '0'+dd
}
if (mm<10){
    mm = '0'+mm
}
today = yyyy +'-'+mm+'-'+dd;
document.getElementById('date').setAttribute('min', today)
// console.log(document.querySelectorAll("input"));
// assigning date from input value
// var day = document.getElementById("day").value;
// var month = document.getElementById("month").value;
// var year = new Date().getFullYear();
// console.log(day);
// console.log(month);

// console.log(month);
// console.log(day);
function counting(e) {
    const dateValue = ()=>{
        const date = document.getElementById("date").value;
    return date
    }

    const year = dateValue().substring(0, 4);
    const month = dateValue().substring(5, 7);
    console.log(month)
    const day = dateValue().substring(8, 11);
    // const hours= 
    var birthday = new Date(year, month-1, day, 0, 0, 0).getTime();
    // console.log(new Date(year, month, day, 0, 0, 0))
    var now = new Date().getTime();


    var timeRemaining = (birthday - now) / 1000;
    // console.log(timeRemaining/(60*60*24*7))

    var remSeconds = Math.round(timeRemaining);
    // console.log(birthday - now);
    var remWeek = Math.floor(timeRemaining / (7 * 24 * 60 * 60));
    // console.log(remSeconds);
    // console.log(remWeek);

    var remWeek1 = Math.round(timeRemaining % (7 * 24 * 60 * 60));

    var remDay = Math.floor(remWeek1 / (24 * 60 * 60));

    var remDay1 = Math.round(remWeek1 % (24 * 60 * 60));

    var remHour = Math.floor(remDay1 / (60 * 60));

    var remHour1 = Math.round(remDay1 % (60 * 60));

    var remMinute = Math.floor(remHour1 / (60));

    var remMinute1 = Math.round(remHour1 % (60));

    var remSecond = Math.floor(remMinute1);

    if(timeRemaining>-1){
        var timer = document.getElementById("event").innerHTML = "<h3>" + remWeek + " weeks : " + remDay +
        "days  : " + remHour + " hours  : " + remMinute + " minutes : " + remSecond + " sec" + "</h3>";
    }
        
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        if (minute<9){
            minute='0'+minute
        }
        if (second<9){
            second='0'+second
        }
        let clock = `${hour}:${minute}:${second}`
        const time = document.getElementById('time').innerHTML=clock;
}

setInterval(counting, 1000);