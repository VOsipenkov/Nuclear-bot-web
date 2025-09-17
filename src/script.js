const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const statusDiv = document.getElementById('status');

startBtn.addEventListener('click', () => {
    statusDiv.textContent = 'Бот запущен!';
    statusDiv.style.color = 'green';
});

stopBtn.addEventListener('click', () => {
    statusDiv.textContent = 'Бот остановлен!';
    statusDiv.style.color = 'red';
});