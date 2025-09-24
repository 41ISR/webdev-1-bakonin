const buttons = document.querySelectorAll('.button');
const display = document.querySelector(".display");

let currentExpression = '0'; // Текущее выражение

// button в данном случае будет передаваться СОБЫТИЕ НАЖАТИЕ, где можно будет узнать кнопку по которой 
// нажали через target и из которой можно будет доставать её значение

function handleButton(button) {
    const value = button.target.textContent; // Получаем текст кнопки (например, "5", "+")

    // Обработка разных типов кнопок
    if (value === '=') {
        currentExpression = eval(currentExpression.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-"))
    } else if (value === 'C') {
        currentExpression = 0
    } else if (value === '%') {
        currentExpression = currentExpression.textContent.split("%")
        currentExpression = (currentExpression[0] / 100) * currentExpression[1]
    } else {
        currentExpression += value
    }
    console.log(currentExpression);
    
    display.textContent = currentExpression;
  };

// Для каждой кнопки добавляем обработчик клика
buttons.forEach(button => {
  button.addEventListener('click', handleButton);
};
