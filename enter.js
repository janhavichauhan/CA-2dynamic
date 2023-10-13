let about = document.getElementById("about-creator")
let creator = document.getElementById("about")
creator.addEventListener("click",function(){
    about.style.display="block";
    about.style.transform="translate(20em,-40em)"
    about.onmouseleave= () =>{
        about.style.display="none";
    }
});

let how = document.getElementById("how")
let guide = document.getElementById("guide")
guide.addEventListener("click",function(){
    how.style.display="block";
    how.style.transform="translate(15em,-40em)"
    how.onmouseleave= () =>{
        how.style.display="none";
    }
});

const userDetailsForm = document.querySelector("#playerForm"); // Updated form id
const usernameInput = document.querySelector("#playerName"); // Updated input id
const enterbutton = document.querySelector("#enter-button"); // Updated button id

userDetailsForm.onsubmit = function (event) {
    event.preventDefault();
    handleUserDetailsFormSubmit();
};

function handleUserDetailsFormSubmit() {
    const USER_NAME = usernameInput.value.trim();
    
    if (USER_NAME !== "") {
        localStorage.setItem("username", USER_NAME);
        startGame();
    } else {
        alert("Please enter a valid username.");
    }
}

enterbutton.onclick = () => {
    userDetailsForm.submit();
    location.href="game.html";
};



