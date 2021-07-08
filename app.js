
var count =0;

function lower() {
    if(count==0){
        return
    }
    count -= 1;
    document.getElementById('counter').innerHTML = count;
}

function add() {
    if(count<50){
        count += 1;
        document.getElementById('counter').innerHTML = count;
    }
    
}
    

