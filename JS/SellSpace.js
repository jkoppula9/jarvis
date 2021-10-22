

var sellspaceitems=[];

var item1={"itemname":"lamp"};
var item2={"itemname":"T.V"};
var item3={"itemname":"Cupboard"};
var item4={"itemname":"Sofa"};
var item5={"itemname":"Table"};
var item6={"itemname":"Shoes"};
sellspaceitems.push(item1);
sellspaceitems.push(item2);
sellspaceitems.push(item3);
sellspaceitems.push(item4);
sellspaceitems.push(item5);
sellspaceitems.push(item6);


var objTo = document.getElementById("maindiv");

for(var i=0;i<sellspaceitems.length;i++){
	console.log(sellspaceitems[i].itemname);
	
	objTo.innerHTML+='<div class="card" style="width:300px">'+
    '<img class="card-img-top" src="./images/lamp.jpg"  alt="Card image" style="width:100%">'+
    '<div class="card-body">'+
      '<h4 class="card-title">'+sellspaceitems[i].itemname+'</h4>'+
     '<p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>'+
      '<a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Get Details</a>'+
    '</div>'+
  '</div>';
}

