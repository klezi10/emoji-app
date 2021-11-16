const myEmojis = ['🌟', '😎', '🧁'];
const emojiContainer = document.getElementById('emoji-container');
const pushBtn = document.getElementById('push-btn');

for (let i = 0; i < myEmojis.length; i++) {
  const emoji = document.createElement('span');
  emoji.textContent = myEmojis[i];
  emojiContainer.append(emoji);
}

pushBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const emojiInput = document.getElementById('emoji-input');
  console.log(emojiInput.value);
});
