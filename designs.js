const canvas = document.querySelector("#pixelCanvas");
const color = document.querySelector("#colorPicker");
const sizePicker = document.querySelector("#sizePicker");
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWidth");
const resetBtn = document.querySelector('.btn')
let draw = false

//function to create grid and assign event listeners to all cells on creation
function makeGrid(height, width) {
    for (let i= 0; i < height; i++) {
        let row = canvas.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener("mousedown", function(evt) {
                cell.style.backgroundColor = color.value;
            cell.addEventListener("contextmenu", function(evt) {
                evt.preventDefault();
                cell.style.backgroundColor = "white";
            } )
            } )
            cell.addEventListener("mouseover", function(evt){
              if (!draw) return
              cell.style.backgroundColor = color.value;
          })
        }
    }
}


//function that uses the size picker submit to call makeGrid() funtion
sizePicker.addEventListener("submit", function(evt) {
    evt.preventDefault();
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    makeGrid(height.value, width.value);
});

function reset(){
  canvas.innerHTML = ''
  makeGrid(height, width)
}
resetBtn.addEventListener('click', reset)

window.addEventListener("mousedown", function(evt){
  draw = true
})
window.addEventListener("mouseup", function(){
  draw = false
})

