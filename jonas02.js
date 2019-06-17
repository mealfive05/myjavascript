function ya(){
    let x = parseFloat(document.getElementById("x").value);
    let y =parseFloat(document.getElementById("y").value);
    var str=document.getElementById("str").value;

    alert(typeof(str));
document.getElementById("result").innerHTML =Math.round(x /y)+ '...'+ x%y;


}
