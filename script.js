//remaining weeks to birthday
// the modulo result is used to calculate the remainder after the previous division






function counting() {
    var birthday = new Date(2019, 4, 4, 0, 0, 0).getTime();
    var now = new Date().getTime();

    var timeRemaining = (birthday - now) / 1000;

    var remSeconds = Math.round(timeRemaining / 1000);
    var remWeek = Math.floor(timeRemaining / (7 * 24 * 60 * 60));
    var remWeek1 = Math.round(timeRemaining % (7 * 24 * 60 * 60));
    var remDay = Math.floor(remWeek1 / (24 * 60 * 60));
    var remDay1 = Math.round(remWeek1 % (24 * 60 * 60));
    var remHour = Math.floor(remDay1 / (60 * 60));
    var remHour1 = Math.round(remDay1 % (60 * 60));
    var remMinute = Math.floor(remHour1 / (60));
    var remMinute1 = Math.round(remHour1 % (60));
    var remSecond = Math.floor(remMinute1);

    var timer = document.getElementById("event").innerHTML = "<h3>" + remWeek + " weeks : " + remDay +
        "days  : " + remHour + " hours  : " + remMinute + " minutes : " + remSecond + " seconds" + "</h3>";

}

setInterval(counting, 1000);



// console.log("the remaining week: " + remWeek);
// console.log(remWeek1);
// console.log("the remaining days: " + remDay);
// console.log(remDay1);
// console.log("the remaining hours: " + remHour);
// console.log(remHour1);
// console.log("the remaining minutes: " + remMinute);
// console.log(remMinute1);
// console.log("the remaining seconds: " + remSecond);
// console.log(remTime);



// console.log(remWeeks);
// console.log(remDays);
// console.log(remHours);