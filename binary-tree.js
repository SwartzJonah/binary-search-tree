function Node(value = null, left = null, right = null) {
    return { value, left, right };
}

function Tree(array) {
    this.root = buildTree(array);

    function buildTree(array) {
        if (array.length === 0) {
            return;
        }
        let sortedArray = [...new Set(array)].sort((a, b) => a - b);
        let mid = parseInt(sortedArray.length / 2);
        const root = new Node(sortedArray[mid], buildTree(sortedArray.slice(0, mid)), buildTree(sortedArray.slice(mid + 1)));
        return root;
    }

    const prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
    console.log(this.root);
    prettyPrint(this.root);
    
 
}



//testing area
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);



