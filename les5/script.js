'use strict'

const chessBoard = {
    game: document.getElementById('game'),

    createMap() {

        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];

        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0]

        for (let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');

            this.game.appendChild(tr);

            for (let col = 0; col < cols.length; col++) {
                const td = document.createElement('td');

                tr.appendChild(td);

                if (rows[row] === 0 && cols[col] !== 0) {

                    td.innerHTML = cols[col]

                } else if (rows[row] !== 0 && cols[col] === 0) {
                    td.innerHTML = rows[row].toString()
                }
                if (this.isCellIsBlack(row, col)) {
                    td.style.backgroundColor = 'black'
                }
            }
        }

    },

    isCellIsBlack(rowNum, colNum) {

        if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
            return false;
        }

        return (rowNum + colNum) % 2 === 1;
    }
}


chessBoard.createMap();
