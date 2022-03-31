
function operate(operator, n1, n2){

    const input = display().split(" ");
    console.log(input)
    input.forEach(e => {
        if(e === "+" || e === "-" || e === "*"){
            operator = e
            n1 = +input.splice(0, input.indexOf(e)).join("")
            n2 = +input.slice(1, -1).join("")  
        }
    });

    let result;
    switch(operator){
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "/":
            result = n1 / n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        default:
            result = 0
    }

    document.getElementById('display-value').innerHTML = result
}

function display(){
    let display = document.getElementById('display-value')
    if(display.innerText === "0"){
        display.innerText = ""
    }
    let inputValue = window.event.target.value;
    let displayValue = []
    display.innerText += ` ${inputValue}` ;
    console.log(inputValue)
    return display.innerHTML  
}

function clearDisplay(){
    document.getElementById('display-value').innerHTML = 0
}







