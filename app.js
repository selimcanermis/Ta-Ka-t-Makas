let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoies(){
    const choies = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choies[randomNumber];
}

function convert(letter){
    if(letter === "r") return "Tas";
    if(letter === "p") return "Kagit";
    return "Makas";
}

function win(userChoies,computerChoies){
    userScore +=1;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser ="sen".fontsize(3).sub();
    const smallComp ="pc".fontsize(3).sub();
    result_p.innerHTML = convert(userChoies)+smallUser + " yener " + convert(computerChoies)+smallComp + " , Kazandın!" ;
    document.getElementById(userChoies).classList.add("green-glow");
    setTimeout(function(){document.getElementById(userChoies).classList.remove("green-glow")},1000);
}

function lose(userChoies,computerChoies){
    computerScore +=1;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser ="sen".fontsize(3).sub();
    const smallComp ="pc".fontsize(3).sub();
    result_p.innerHTML = convert(userChoies)+smallUser + " yenilir " + convert(computerChoies)+smallComp + " , Kaybettin!" ;
    document.getElementById(userChoies).classList.add("red-glow");
    setTimeout(function(){document.getElementById(userChoies).classList.remove("red-glow")},1000);
}

function draw(userChoies,computerChoies){
    const smallUser ="user".fontsize(3).sub();
    const smallComp ="comp".fontsize(3).sub();
    result_p.innerHTML = convert(userChoies)+smallUser + " eşit " + convert(computerChoies)+smallComp + " , Berabere!" ;
    document.getElementById(userChoies).classList.add("gray-glow");
    setTimeout(function(){document.getElementById(userChoies).classList.remove("gray-glow")},1000);
}

function game(userChoies){
    const computerChoies = getComputerChoies();
    switch (userChoies + computerChoies){
        case "pr":
        case "rs":
        case "sp":
            win(userChoies,computerChoies);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoies,computerChoies);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoies,computerChoies);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissors_div.addEventListener('click',function(){
        game("s");
    })
}
main();