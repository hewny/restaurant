import css from './style.css';
import {renderNav} from './topnav';
import {renderHome} from './home';
import {renderMenu} from './menu';
import {renderLocation} from './location';
import {renderFooter} from './footer';

var createContent = document.createElement('div');
createContent.id = 'content';
document.body.appendChild(createContent);

const $content = document.getElementById('content');

renderNav();
renderHome();
renderFooter();

document.addEventListener('click', (e) => {
    if (e.target.innerHTML === "HOME") {
        $content.innerHTML = "";
        renderNav();
        renderHome();
        renderFooter();
    }
    if (e.target.innerHTML === "MENU") {
        $content.innerHTML = "";
        renderNav();
        renderMenu();
        renderFooter();
    }
    if (e.target.innerHTML === "LOCATION") {
        $content.innerHTML = "";
        renderNav();
        renderLocation();
        renderFooter();
    }
    if (e.target.innerHTML === "VIEW OUR MENU") {
        $content.innerHTML = "";
        renderNav();
        renderMenu();
        renderFooter();
    }
})

export {$content};