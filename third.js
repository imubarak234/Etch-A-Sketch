const hand = document.querySelector('#container');

let r = document.querySelector(':root')

anew();

function anew() {
    let num = prompt('Enter a number for the grid');
    let him = num * num;
    let x = 0;

    if(num <= 100) {
        while (x < him) {
            const ran = Math.floor(Math.random()*16777215).toString(16);
            let it = "hi" + x;
            //let ike = ike + ;
            it = document.createElement("div");
            it.setAttribute('id', 'content');
            it.style.cssText = 'border-style: solid; border-color: black; margin: 3px 3px 3px 3px; padding: 8px 8px 8px 8px;';
            it.addEventListener('mouseover', function(e) {
                e.target.style.background = '#' + ran;
            })
            hand.appendChild(it);
            x++;
        }
        r.style.setProperty('--nail', num);
    }
    else {
        alert('Number should be less than 100')
    }

    
    //hand.style[''] = '';
    //let y = 5;
    //hand.style.cssText = 'display: grid; grid-template-columns: repeat(y, 40px); grid-template-rows: repeat(y, 40px);';
}


function clear(){
    const next = document.querySelectorAll('#content');
next.forEach((mike) => {
    hand.removeChild(mike);
    });
    anew();
}

const milk = document.querySelector('button')
milk.addEventListener('click', clear);


let xxy = 100;
const next = document.querySelectorAll('#content');
next.forEach((mike) => {
    mike.addEventListener('mouseover', r.style.setProperty('--hue', xxy - 10 + '%'));
    })
/**const next = document.querySelectorAll('div');
next.forEach((mike) => {
    mike.addEventListener('mouseover', () => {
        alert(mike.id)
    });
});*/