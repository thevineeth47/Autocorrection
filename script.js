document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const charCount = document.getElementById('charCount');
    const grammarResult = document.getElementById('grammarResult');

    inputText.addEventListener('input', function () {
        // Update character count
        const count = inputText.value.length;
        charCount.textContent = `Character Count: ${count}`;

        // Basic grammar check (you may replace this with a more sophisticated solution)
        const errors = checkGrammar(inputText.value);
        grammarResult.textContent = errors.length > 0 ? 'Errors found' : 'No errors';
    });

    function checkGrammar(text) {
        // This is a basic example, you may replace it with a more advanced solution
        // or integrate with a grammar checking library or service.
        const errors = [];
        const words = text.split(' ');

        words.forEach((word, index) => {
            if (word.toLowerCase() === 'yourword') {
                errors.push(index);
            }
        });

        return errors;
    }
});
