// Write your code here!
const mainNode = document.querySelector('main#main');
mainNode.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';
document.body.appendChild(newHeader);
