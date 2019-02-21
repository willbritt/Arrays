

var createList = function()
{
 var names = [ "lion", "zebra", "giraffe", "hippo"];
 document.getElementById("animals").innerHTML=names.toString();
 
 var p= createElement("p");
 p.innerText="1."+names[0];
 
 var q=createElement("p");
 q.innerText="2."+names[1];
 
 var r=CreateElement("p");
 r.innerText="3."+names[2];
}
