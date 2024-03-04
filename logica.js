$(document).ready(function () {
  let currentInput = "";
  let operator = "";
  let previousInput = "";

  function updateDisplay() {
    $("#result").val(currentInput);
  }

  // Correção nos seletores para os botões numéricos
  $(
    "#number-0, #number-1, #number-2, #number-3, #number-4, #number-5, #number-6, #number-7, #number-8, #number-9"
  ).click(function () {
    currentInput += $(this).text();
    updateDisplay();
  });

  // Correção nos seletores para os botões de operação
  $("#add, #subtract, #multiply, #divide").click(function () {
    if (currentInput !== "") {
      if (previousInput === "") {
        previousInput = currentInput;
        currentInput = "";
        operator = $(this).text();
      } else {
        previousInput = performCalculation();
        currentInput = "";
        operator = $(this).text();
        updateDisplay();
      }
    }
  });

  // Realiza o cálculo e retorna o resultado
  function performCalculation() {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "÷":
        result = num1 / num2;
        break;
    }

    return result.toString();
  }

  // Trata o clique no botão igual
  $("#equals").click(function () {
    if (currentInput !== "" && previousInput !== "" && operator !== "") {
      currentInput = performCalculation();
      operator = "";
      previousInput = "";
      updateDisplay();
    }
  });

  // Trata o clique no botão C (limpar)
  $("#clear").click(function () {
    currentInput = "";
    operator = "";
    previousInput = "";
    updateDisplay();
  });
});
$(document).ready(function () {
  let currentInput = "";
  let currentOperation = "";

  $(".btn-secondary").click(function () {
    const value = $(this).text();
    currentInput += value;
    $("#result").val(currentInput);
  });

  $(".btn-success").click(function () {
    const value = $(this).text();
    if (value === "=") {
      try {
        const result = eval(currentOperation);
        $("#result").val(result);
      } catch (error) {
        $("#result").val("Erro");
      }
      currentInput = "";
      currentOperation = "";
    } else {
      currentOperation += currentInput + value;
      currentInput = "";
    }
  });

  $("#clear").click(function () {
    currentInput = "";
    currentOperation = "";
    $("#result").val("");
  });
});
