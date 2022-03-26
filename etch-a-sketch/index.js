

function createDivs(rows, cols){
    let box = document.getElementById('container-div');

    if(rows & cols){
        box.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
        box.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    
    
        for(let i = 1; i <= (rows * cols); i++){
            let bgColor = randomColors()
            let div = document.createElement('div')
            document.getElementById('container-div').appendChild(div).className = 'divs' 
            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = bgColor
            })
            div.addEventListener('mouseout', () => {
                div.style.backgroundColor = ""
            })
        }
    }else{
        box.style.display = "none"
    }
}

function randomColors(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    return `rgb(${r}, ${g},${b})`;
    }

function resetGrid(){
    createDivs()

    setTimeout(() => {
    const rows = prompt("Enter Columns:");
    const cols = prompt("Enter Rows:");

    createDivs(rows, cols)
    document.getElementById('container-div').style.display = "grid";
    }, 500)
       
}

createDivs(16,16)


