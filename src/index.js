import './style.css';
import { loadNav, loadGeneral } from './loadScreen';


document.getElementById('nav').appendChild(loadNav());
document.getElementById('content').appendChild(loadGeneral());