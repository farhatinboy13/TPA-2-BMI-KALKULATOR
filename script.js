function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / Math.pow(height/100, 2);
    var result = document.getElementById("result");

    if (bmi < 18.5) {
        result.value = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.value = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.value = "Overweight";
    } else {
        result.value = "Obesity";
    }
}