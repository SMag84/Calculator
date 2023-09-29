//Переменная с математическим знаком
let op;

//Функция для расчёта
function math() {
    //Переменные с числами
  const number1 = Number(document.getElementById('number1').value);
  const number2 = Number(document.getElementById('number2').value);
  //Переменная для результата
  let result;
  //Создаем свитч кейсы для перебирания вариантов действий
  switch (op) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
  }
  document.getElementById('result').innerHTML = result;
}