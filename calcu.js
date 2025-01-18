function Addition(){
    var one =document.getElementById("one").Value;
    var two =document.getElementById("two").Value;
    document.getElementById('result').innerHTML=Number(firstnumber)+Number(Secondnumber);
}
function subtraction(){
    var three=document.getElementById("one").Value;
    var four=document.getElementById("two").Value;
    document.getElementById('result').innerHTML=Number(firstnumber)-Number(Secondnumber);
}
function multiply(){
    var five=document.getElementById("one").Value;
    var six=document.getElementById("two").Value;
    document.getElementById('result').innerHTML=Number(firstnumber)*Number(Secondnumber);
}
function divide(){
    var seven=document.getElementById("one").Value;
    var eight=document.getElementById("two").Value;
    document.getElementById('result').innerHTML=Number(firstnumber)/Number(Secondnumber);}
    function tocelsius(){
let temperature=document.getElementById("one").value;
document.getElementById("result").innerHTML=(5/9*(temperature-32));
    }
    function tofahrenheit(){
        let temp=document.getElementById("one").value;
        document.getElementById("result").innerHTML=(9/5*(temp+32));
            }