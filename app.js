'use strict';
var date =new Date();
console.log(date);
//global get by id
var in1=document.getElementById('wish');
var myform=document.getElementById('wish-list');
var myCont=document.getElementById('to-do-list');


function ToDo(doit,dateto){
    this.doit=doit;
    this.dateto=dateto;
    ToDo.All.push(this);

}
ToDo.all=[];
 function getlocalStorage(){
     var local=JSON.stringify(ToDo.all);
     localStorage.setItem('list',in1);
   
 }
console.log(getlocalStorage());
 function storedLocal(){
     

 }
function onClik(){


 var j = JSON.parse(localStorage.getItem("input"));
}
   
//  var tableget=document.getElementById('to-do-table');
// var table=document.createElement('table');


function tableCreate() {
    
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    // tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 2; j++) {
        if (i == 2 && j == 1) {
          break
        } else {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('\u0020'))
          i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
          tr.appendChild(td)
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }
  tableCreate();
 
