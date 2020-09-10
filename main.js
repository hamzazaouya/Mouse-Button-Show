/*global document,event*/


document.getElementById('demo').onmousedown = function() {addShow(event);};

document.getElementById('demo').onmouseup = function() {rmvShow(event);};

function addShow(event) {
    
    'use strict';
    
    var btn = event.button;
    
    if(btn === 0) {
        
        document.getElementById('demo1').classList.add('show');
        
    }else if(btn === 1) {
        
        document.getElementById('demo2').classList.add('show');
        
    }else if(btn === 2) {
        
        document.getElementById('demo3').classList.add('show');
        
    }else if(btn === 3) {
        
        document.getElementById('demo4').classList.add('show');
        
    }else if(btn === 4) {
        
        document.getElementById('demo5').classList.add('show');
        
    }
}

function rmvShow(event) {
    
    'use strict';
    
    var btn = event.button;
    
    if(btn === 0) {
        
        document.getElementById('demo1').classList.remove('show');
        
    }else if(btn === 1) {
        
        document.getElementById('demo2').classList.remove('show');
        
    }else if(btn === 2) {
        
        document.getElementById('demo3').classList.remove('show');
        
    }else if(btn === 3) {
        
        document.getElementById('demo4').classList.remove('show');
        
    }else if(btn === 4) {
        
        document.getElementById('demo5').classList.remove('show');
        
    }
}