

var createList = function()
{
 var names = [ "lion", "zebra", "giraffe", "hippo"];
 document.getElementById("animals").innerHTML=names.toString();
 
 var p= createElement("p");
 p.innerText="1."+names[0];
 
 var p=createElement("p");
 p.innerText="2."+names[1];
 
 var p=CreateElement("p");
 p.innerText="3."+names[2];
 
 var p=CreateElement("p");
 p.innerText="4."+names[3];
 
 

}
