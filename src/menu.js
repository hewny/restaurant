import {$content} from './index';

const menuItems = [
    {
        name: "Dynamite Roll",
        description: "Tempura Shrimp, Avocado, Cucumber, Flying Fish Egg & Mayo",
        price: "$9.99",
    },
    {
        name: "Red Dragon Roll",
        description: "Dynamite Roll wrapped with Salmon",
        price: "$10.99",
    },
    {
        name: "Green Dragon Roll",
        description: "Dynamite Roll wrapped with Avocado",
        price: "$10.99",
    },
    {
        name: "Fire Cracker Dream Roll",
        description: "Scallop, Tempura Flakes, Spicy Mayo",
        price: "$7.99",
    },
];

function renderMenu() {
    let newDiv = document.createElement('div')
    newDiv.id = 'menu'

    menuItems.forEach((item) => {
        let newItem = document.createElement('div');
        newItem.innerHTML = item.name;
        newItem.classList.add('menu-item')

        let newDesc = document.createElement('p');
        newDesc.innerHTML = item.description;

        let newPrice = document.createElement('p');
        newPrice.innerHTML = item.price;

        newItem.appendChild(newDesc)
        newItem.appendChild(newPrice)

        newDiv.appendChild(newItem)
    })

    $content.appendChild(newDiv)

}

export {renderMenu}