
var sellspaceitems=[];

var item1={"itemname":"lamp","imageurl":"./images/lamp.jpg"};
var item2={"itemname":"Car","imageurl":"./images/car.jpg"};
var item3={"itemname":"Chair","imageurl":"./images/chair.jpg"};
var item4={"itemname":"Table","imageurl":"./images/table.jpg"};
var item5={"itemname":"Laptop","imageurl":"./images/lappy.jpg"};
var item6={"itemname":"Shoes","imageurl":"./images/shoes.jpg"};
sellspaceitems.push(item1);
sellspaceitems.push(item2);
sellspaceitems.push(item3);
sellspaceitems.push(item4);
sellspaceitems.push(item5);
sellspaceitems.push(item6);

function search(){

var inputtext = document.getElementById("searchtxt").value.toLowerCase();
  console.log(inputtext);
  console.log(sellspaceitems.length);
  var filterditems=[];
  for(var i=0;i<sellspaceitems.length;i++){

    if(sellspaceitems[i].itemname.toLowerCase().includes(inputtext)){
      filterditems.push(sellspaceitems[i]);
    }


  } 
  setview(filterditems);

}


setview(sellspaceitems);
function setview(viewitems){
  var objTo = document.getElementById("maindiv");

  objTo.innerHTML='';
  for(var i=0;i<viewitems.length;i++){
    console.log(viewitems[i].itemname);
    
    objTo.innerHTML+='<div class="card" style="width:300px">'+
      '<img class="card-img-top" height="200" width="150" '+'src="'+viewitems[i].imageurl+'"'+'alt="Card image" style="width:100%">'+
      '<div class="card-body">'+
        '<h4 class="card-title">'+viewitems[i].itemname+'</h4>'+
       '<p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>'+
        '<a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Get Details</a>'+
      '</div>'+
    '</div>';
  }
}


