document.getElementById('taximeter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const currentAmount = parseFloat(document.getElementById('current-amount').value);
    const increaseAmount = parseFloat(document.getElementById('increase-amount').value);
    const increaseTime = parseFloat(document.getElementById('increase-time').value);
    const remainingTime = parseFloat(document.getElementById('remaining-time').value);

    // Calcular el incremento total
    const totalIncrease = (remainingTime * increaseAmount) / increaseTime;

    // Calcular el total del taxímetro
    const totalTaximeter = currentAmount + totalIncrease;

    // Mostrar el resultado
    document.getElementById('result').innerText = `El total acumulado en el taxímetro es: ${totalTaximeter.toFixed(2)} €`;
});
