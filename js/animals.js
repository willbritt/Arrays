

var createList = function()
{
 var names = [ "lion", "zebra", "giraffe", "hippo"];
 document.getElementById("animals").innerHTML=names.toString();
 
 var p= document.createElement("1."+names[0]);
 
 var q=document.createElement("2."+names[1]);
 p.innerText="2."+names[1];
 
 /*var r=document.createElement("r");
 p.innerText="3."+names[2];
 
 var s=document.createElement("s");
 p.innerText="4."+names[3];*/
 
 

}
