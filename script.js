const currentplayer = document.querySelector(".currentplayer");
var selected;
var player = "X";
var player2 = "O";

var positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],

];
function init() {
    selected = []
    
    currentplayer.innerHTML = "JOGADOR DA VEZ: ${player}";

    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = " ";
        item.addEventListener("click", newMove);
    });
}

init();
    function newMove(e) {
        const index = e.target.getAttribute("data-i");
        e.target.innerHTML = player;
        e.target.removeEventListener("click", newMove);
        selected[index] = player;

        setTimeout(()=> {
            check();            
        }, [100]);

        player = player === "X" ? "O" : "X";
        currentplayer.innerHTML = "JOGADOR DA VER: ${player}";
    }
    function check() {
        var playerLastMove = player === "X" ? "O" : "X"; 

        const items = selected
        .map((item, i) => [item, i])
        .filter((item) => [item, i])
        .map((item) => item[1]); 
    }