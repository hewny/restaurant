import {$content} from './index';

function renderLocation() {
    let newDiv = document.createElement('div')
    newDiv.id = 'location'
    
    let newAddress = document.createElement('p')
    newAddress.innerHTML = "ADDRESS: 1234 Sushi Ave, Toronto"

    let newPhone = document.createElement('p')
    newPhone.innerHTML = "(123)-123-1234"

    let newHours = document.createElement('p')
    newHours.innerHTML = "Mon-Sun: 11:00am~10:00pm"

    let newMap = document.createElement('iframe')
    newMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184558.9262934389!2d-79.66538904401614!3d43.716092869643184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x122312907764d669!2sSushi%20House!5e0!3m2!1sen!2sca!4v1627248770046!5m2!1sen!2sca"
    newMap.height = "300px"
    newMap.width = "500px"
    newMap.style = "border: 0"
    newMap.loading = "lazy"

    newDiv.appendChild(newAddress);
    newDiv.appendChild(newPhone);
    newDiv.appendChild(newHours);
    newDiv.appendChild(newMap);

    $content.appendChild(newDiv)
}

export {renderLocation}
