var container  = document.getElementById("container");
var colors = [ 
    '#ff0000', '#00ff00', '#0000ff', 
    '#ff3333', '#ffff00', '#ff6600' 
];

const squareNum = 500;

for(let i = 1; i <= squareNum; i++){

    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover',() => {
        addColorToEl(square);
    });

    square.addEventListener('mouseout',() => {
        removeColorFromEl(square);
    });

    container.appendChild(square);

}


function addColorToEl(element){
    var color = colors[Math.round(Math.random() * colors.length)];

    if(color === '#ff3333'){
        element.classList.add('heart');
    }
    console.log(color);

    element.style.background = color;
    element.style.boxShadow =  `0 0 5px ${color}`;
    
    

}

function removeColorFromEl(element){

    element.style.background = '#1d1d1d';
    element.style.boxShadow =  `0 0 2px #000`
    element.style.borderRadius = '1px'
    element.classList.remove('heart');
}

