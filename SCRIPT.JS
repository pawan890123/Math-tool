function calculateSquare() {
    let num = document.getElementById("num").value;
    document.getElementById("result").innerHTML = `Square of ${num} is ${num * num}`;
}

function calculateSquareRoot() {
    let num = document.getElementById("num").value;
    document.getElementById("result").innerHTML = `Square root of ${num} is ${Math.sqrt(num).toFixed(2)}`;
}

function calculateCube() {
    let num = document.getElementById("num").value;
    document.getElementById("result").innerHTML = `Cube of ${num} is ${num ** 3}`;
}

function calculateCubeRoot() {
    let num = document.getElementById("num").value;
    document.getElementById("result").innerHTML = `Cube root of ${num} is ${Math.cbrt(num).toFixed(2)}`;
}

function calculateFactorial() {
    let num = document.getElementById("num").value;
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    document.getElementById("result").innerHTML = `Factorial of ${num} is ${fact}`;
}

function calculatePercentage() {
    let num = document.getElementById("num").value;
    document.getElementById("result").innerHTML = `${num}% is ${num / 100}`;
}

function checkPrime() {
    let num = document.getElementById("num").value;
    let isPrime = num > 1;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    document.getElementById("result").innerHTML = isPrime ? `${num} is a prime number` : `${num} is not a prime number`;
}
function calculateFactorial() {
    let num = document.getElementById("num").value;
    let resultElement = document.getElementById("result");

    if (num < 0) {
        resultElement.innerHTML = "Factorial is not defined for negative numbers.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    resultElement.innerHTML = `Factorial of ${num} is: ${factorial}`;
}
function checkPrime() {
    let num = parseInt(document.getElementById("num").value);
    let resultElement = document.getElementById("result");

    if (num < 2) {
        resultElement.innerHTML = `${num} is not a prime number.`;
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resultElement.innerHTML = `${num} is a prime number.`;
    } else {
        resultElement.innerHTML = `${num} is not a prime number.`;
    }
}
function calculateLCM() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultElement = document.getElementById("result");

    if (num1 <= 0 || num2 <= 0) {
        resultElement.innerHTML = "Please enter positive numbers.";
        return;
    }

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    let lcm = (num1 * num2) / gcd(num1, num2);
    resultElement.innerHTML = `LCM of ${num1} and ${num2} is: ${lcm}`;
}
function calculateHCF() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultElement = document.getElementById("result");

    if (num1 <= 0 || num2 <= 0) {
        resultElement.innerHTML = "Please enter positive numbers.";
        return;
    }

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    let hcf = gcd(num1, num2);
    resultElement.innerHTML = `HCF of ${num1} and ${num2} is: ${hcf}`;
}
function calculateInterest() {
    let interestType = document.getElementById("interestType").value;
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseFloat(document.getElementById("time").value);
    let timeUnit = document.getElementById("timeUnit").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let missingValue = document.getElementById("missingValue").value;
    let resultElement = document.getElementById("result");

    if (timeUnit === "months") {
        time = time / 12; // Convert months to years
    }

    let interest, finalAmount;

    if (missingValue === "interest") {
        if (interestType === "simple") {
            interest = (principal * rate * time) / 100;
        } else {
            finalAmount = principal * Math.pow((1 + rate / 100), time);
            interest = finalAmount - principal;
        }
        resultElement.innerHTML = `Calculated Interest: ₹${interest.toFixed(2)}`;
    } 
    else if (missingValue === "principal") {
        if (interestType === "simple") {
            principal = (amount - (amount * rate * time) / 100);
        } else {
            principal = amount / Math.pow((1 + rate / 100), time);
        }
        resultElement.innerHTML = `Required Principal: ₹${principal.toFixed(2)}`;
    } 
    else if (missingValue === "rate") {
        if (interestType === "simple") {
            rate = (100 * (amount - principal)) / (principal * time);
        } else {
            rate = (Math.pow(amount / principal, 1 / time) - 1) * 100;
        }
        resultElement.innerHTML = `Calculated Interest Rate: ${rate.toFixed(2)}%`;
    } 
    else if (missingValue === "time") {
        if (interestType === "simple") {
            time = (100 * (amount - principal)) / (principal * rate);
        } else {
            time = Math.log(amount / principal) / Math.log(1 + rate / 100);
        }
        resultElement.innerHTML = `Required Time: ${time.toFixed(2)} years`;
    } 
    else if (missingValue === "amount") {
        if (interestType === "simple") {
            finalAmount = principal + (principal * rate * time) / 100;
        } else {
            finalAmount = principal * Math.pow((1 + rate / 100), time);
        }
        resultElement.innerHTML = `Final Amount: ₹${finalAmount.toFixed(2)}`;
    }
}
function calculateAge() {
    let dob = document.getElementById("dob").value;
    let result = document.getElementById("result");

    if (dob === "") {
        result.innerHTML = "Please enter your date of birth!";
        return;
    }

    let dobDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `You are <b>${years} years, ${months} months, ${days} days</b> old.`;
}
function calculateExponent() {
    let base = document.getElementById("base").value;
    let exponent = document.getElementById("exponent").value;
    let result = document.getElementById("result");

    if (base === "" || exponent === "") {
        result.innerHTML = "Please enter both base and exponent!";
        return;
    }

    let power = Math.pow(parseFloat(base), parseFloat(exponent));
    result.innerHTML = `${base} raised to the power ${exponent} is <b>${power}</b>`;
}
function calculateLog() {
    let number = document.getElementById("number").value;
    let base = document.getElementById("base").value;
    let result = document.getElementById("result");

    if (number === "" || number <= 0) {
        result.innerHTML = "Please enter a valid positive number!";
        return;
    }

    if (base === "" || base <= 0) {
        base = 10;  // Default base = 10
    }

    let logValue = Math.log(number) / Math.log(base);
    result.innerHTML = `log<sub>${base}</sub>(${number}) = <b>${logValue.toFixed(6)}</b>`;
}
const units = {
    length: ["Meter", "Kilometer", "Mile", "Foot", "Inch"],
    weight: ["Kilogram", "Gram", "Pound", "Ounce"],
    temperature: ["Celsius", "Fahrenheit", "Kelvin"]
};

