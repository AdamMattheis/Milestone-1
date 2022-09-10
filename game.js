// function - clicking "PLAY" button triggers page 2 to replace title page
function clickPlay(){
    let startPage = document.getElementById("page1");
    let loadPage2 = document.getElementById("page2");
    let q1 = document.getElementById("q1");
    let loadPostGame = document.getElementById("postGamePage");
    startPage.style.display = "none";
    loadPage2.style.display = "block";
    q1.style.display = "none";
    loadPostGame.style.display = "none";
    start();
}

// function - clicking "START" button triggers game question 1 to replace page 2
function clickStart(){
    let startPage = document.getElementById("page1");
    let loadPage2 = document.getElementById("page2");
    let q1 = document.getElementById("q1");
    let loadPostGame = document.getElementById("postGamePage");
    let questions = document.getElementById("questions");
    startPage.style.display = "none";
    loadPage2.style.display = "none";
    questions.style.display = "block";
    q1.style.display = "block";
    loadPostGame.style.display = "none";
    start();
}




// question 1
function q1a(){
    let a = document.getElementById("1a");
    let b = document.getElementById("1b");
    let c = document.getElementById("1c");
    let d = document.getElementById("1d");
    a.style.color = "red"; 
    b.style.color = "red";
    c.style.color = "green";
    d.style.color = "red";

}

function q2b(){

}

function q3b(){

}

function q4b(){

}

function nextqButton1(){
    let startPage = document.getElementById("page1");
    let loadPage2 = document.getElementById("page2");
    let q1 = document.getElementById("q1");
    let loadPostGame = document.getElementById("postGamePage");
    let questions = document.getElementById("questions");
    let q2 = document.getElementById("q2");
    startPage.style.display = "none";
    loadPage2.style.display = "none";
    questions.style.display = "block";
    q1.style.display = "none";
    q2.style.display = "block";
    loadPostGame.style.display = "none";
    start();
}

// question 2



// question 3



// question 4



// question 5



// question 6



// question 7



// question 8



// question 9



// question 10


