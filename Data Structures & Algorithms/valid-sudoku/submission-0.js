class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
       let set = new Set()
        for(let i = 0; i< board.length; i++){
            for(let j = 0; j< board[i].length; j++){
                let cell = board[i][j]
                if(cell === '.') continue
                let row = `row:${i}, cell:${cell}`
                let col = `col:${j}, cell:${cell}`
                console.log(row, col)
                let boxNumber = 3* Math.floor(i/3)+Math.floor(j/3)
                let box = `boxNumber:${boxNumber}, cell:${cell}`

                if(set.has(row) || set.has(col) || set.has(box)){
                    return false
                }
                    set.add(row).add(col).add(box)


            }
        }
        return true
}}
