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

for (let i = 0; i < 20; i++) {
  createSnowflake();
}

const genText = document.getElementById("gen-text");
const textEl = document.querySelector(".textMessage");
let currentIndex = 0;

genText.addEventListener("click", function() {
  let messages = [
    "I love you",
    "Aku sayang banget ama kamu",
    "Jangan lupa makan yang teratur",
    "Jangan begadang mulu",
    "Jaga kesehatan ya cantik",
    "Maaf ya kalo bikin kamu kesel terus",
    "Makasi udah bertahan ama aku",
    "Makasi udah mau bareng aku",
    "Makasi udah hadir di hidupku",
    "Makasi yaa",
    "Semangat yaa",
    "Semangat yaa buat kuliahnya",
    "Semangat ngejalanin hari harinya",
    "Harus tetap semangat yaa meskipun udah gaada aku nanti",
    "Aku sayang banget ama kamu, lopyuu kak",
  ];

  textEl.textContent = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;
});

function goToIndex() {
  window.location.href = 'beranda.html';
}