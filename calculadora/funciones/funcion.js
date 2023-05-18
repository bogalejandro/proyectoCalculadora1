document.addEventListener('DOMContentLoaded', function() {
    let input = document.getElementById('result');
    let buttons = document.querySelectorAll('.buttons button');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        let value = button.textContent;
  
        if (value === '=') {
          calculate();
        } else if (value === 'IMC') {
          calculateIMC();
        } else if (value === 'IVA') {
          calculateIVA();
        } else if (value === 'C') {
          clearInput();
        } else {
          appendToInput(value);
        }
      });
    });
  
    function appendToInput(value) {
      input.value += value;
    }
  
    function calculate() {
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = 'Error';
      }
    }
  
    function calculateIMC() {
      let weight = prompt('Ingrese su peso en kg:');
      let height = prompt('Ingrese su altura en metros:');
      let imc = (weight / (height * height)).toFixed(2);
      input.value = 'IMC: ' + imc;
    }
  
    function calculateIVA() {
      let amount = prompt('Ingrese el monto:');
      let iva = amount * 0.16;
      input.value = 'IVA: ' + iva.toFixed(2);
    }
  
    function clearInput() {
      input.value = '';
    }
  });