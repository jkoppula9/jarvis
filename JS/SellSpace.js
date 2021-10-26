
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

function search(){

var inputtext = document.getElementById("searchtxt").value;
  console.log(inputtext);
  console.log(sellspaceitems.length);
  var filterditems=[];
  for(var i=0;i<sellspaceitems.length;i++){

    if(sellspaceitems[i].itemname.includes(inputtext)){
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
      '<img class="card-img-top" src="./images/lamp.jpg"  alt="Card image" style="width:100%">'+
      '<div class="card-body">'+
        '<h4 class="card-title">'+viewitems[i].itemname+'</h4>'+
       '<p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>'+
        '<a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Get Details</a>'+
      '</div>'+
    '</div>';
  }
}


