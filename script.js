const makeGrid = () => {
    const grid = document.getElementById ("grid");
    for (let i = 1; i <= 20; i++ ) {

                const button = document.createElement("button");
                
                button.innerText=i;

                button.addEventListener("click", () => {
                    

                     if (fizzBuzz(i) =="fizzBuzz"){button.innerText = "fizzBuzz"
                       button.className = "fizzBuzz"}

                    if (fizzBuzz(i) == "fizz") {button.innerText = "fizz"; 
                        button.className = "fizz"}

                    if (fizzBuzz(i) =="buzz"){button.innerText = "buzz"
                        button.className = "buzz"}

                });

                grid.appendChild(button);
           


                
    }
}
const fizzBuzz = (num) => {
    if(num % 3 === 0 && num % 5 === 0) { return "fizzbuzz";}
    if (num % 3 === 0) { return "fizz";}
    if(num % 5 === 0) { return "buzz";}
}


makeGrid();
