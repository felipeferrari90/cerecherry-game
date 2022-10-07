// ================== MOVIMENTACAO MOBILE =================================== //

var mc = new Hammer(document.getElementById("container-game"));
var mfase = document.getElementById("container-fase");

mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

var auxKeyCode = 48; //tecla 0;
var pressfoiApertado = null;

mc.on("panleft panright panup pandown panend press touchend", function(e) {
    
        if(e.type === "panleft") { 
            auxKeyCode = 37;   
        } else if(e.type === "panright") {
            auxKeyCode = 39;
        } else if(e.type === "panup") {
            auxKeyCode = 38;
            if(pressfoiApertado){
                mfase.scrollTop =  mfase.scrollTop - e.deltaY * 0.25;
                auxKeyCode = 48
            }
        } else if(e.type === "pandown") {
            auxKeyCode = 40;  
            if(pressfoiApertado){
                mfase.scrollTop =  mfase.scrollTop - e.deltaY * 0.25;
                auxKeyCode = 48
            }
        } else if(e.type === "press") {
            pressfoiApertado = true   
        } else if(e.type === "touchend") {
            if(pressfoiApertado){
               pressfoiApertado = null
            }   
        } 
        if(e.type === "panend" ){
            if(pressfoiApertado){
                pressfoiApertado = null
            }
            document.body.dispatchEvent(new KeyboardEvent('keydown', {keyCode: auxKeyCode }));
        }

});




