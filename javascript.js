const sketchAreaSize = document.querySelector('#size');

const container = document.querySelector('#container');

function inputSize() {
    container.textContent = '';

    let size = prompt('Enter a number between 1 and 100 for the size of sketch area');

    function createRow() {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
        }
    }

    if (size > 0 && size < 101) {
        for (let i = 0; i < size; i++) {
            createRow();
        }
    } else {
        alert('Enter number between 1 to 100 only!!');
        return;
    }
}

sketchAreaSize.addEventListener('click', inputSize);

