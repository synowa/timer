const counting = () => {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    var hour = today.getHours();
    if (hour < 10) {
        hour = "0" + today.getHours();
    }
    var minute = today.getMinutes();
    if (minute < 10) {
        minute = "0" + today.getMinutes();
    }
    var second = today.getSeconds();
    if (second < 10) {
        second = "0" + today.getSeconds();
    }

    document.getElementById("timer").innerHTML=day + "/" + month + 
    "/" + year + " | " + hour + ":" + minute + ":" + second;

    setTimeout("counting()",1000);
}