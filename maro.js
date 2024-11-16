 let crrMoleTile;
 let crrPlantTile;
 let score = 0;
 let gameOver =false;



window.onload =function(){
    setGame();
}
function setGame(){
    for(let i=0; i<9 ;i++){
        let tile = document.createElement("div");
        tile.id =i.toString();
        tile.addEventListener("click",selectTile)
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole,1000);
    setInterval(setPlant,2000);

}
function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}
function setMole(){
    if (gameOver){
        return;
    }

    if (crrMoleTile){
        crrMoleTile.innerHTML="";
    }


    let mole = document.createElement("img")
    mole.src ="./image/monty-mole.png";
    let num = getRandomTile();

    if(crrPlantTile && crrPlantTile.id==num){
        return;
    }
    crrMoleTile= document.getElementById(num);
    crrMoleTile.appendChild(mole);
}
function setPlant(){
    if (gameOver){
        return;
    }

    if (crrPlantTile){
        crrPlantTile.innerHTML="";
    }


    let plant = document.createElement("img")
    plant.src ="./image/piranha-plant.png";
    let num = getRandomTile();
    if(crrMoleTile && crrMoleTile.id==num){
        return;
    }
    crrPlantTile= document.getElementById(num);
    crrPlantTile.appendChild(plant);
}
function selectTile(){
    if (gameOver){
        return;
    }

    if(this == crrMoleTile){
        score+=10;
        document.getElementById("score").innerText =score.toString();
    }
    else if (this ==crrPlantTile){
        document.getElementById("score").innerText ="GAME OVER : " + score.toString();
        gameOver=true;
    }
}