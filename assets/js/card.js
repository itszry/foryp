function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.querySelector('.snow-container').appendChild(snowflake);
    snowflake.addEventListener('animationiteration', () => {
        snowflake.remove();
        createSnowflake();
    });
}

function showConfirm() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('confirmContainer').style.display = 'block';
}

function hideConfirm() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('confirmContainer').style.display = 'none';
}

function redirectToFlower() {
    window.location.href = 'flower.html';
}

function goToIndex() {
    window.location.href = 'beranda.html';
}

for (let i = 0; i < 20; i++) {
    createSnowflake();
}