const clock =document.querySelector("h2#clock");

function getClock(){
    const date = new Date();

    //"스트링".padStart(2,"0");  이 코드는 "스트링"의 길이가 2가 아니라면 "0을"추가하여 길이를 2로 만드는 코드이다. padEnd는 뒤에 추가하는 코드
    // getHours는 number타입이기 때문에 padStart를 사용하기 위해선 String으로 감싸고 String타입으로 바꾼다..
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText=`${hour}:${minutes}:${seconds}`;
}

getClock();
//반복적으로 실행하는 코드(5000은 5초)
setInterval(getClock, 1000);

//5초뒤 딱 한번 실행하는 코드
//setTimeout(sayHello,5000);
