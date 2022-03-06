(() => {

    let theThumbnails = document.querySelectorAll("#buttonHolder img"); 
    let gameBoard = document.querySelector(".puzzle-board");
    let puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
    let dropZone = document.querySelectorAll(".drop-zone")

    const puzzlePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

    function changeBGImg() {
    gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
    puzzlePaths.forEach((img, index) => {
        puzzlePieces[index].src = `images/${img + this.dataset.bgref}.jpg`;
    });

    }
    function dragStarted(event) {
        console.log('started dragging a piece');
        event.dataTransfer.setData('currentItem', event.target.id);
    }

    function allowDragOver(event) {
    event.preventDefault();
    console.log('dragged over me');
    }

    function allowDrop(event) {
        event.preventDefault();
        console.log('dropped on me');
        let droppedEl = event.dataTransfer.getData('currentItem');
        console.log(droppedEl);
        this.appendChild(document.querySelector(`#${droppedEl}`));
    }

    function resetPuzzlePieces() {
        console.log("wow! you did a thing!")
        /* i tried experimenting with reloading the page. It reset the puzzle pieces, of course, but it wouldn't let me change the thumbnail:
        window.location.reload(); */
    }

    theThumbnails.forEach(item => item.addEventListener("click", changeBGImg));
    puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));
    dropZone.forEach(zone => {
        zone.addEventListener("dragover", allowDragOver);
        zone.addEventListener("drop", allowDrop);
    });    
    
/* event handling for the reset */
    theThumbnails.forEach(item => item.addEventListener("click"), resetPuzzlePieces);
})()
