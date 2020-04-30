/* 点击按钮，下拉菜单在 显示/隐藏 之间切换 */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function Function() {
  document.getElementById("print").classList.toggle("show");
}
//===========display/show==========
function display(id){
  var traget=document.getElementById(id);
  if(traget.style.display=="none"){
    traget.style.display="";
  }else{
    traget.style.display="none";
  }
}
//select option webpage changing
function mbar(sobj) {
  var docurl =sobj.options[sobj.selectedIndex].value;
  if (docurl != "") {
    open(docurl,'_blank');
    sobj.selectedIndex=0;
    sobj.blur();
  }
}
function open_win(){
  window.open("localhost:63342/angular01/public/page/checkpoint/TH_original97.html","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
}

// =========================collapse/change icon=====================================//
function showOrHide(x){
  var obj_div = document.getElementById("page-topnav");
  obj_div.style.display = (obj_div.style.display=='none')?'block':'none';
  x.classList.toggle("fa-angle-down");
}

function showHide(pid,id){
  var obj_div = document.getElementById(pid);
  obj_div.style.display = (obj_div.style.display=='none')?'block':'none';
  var aa =document.getElementById(id);
  if(aa.classList.contains('fa-angle-down')) {
    aa.classList.remove('fa-angle-down');
    aa.classList.add('fa-angle-right');
  }
  else{
    aa.classList.remove('fa-angle-right');
    aa.classList.add('fa-angle-down');
  }
}

