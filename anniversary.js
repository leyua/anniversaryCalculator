let firstDay;
let toFirst;

function calcDate(days) {
    let year;
    let month;
    let date;

    if (days >= 100) {
        let addDays = days - 1; //2일째는 당일에서 1일 후이고 100일째는 당일에서 99일 후이므로
        let future = toFirst + addDays * (1000 * 60 * 60 * 24);
        let someday = new Date(future);
        year = someday.getFullYear();
        month = someday.getMonth() + 1;
        date = someday.getDate();
        document.querySelector(
            "#date" + days
        ).innerHTML = `${year}년 ${month}월 ${date}일`;
    } else {
        //1주년은 365일이 되는 날이 아니라 기념일의 1년 후이므로
        year = firstDay.getFullYear() + days;
        month = firstDay.getMonth() + 1;
        date = firstDay.getDate();
        document.querySelector(
            "#year" + days
        ).innerHTML = `${year}년 ${month}월 ${date}일`;
    }
}

function setFirst() {
    let now = new Date();
    let firstDate = document.querySelector("#days").value;
    firstDay = new Date(firstDate + "T00:00:00");
    let toNow = now.getTime();
    toFirst = firstDay.getTime();
    let passedTime = toNow - toFirst;
    let passedDay = Math.ceil(passedTime / (1000 * 60 * 60 * 24));
    document.querySelector("#accent").innerHTML = passedDay + "일";
    document.querySelector("#display").style.display = "none";
    calcDate(100);
    calcDate(200);
    calcDate(1);
    calcDate(500);
    calcDate(2);
    calcDate(1000);
    calcDate(3);
}

document.querySelector("#days").onkeypress = (e) => {
    if (e.keyCode == 13 || e.which == 3) {
        setFirst();
        return false;
    }
};
