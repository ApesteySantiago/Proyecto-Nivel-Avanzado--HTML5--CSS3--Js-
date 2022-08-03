let menu = document.querySelector('.menu');
let flag = false;

function start(){
    var imagenes = document.querySelectorAll('#boxImg img');
     drop = document.getElementById('boxdrop0');
     drop1 = document.getElementById('boxdrop1');
     drop2 = document.getElementById('boxdrop2');

    for(var i = 0; i < imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', drag, false);
        imagenes[i].addEventListener('dragend', end, false);
    }

    drop.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    drop.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    drop.addEventListener('drop', dropp, false);    


    drop1.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    drop1.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    drop1.addEventListener('drop', dropp1, false);   
    

    drop2.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    drop2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    drop2.addEventListener('drop', dropp2, false);   
        
}

function drag(e){
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}
function end(e){
    elemento = e.target;
    elemento.style.visibility = 'hidden';
}

function dropp(e){
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if(id != "img3"){
        var src=document.getElementById(id).src;
        drop.innerHTML='<img src="'+src+'" height="400px" width="275px">';
    }else{
        drop.innerHTML='la imagen no es admitida';
    }
}

function dropp1(e){
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if(id != "img3"){
        var src = document.getElementById(id).src;
        drop1.innerHTML='<img src="'+src+'" height="400px" width="275px">';
    }else{
        drop1.innerHTML='la imagen no es admitida';
    }
}

function dropp2(e){
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if(id != "img3"){
        var src = document.getElementById(id).src;
        drop2.innerHTML='<img src="'+src+'" height="400px" width="275px">';
    }else{
        drop2.innerHTML = 'la imagen no es admitida';
    }
}

function reload(){
    window.location.reload();
}
start()