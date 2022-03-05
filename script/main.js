(() => {

    let theThumbnails = document.querySelectorAll("#buttonHolder img"); 
    
    let gameBoard = document.querySelector(".puzzle-board");

    function changeBGImg() {
    gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
    }

    theThumbnails.forEach(item => item.addEventListener("click", changeBGImg));
    
})()