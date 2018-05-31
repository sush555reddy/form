document.getElementById('forward').addEventListener('click', function () {
var str=document.getElementById("myInput").value;
var interval_var = setInterval(function() {
    var output=document.getElementById("output").value;
    output=  output + str.charAt(0);
}, 1000);
});
document.getElementById('pause').addEventListener('click',function(){
    clearInterval(interval_var);
});
document.getElementById('backward').addEventListener('click',function(){
var str = document.getElementById("output").value;

});