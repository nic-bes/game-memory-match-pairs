document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'alba3',
            img: 'images/Alba_3_100pixsq.png'
        },
        {
            name: 'alba3',
            img: 'images/Alba_3_100pixsq.png'
        },
        {
            name: 'alba2',
            img: 'images/Alba_2_100pixsq.png'
        },
        {
            name: 'alba2',
            img: 'images/Alba_2_100pixsq.png'
        },
        {
            name: 'zeffie1',
            img: 'images/Zeffie_1_100pixsq.png'
        },
        {
            name: 'zeffie1',
            img: 'images/Zeffie_1_100pixsq.png'
        },
        {
            name: 'zeffie2',
            img: 'images/Zeffie_2_100pixsq.png'
        },
        {
            name: 'zeffie2',
            img: 'images/Zeffie_2_100pixsq.png'
        },
        {
            name: 'bram1',
            img: 'images/Bram_1_100pixsq.png'
        },
        {
            name: 'bram1',
            img: 'images/Bram_1_100pixsq.png'
        },
        {
            name: 'bram2',
            img: 'images/Bram_2_100pixsq.png'
        },
        {
            name: 'bram2',
            img: 'images/Bram_2_100pixsq.png'
        }
    ]

    const grid = document.querySelector('.grid')

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/Tile_blank.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
        }
    }
})