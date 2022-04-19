
let startPosition = 0
let start = 0;

function calculate(operator, n1, n2){
    let result;
    switch(operator){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "/":
            return n1 / n2;
        case "*":
            return n1 * n2;
        default:
            result = 0
    }
    return result;
}

function usegetOperatorPosition(){
    inputArray = display().split(" ");
    
    //Start 
   /*
    console.log(inputArray)
    bodmasArray = [];
    leftBodmasArray = [];
   
    inputArray.forEach((i) => {
        if(i === "/"){
            for(e = inputArray.indexOf(i); e <= inputArray.length; e++){
                if(inputArray[e] !== "/" || inputArray[e] !== "+" || inputArray[e] !== "-" || inputArray[e] !== "*"){
                    console.log(e)gi
                    bodmasArray.push(inputArray[e + 1])
                }
            }

            for(let f = inputArray.indexOf(i) - 1; f !==0; f--){
                if(inputArray[f] !== "/" || inputArray[f] !== "+" || inputArray[f] !== "-" || inputArray[f] !== "*"){
                    console.log(f)
                    bodmasArray.unshift(inputArray[f])
                }
            }   
        }else if(i === "*"){
            console.log(i)
            for(e = inputArray.indexOf(i); e <= inputArray.length; e++){
                if(inputArray[e] !== "/" || inputArray[e] !== "+" || inputArray[e] !== "-" || inputArray[e] !== "*"){
                    console.log(e)
                    bodmasArray.unshift(inputArray[e + 1])
                }
            }

            for(let f = inputArray.indexOf(i) - 1; f !==0; f--){
                if(inputArray[f] !== "/" || inputArray[f] !== "+" || inputArray[f] !== "-" || inputArray[f] !== "*"){
                    console.log(f)
                    bodmasArray.unshift(inputArray[f + 1])
                }
            }   
       
    })

    console.log(leftBodmasArray)
    console.log(bodmasArray);
   }*/
//End
    let Total;
   
    do{
       if(!Total){
        firstOperatorIndex = getOperatorPosition(inputArray, start);
        leftSide = +inputArray.slice(firstOperatorIndex.startPosition, firstOperatorIndex.currentPosition).join("");
        secondOperatorIndex = getOperatorPosition(inputArray, start);
        rightSide = +inputArray.slice(secondOperatorIndex.startPosition, secondOperatorIndex.currentPosition).join("");
        Total = calculate(inputArray[firstOperatorIndex.currentPosition], leftSide, rightSide)
       }else{
        secondOperatorIndex = getOperatorPosition(inputArray, start);
        rightSide = +inputArray.slice(secondOperatorIndex.startPosition, secondOperatorIndex.currentPosition).join("");
        Total = calculate(inputArray[secondOperatorIndex.startPosition - 1], Total, rightSide)
       }
     
    document.getElementById('display-value').innerHTML = Total;
    }while(inputArray.length > start)
    
    start = 0;
}

function getOperatorPosition(input, startPosition) {
    for(i = startPosition; i <= input.length; i++){
        if(input[i] === "+" || input[i] === "-" || input[i] === "/" || input[i] === "*" || input[i] === ""){
           start = i + 1
           currentPosition = i
           operator = input[i]
           return {startPosition, currentPosition, operator}
        }     
    }};

function display(){
    let display = document.getElementById('display-value')
    if(display.innerText === "0"){
        display.innerText = ""
    }
 
    if(window.event.target.value === "+" || window.event.target.value === "-" || window.event.target.value === "*" || window.event.target.value === "/"){
        if(display.innerText.charAt(display.innerText.length - 1) ===  "+"  || display.innerText.charAt(display.innerText.length - 1) ===  "*" || display.innerText.charAt(display.innerText.length - 1) ===  "/" || display.innerText.charAt(display.innerText.length - 1) ===  "*" || display.innerText.charAt(display.innerText.length - 1) ===  "-"){
            display.innerText =  display.innerText.slice(0, - 1) + window.event.target.value
        }else {
            display.innerText += ` ${window.event.target.value}`
        }
    }else{
        display.innerText += ` ${window.event.target.value}`
    }
   return display.innerHTML
}

function clearDisplay(){
    document.getElementById('display-value').innerHTML = 0
    document.getElementById('.').disabled = false;
    start = 0 
}

function disableButton(){
    document.getElementById('.').disabled = true;
}









