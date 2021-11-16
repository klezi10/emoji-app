let myEmojis = ['🌟', '😎', '🧁'];
const emojiContainer = document.getElementById('emoji-container');
const pushBtn = document.getElementById('push-btn');

function renderEmojis() {
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span');
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

renderEmojis();

pushBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const emojiInput = document.getElementById('emoji-input');
  console.log(emojiInput.value);

  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = null;
    emojiContainer.innerHTML = '';
    renderEmojis();
  }
});
