class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


let moves = [[1, 2], [-1, 2], [1, -2], [-2, 1], [-2, -1], [-1, -2], [2, -1], [2, 1]]

function knightMoves(startingPoint, endPoint) {
    let startingPointNode = new Node(startingPoint[0], startingPoint[1]);
    let endPointNode = new Node(endPoint[0], endPoint[1]);



    let visitedNodes = [];
    let queue = [startingPointNode];

    while (queue.length != 0) {
        let currentNode = queue.shift();




        visitedNodes.push(currentNode);
        if (currentNode.x == endPointNode.x && currentNode.y == endPointNode.y) {
            return visitedNodes;
        }

        moves.forEach((move) => {
            if (currentNode.x + move[0] >= 0 && currentNode.y + move[1] >= 0) {
                console.log("ahhh")
                queue.push(new Node(currentNode.x + move[0], currentNode.y + move[1]))
            }
        })
    }

}


console.log(knightMoves([3, 3], [0, 0]));


