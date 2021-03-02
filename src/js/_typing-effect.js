const typedSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
const typingCopy = 'Hello World!';
const typingDelay = 150;
let charIndex = 0;


const type =() => {
  if (charIndex < typingCopy.length) {
    if(!cursor.classList.contains('typing')) cursor.classList.add('typing');
    typedSpan.textContent += typingCopy.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove('typing');
  }
};

exports.type = type;