(() => {

    let theThumbnails = document.querySelectorAll("#buttonHolder img"),
    gameBoard = document.querySelector(".puzzle-board");

    function changeBGImg()
    //debugger
    gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref})` 


    theThumbnails.forEach((item => item.addEventListener("click", changeBGImg)));
    
})()