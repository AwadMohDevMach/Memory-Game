// if on click button 
document.querySelector(".control-buttons span").onclick = function(){
    let yourNmae = prompt("whats your name")
    // if name is null 
    if(yourNmae == null | yourNmae == ""){
        // set name to Unknown
        document.querySelector('.name span').innerHTML = "Unknown"
    // if name is not null 
    }else{
          // set name to your name
        document.querySelector('.name span').innerHTML = yourNmae;
    }
    // remove splash screen
    document.querySelector(".control-buttons").remove()
};
// effect duration 
let duration = 1000;

//select blocks controls  
let blocksontainer = document.querySelector(".momory-game-blocks");

// create array frmo game blocks
let blocks = Array.from(blocksontainer.children);

// create range of keys
let orderRange = [...Array(blocks.length).keys()]

shuffle(orderRange)



// add order css property to game blocks 
blocks.forEach((bolck , index) =>{

    // add css order property 
 bolck.style.order = orderRange[index]
  
    //  add click event 
    bolck.addEventListener("click" , function(){

        // triger the flip block function
        flipBlock(bolck)
    })
})

// flip block function
function flipBlock(selectedBlock){
    selectedBlock.classList.add(`is-fliped`)

    // collect All dliped cards
    let allFlippedBlocks = blocks.filter(flippedBlocks => flippedBlocks.classList.contains("is-fliped"))

    // if hteres two selecetd blocks 
    if  (allFlippedBlocks.length ===2){

    // stop clicking function 
        stopClcing();

    // check matshed block function
    checkMatchedBlock(allFlippedBlocks[0], allFlippedBlocks[1])
    }
}

// check matched block
function checkMatchedBlock(firstBlock, secondBlock){
    let triesElment = document.querySelector(".tries span")

    if(firstBlock.dataset.techonology === secondBlock.dataset.techonology){
        firstBlock.classList.remove("is-fliped")
        secondBlock.classList.remove("is-fliped")

        firstBlock.classList.add("has-match")
        secondBlock.classList.add("has-match")

        document.getElementById(`success`).play();

    }else{
        triesElment.innerHTML = parseInt(triesElment.innerHTML) + 1;

        setTimeout(()=>{
            firstBlock.classList.remove("is-fliped")
        secondBlock.classList.remove("is-fliped")
        },duration)
        document.getElementById(`fail`).play();
    }
   
}


// craete stop cleicing function 
function stopClcing(){

    // add class no clicing on main cintainrt 
    blocksontainer.classList.add("no-clicing")
   
    setTimeout(() => {
        // remove class no clicing after the duration 
        blocksontainer.classList.remove("no-clicing")
    },duration)
}



// shuffle function
function shuffle(array){
    
    // setting vars
    let current  = array.length
    let temp
    let rondom
    
    while(current > 0){

    // get rondom numbrt 
    rondom = Math.floor(Math.random() *current);
    
    // decrees length by one 
    current--;

    //  1 save  current  element in stach 
    temp = array[current];
    
    //current element = rondom element 
    array[current] = array[rondom];
    
    // rondom element = get element from stach
        array[rondom]  = temp
    
    }
    return array;
}


