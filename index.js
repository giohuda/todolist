const input = document.querySelector('.container-input input');
const addButton = document.querySelector('.add');
const conList = document.querySelector('.container-list');

addButton.addEventListener('click', () => {
    if (input.value == ''){
        alert('You must write something!');
    } else {

        // list
        const list = document.createElement('p');
        let listNode = document.createTextNode(input.value);
        list.appendChild(listNode);

        const element = document.createElement('div');
        element.appendChild(list);

        // conList.appendChild(element);

        // x button
        const xButton = document.createElement('p');
        const xNode = document.createTextNode('✕');

        xButton.appendChild(xNode);
        element.appendChild(xButton);
        xButton.classList.add('x');

        conList.appendChild(element);

        // input = ' 'if add button click
        input.value = '';

        // x button click
        xButton.addEventListener('click', () => {
            element.style.display = 'none'; 
        })
    }
})

