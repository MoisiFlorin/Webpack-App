export default function sum() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    var ansSum = document.getElementById("answear_sum");
    ansSum.value = num1 + num2;
}
