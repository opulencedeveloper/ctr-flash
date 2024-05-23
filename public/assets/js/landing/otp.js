document.querySelectorAll(".digit-input").forEach((input) => {
    input.addEventListener("paste", function (e) {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text");
  
      const inputs = document.querySelectorAll(".digit-input");
      inputs.forEach((input, index) => {
        if (pastedData[index]) {
          input.value = pastedData[index];
        }
      });
    });
  });
  
  
  document.querySelectorAll('.digit-input').forEach((input, index, inputs) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1) {
            const nextInput = inputs[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
    });
  
    input.addEventListener('paste', function (e) {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
  
        if (pastedData.length === 6 && !isNaN(pastedData)) {
            inputs.forEach((input, i) => {
                input.value = pastedData[i];
                const nextInput = inputs[i + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            });
        } else {
            alert("Please paste exactly 6 digits.");
        }
    });
  });
  
  
  document.querySelectorAll('.digit-input').forEach((input, index, inputs) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1) {
            const nextInput = inputs[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
    });
  
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '') {
            const prevInput = inputs[index - 1];
            if (prevInput) {
                prevInput.value = '';
                prevInput.focus();
            }
        }
    });
  
    input.addEventListener('paste', function (e) {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
  
        if (pastedData.length === 6 && !isNaN(pastedData)) {
            inputs.forEach((input, i) => {
                input.value = pastedData[i];
                const nextInput = inputs[i + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            });
        } else {
            alert("Please paste exactly 6 digits.");
        }
    });
  });