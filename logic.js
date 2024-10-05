function getHumanChoice() {
    //let input = window.prompt("Enter either Rock, Paper, or Scissors.");
    
    let input = document.getElementById("textInput").value;

    if (input === "Rock") {
        document.getElementById("textOutput").innerHTML = "You chose Rock."
        return 0;  
    } else if (input === "Paper") {
        document.getElementById("textOutput").innerHTML = "You chose Paper."
        return 1;  
    } else if (input === "Scissors") {
        document.getElementById("textOutput").innerHTML = "You chose Scissors."
        return 2;  
    } else {
        document.getElementById("textOutput").innerHTML = "Invalid"
        return null;  
    }
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        document.getElementById("cpuOutput").innerHTML = "CPU chose Rock."
        return 0;  
    } else if (random === 1) {
        document.getElementById("cpuOutput").innerHTML = "CPU chose Paper."
        return 1;  
    } else {
        document.getElementById("cpuOutput").innerHTML = "CPU chose Scissors."
        return 2;  
    }
}

function playGame(){
    let human = getHumanChoice();
    if(human !== null){
        getComputerChoice();
    }
}