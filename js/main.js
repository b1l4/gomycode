function mean(a,b,c){
    return((a+b+c)/3);
}  
console.log(mean(3,3,3));
//var myarray=[1,2,3,4];
//myarray.pop();
//alert(myarray);   
//var test="bonjour";
//alert(test);
//test="words";
//alert(test);
function makebold() {
    var text = document.getElementById("para");
    text.style.fontWeight = "bold"
}
function makeunderline(){
    var text = document.getElementById("para");
    text.style.textDecoration="underline"
}
function makeitalic(){
    var text = document.getElementById("para");
  text.style.fontStyle="italic"
}
function fontsize(){
    var select=document.getElementById("size");
    var value = select.options[select.selectedIndex].value;
    var text = document.getElementById("para");
    text.style.fontSize=value
}
function policesize() {
    var e=document.getElementById("police");
    var value =e.options[e.selectedIndex].value;
    var text=document.getElementById("para");
    text.style.fontFamily=value
}
