const root = document.getElementById('root');


root.innerHTML = `<div class="anim_wrapper"></div>`
root.innerHTML = root.innerHTML + `<h1 class="title">C 8 марта!</h1>`
root.innerHTML = root.innerHTML + `<div class="bot_box"><p class="text">От Барашка</p></div>`


const renderAnimation = () => {
    const wrapper = root.querySelector('.anim_wrapper')
    const items = []
    let timer = 0

    const getEl = (el) => {

    }

    const createItem = () => {
        const posX = Math.random() * (100 - 0) + 0
        const el = document.createElement('div')
        const emojiNUm = Math.floor(Math.random() * (4.4 - 0) + 0)

        switch(emojiNUm) {
            case 0:
                el.textContent = '🐑'
                break;
            case 1:
                el.textContent = '❤️'
                break;
            case 2:
                el.textContent = '🌹'
                break;
            case 3: 
                el.textContent = '🍓'
                break;
            case 4: 
                el.textContent = '🐏'
                break;
        }

        el.classList.add('anim_image')
        el.style.top = `${-10}%`;
        el.style.left = `${posX}%`
        wrapper.appendChild(el)

        return {
            posX: posX,
            posY: -10,
            el: el,
            iteration: 0,
            rotate: Math.floor(Math.random() * (2 - 0) + 0),
            rotateDeg: 0,
        }
    }

    setInterval( _ => {
        timer += 16;

        items.forEach( item => {
            // console.log(item.rotate);
            item.iteration = 100;
            item.posY += item.iteration / 216;
            item.el.style.top = `${item.posY}%`
            item.el.style.transform = `rotateZ(${item.rotate >= 1? item.rotateDeg = item.rotateDeg + 0.5 : item.rotateDeg = item.rotateDeg - 0.5}deg)`
        })

        if (timer / 16 > 5) {
            timer = 0

            items.push(createItem())
        }
    }, 16)
}

renderAnimation();