
function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    return choices[Math.random() * choices.length>>0];
}

console.log(getComputerChoice());

