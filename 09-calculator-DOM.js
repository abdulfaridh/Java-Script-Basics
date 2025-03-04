        let displayValue = localStorage.getItem('calculation') || '';

        document.querySelector('.js-display').innerHTML = displayValue || '0';

        function updateDisplay(value) {

            displayValue += value;
            document.querySelector('.js-display').innerHTML = displayValue;
            localStorage.setItem('calculation', displayValue);
        }

        function calculateResult() {
            if (displayValue !== '') {
                displayValue = eval(displayValue); // Evaluates the calculation
                document.querySelector('.js-display').innerHTML = displayValue;
                localStorage.setItem('calculation', displayValue);
            }
        }

        function clearDisplay() {
            displayValue = '';
            document.querySelector('.js-display').innerHTML = '0';
            localStorage.removeItem('calculation');
        }

        document.addEventListener('keydown', (event) => {
            const key = event.key;
            if (/\d|\+/.test(key)) {
                updateDisplay(key);
            } else if (key === 'Enter') {
                calculateResult();
            } else if (key === 'Escape') {
                clearDisplay();
            }
        });