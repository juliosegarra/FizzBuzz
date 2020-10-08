const fizzBtn = document.getElementById("fizzBtn");

fizzBtn.addEventListener("click", function () {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const fizzResults = document.getElementById("fizzResults");
    fizzResults.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            document.getElementById("fizzResults").innerHTML += `FizzBuzz `;
        } else if (i % num1 === 0) {
            document.getElementById("fizzResults").innerHTML += `Fizz `;
        } else if (i % num2 === 0) {
            document.getElementById("fizzResults").innerHTML += `Buzz `;
        } else {
            document.getElementById("fizzResults").innerHTML += `${i} `;
        }
    }
});