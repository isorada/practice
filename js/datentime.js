  
var date = new Date();
document.getElementById("date").innerHTML = (("0"+date.getDate()).slice(-2)) +"/"+ (("0"+(date.getMonth()+1)).slice(-2)) +"/"+ (date.getFullYear()) +" ";

function sTime() {

    var time = new Date();
    
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    
    m = checkTime(m);
    s = checkTime(s);

    function checkTime(i) {

        if (i < 10) {i = "0" + i};
        return i;
    
    }

    document.getElementById("time").innerHTML = h + ':' + m + ':' + s;
    setTimeout(sTime, 1000);
    
}
