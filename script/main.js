(() => {

    let theThumbnails = document.querySelectorAll("#buttonHolder img"), gameBoard = document.querySelector(".puzzle-board");

    function changeBGImg() {
    gameBoard.style.backgroundimage = `url(images/backGround${this.dataset.bgref}.jpg)`
    }


    theThumbnails.forEach((item => item.addEventListener("click", changeBGImg)));
    
})()