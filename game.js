// Function - trigger game canvas 




// function - clicking "PLAY" button triggers page 2 to replace title page
function clickPlay(){
    let startPage = document.getElementById("page1")
    let loadPage2 = document.getElementById("page2");
    let game = document.getElementById("canvas");
    let loadPostGame = document.getElementById("postGamePage");
    startPage.style.display = "none"
    loadPage2.style.display = "block";
    game.style.display = "none";
    loadPostGame.style.display = "none";
    start();
}





// function - clicking "START" button triggers game canvas to replace page 2
function clickStart(){
    let loadPage2 = document.getElementById("page2");
    let game = document.getElementById("canvas");
    let loadPostGame = document.getElementById("postGamePage");
    loadPage2.style.display = "none";
    game.style.display = "block";
    loadPostGame.style.display = "none";
    start();
}


// function - post-game page is triggered when lives = 0 or enemies = 21 (all enemies destroyed)




// function - score counter = total destroyed enemy points + time bonus



// function - time bonus calculated



// function - player movement left or right with arrow keys



// function - shoots bullet with space bar



// function - enemyGreen movement



// function - enemyBlue movement



// function - enemyRed movement 



// function - enemyGold movement



// function - enemy shoots bullet at x interval of time



// function - bullet contact triggers explosion and -1 life (all enemies have 1 life, gold enemy has 2 lives)



// function - +1 life trigger = enemies >= 10 and/or gold enemy = 1



// function - display "victory!" or "game over" enemies = 21 or lives = 0



// function - display "final score" (score + time bonus)



// 