function updateUnits() {
    let category = document.getElementById("category").value;
    let fromUnit = document.getElementById("fromUnit");
    let toUnit = document.getElementById("toUnit");

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    units[category].forEach(unit => {
        let option1 = new Option(unit, unit);
        let option2 = new Option(unit, unit);
        fromUnit.add(option1);
        toUnit.add(option2);
    });
}

function convertUnit() {
    let category = document.getElementById("category").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let value = parseFloat(document.getElementById("inputValue").value);
    let result = document.getElementById("result");

    if (isNaN(value)) {
        result.innerHTML = "Please enter a valid number!";
        return;
    }

    let convertedValue;

    if (category === "length") {
        const lengthConversions = {
            "Meter": { "Kilometer": 0.001, "Mile": 0.000621371, "Foot": 3.28084, "Inch": 39.3701 },
            "Kilometer": { "Meter": 1000, "Mile": 0.621371, "Foot": 3280.84, "Inch": 39370.1 },
            "Mile": { "Meter": 1609.34, "Kilometer": 1.60934, "Foot": 5280, "Inch": 63360 },
            "Foot": { "Meter": 0.3048, "Kilometer": 0.0003048, "Mile": 0.000189394, "Inch": 12 },
            "Inch": { "Meter": 0.0254, "Kilometer": 0.0000254, "Mile": 0.000015783, "Foot": 0.0833333 }
        };
        convertedValue = value * (lengthConversions[from][to] || 1);
    } 

    else if (category === "weight") {
        const weightConversions = {
            "Kilogram": { "Gram": 1000, "Pound": 2.20462, "Ounce": 35.274 },
            "Gram": { "Kilogram": 0.001, "Pound": 0.00220462, "Ounce": 0.035274 },
            "Pound": { "Kilogram": 0.453592, "Gram": 453.592, "Ounce": 16 },
            "Ounce": { "Kilogram": 0.0283495, "Gram": 28.3495, "Pound": 0.0625 }
        };
        convertedValue = value * (weightConversions[from][to] || 1);
    } 

    else if (category === "temperature") {
        if (from === "Celsius" && to === "Fahrenheit") {
            convertedValue = (value * 9/5) + 32;
        } else if (from === "Celsius" && to === "Kelvin") {
            convertedValue = value + 273.15;
        } else if (from === "Fahrenheit" && to === "Celsius") {
            convertedValue = (value - 32) * 5/9;
        } else if (from === "Fahrenheit" && to === "Kelvin") {
            convertedValue = (value - 32) * 5/9 + 273.15;
        } else if (from === "Kelvin" && to === "Celsius") {
            convertedValue = value - 273.15;
        } else if (from === "Kelvin" && to === "Fahrenheit") {
            convertedValue = (value - 273.15) * 9/5 + 32;
        } else {
            convertedValue = value;
        }
    }

    result.innerHTML = `${value} ${from} is equal to <b>${convertedValue.toFixed(4)}</b> ${to}`;
}

window.onload = updateUnits;
// Function to generate 3D Surface Plot
function plot3DGraph() {
    let x = [];
    let y = [];
    let z = [];

    // Generating grid points
    for (let i = -5; i <= 5; i += 0.5) {
        let row = [];
        for (let j = -5; j <= 5; j += 0.5) {
            row.push(Math.sin(Math.sqrt(i**2 + j**2)));  // Sample function: sin(sqrt(x^2 + y^2))
        }
        z.push(row);
        x.push(i);
    }
    y = x;  // Making y values same as x for symmetry

    // Define the 3D Surface Plot
    let data = [{
        type: "surface",
        x: x,
        y: y,
        z: z
    }];

    let layout = {
        title: "3D Surface Plot",
        autosize: true,
        scene: { zaxis: { range: [-1, 1] } }
    };

    Plotly.newPlot("graph-container", data, layout);
}

// Call the function to plot
plot3DGraph();
