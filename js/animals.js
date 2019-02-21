

var createList = function()
{
 var names = [ "lion", "zebra", "giraffe", "hippo"];
 document.getElementById("animals").innerHTML=names.toString();
 
 var p= createElement("p");
 p.innerText="1."+names[0];
 
 var q=createElement("q");
 p.innerText="2."+names[1];
 
 var r=CreateElement("r");
 p.innerText="3."+names[2];
 
 var s=CreateElement("s");
 p.innerText="4."+names[3];
 
 

}
