import './style.css';
import { loadNav, loadContent, loadList } from './loadScreen';
import { Todo } from './todo';
import { Note } from './note';

document.getElementById('nav').appendChild(loadNav());
document.getElementById('nav').appendChild(loadList());
document.getElementById('content').appendChild(loadContent());