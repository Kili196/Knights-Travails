class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


let moves = [[1, 2], [2, 1], [-1, 2], [1, -2], [-2, 1], [-2, -1], [-1, -2], [2, -1]]

function knightMoves(startingPoint, endPoint) {
    let startingPointt = new Node([startingPoint[0], startingPoint[1]]);
    let endPointt = new Node([endPoint[0], endPoint[1]]);

}


knightMoves([0, 0], [2, 0])

console.log(moves)
