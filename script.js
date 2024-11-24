class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


let moves = [
    [-1, 2], [1, -2], [-2, 1], [-2, -1],
    [-1, -2], [2, -1], [2, 1], [1, 2]
];

function knightMoves(startingPoint, endPoint) {
    let startingPointNode = new Node(startingPoint[0], startingPoint[1]);
    let endPointNode = new Node(endPoint[0], endPoint[1]);



    let visitedNodes = [];
    let queue = [[startingPointNode, [startingPoint]]];

    console.log(queue);
    while (queue.length != 0) {
        let [currentNode, path] = queue.shift();

        if (!contains(visitedNodes, currentNode)) {
            visitedNodes.push(currentNode);
        }
        if (currentNode.x == endPointNode.x && currentNode.y == endPointNode.y) {
            return path;
        }

        moves.forEach((move) => {
            let newX = currentNode.x + move[0];
            let newY = currentNode.y + move[1];
            if ((newX >= 0 && newX <= 7) && (newY >= 0 && newY <= 7)) {
                let newMove = new Node(newX, newY);
                if (!contains(visitedNodes, newMove)) {
                    queue.push([new Node(currentNode.x + move[0], currentNode.y + move[1]), [...path, [newX, newY]]])

                }
            }
        })

    }


}

function contains(list, object) {
    return list.some(element => element.x == object.x && element.y == object.y);

}






console.log(knightMoves([0, 0], [1, 2]));





