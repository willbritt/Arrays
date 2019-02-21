

var createList = function()
{
 var names = [ "lion", "zebra", "giraffe", "hippo"];
 document.getElementById("animals").innerHTML=names.toString();
 
 var p= createElement("p");
 p.innerText="1."+names[0];
}
