import 'normalize.css';
import './style.scss';

export const getText: () => string = () => 'hello world';

const example: HTMLElement = document.createElement('div');

example.innerText = getText();

document.body.appendChild(example);
