function ya(){
    let x = parseFloat(document.getElementById("x").value);
    let y =parseFloat(document.getElementById("y").value);
    var str=document.getElementById("str").value;
console.log(str);
    let a=parseInt(x);
    let b=parseInt(y);
    let c=str;
    let re=a +c+ b;
    console.log(re);
document.getElementById("result").innerHTML =Math.round(re);


}
