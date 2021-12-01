
var sellspaceitems=[];

var item1={"itemname":"lamp","imageurl":"./images/lamp.jpg", "price":"$111","description":"one","contactinfo":"+1 9898765432"};
var item2={"itemname":"Car","imageurl":"./images/car.jpg","price":"$989","description":"one","contactinfo":"+1 9898765432"};
var item3={"itemname":"Chair","imageurl":"./images/chair.jpg","price":"$9292","description":"three","contactinfo":"+1 9898765432"};
var item4={"itemname":"Table","imageurl":"./images/table.jpg","price":"$899","description":"one","contactinfo":"+1 9898765432"};
var item5={"itemname":"Laptop","imageurl":"./images/lappy.jpg","price":"$1000.09","description":"one","contactinfo":"+1 9898765432"};
var item6={"itemname":"Shoes","imageurl":"./images/shoes.jpg","price":"$898.89","description":"one","contactinfo":"+1 9898765432"};

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
  if(filterditems.length>0){
    document.getElementById("noresults").style.display="none";
  }
  else{
    document.getElementById("noresults").style.display="";
  }
  setview(filterditems);

}

function getcurrent(i){
  document.getElementById("selectedItemName").innerHTML = sellspaceitems[i].itemname;
  document.getElementById("selectedItemPrice").innerHTML = sellspaceitems[i].price;
  document.getElementById("selectedItemDescription").innerHTML = sellspaceitems[i].description;
  document.getElementById("selectedItemContact").innerHTML = sellspaceitems[i].contactinfo;
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
       '<p class="card-text">'+viewitems[i].description+'</p>'+
        '<a href="#" class="btn btn-primary" onclick="getcurrent('+i+')" data-toggle="modal" data-target="#myModal">Get Details</a>'+
      '</div>'+
    '</div>';
  }
}




