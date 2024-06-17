document.getElementById('mortgage-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const principal = parseFloat(document.getElementById('principal').value);
    const yearlyRate = parseFloat(document.getElementById('rate').value);
    const years = parseInt(document.getElementById('years').value);
    
    const monthlyRate = yearlyRate / 1200;
    const numPayments = years * 12;
    const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    
    document.getElementById('payment').innerText = `$${payment.toFixed(2)}`;
});
