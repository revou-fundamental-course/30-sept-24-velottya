document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);

    if (!isNaN(celsius)) {
        const fahrenheitResult = (celsius * 9 / 5) + 32;
        document.getElementById('conversionResult').textContent = `${celsius}°C = ${fahrenheitResult.toFixed(2)}°F`;
        document.getElementById('explanation').textContent = `Cara Kalkulasi: ${celsius}°C × 9/5 + 32 = ${fahrenheitResult.toFixed(2)}°F`;
    } else if (!isNaN(fahrenheit)) {
        const celsiusResult = (fahrenheit - 32) * 5 / 9;
        document.getElementById('conversionResult').textContent = `${fahrenheit}°F = ${celsiusResult.toFixed(2)}°C`;
        document.getElementById('explanation').textContent = `Cara Kalkulasi: (${fahrenheit}°F - 32) × 5/9 = ${celsiusResult.toFixed(2)}°C`;
    } else {
        alert('Silakan masukkan nilai yang valid untuk Celsius atau Fahrenheit.');
        return;
    }

    document.getElementById('result').style.display = 'block';
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheitInput').value = '';
    document.getElementById('result').style.display = 'none';
});

document.getElementById('reverseButton').addEventListener('click', function() {
    const celsiusContainer = document.getElementById('celsiusContainer');
    const fahrenheitContainer = document.getElementById('fahrenheitContainer');
    
    if (celsiusContainer.style.display === 'none') {
        celsiusContainer.style.display = 'block';
        fahrenheitContainer.style.display = 'none';
    } else {
        fahrenheitContainer.style.display = 'block';
        celsiusContainer.style.display = 'none';
    }
});
