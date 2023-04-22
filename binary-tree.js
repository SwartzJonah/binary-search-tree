function Node(value = null, left = null, right = null) {
    return { value, left, right };
}

function Tree(array) {
    this.root = buildTree(array);
    let tag = this.root;

    function buildTree(array) {
        if (array.length === 0) {
            return;
        }
        let sortedArray = [...new Set(array)].sort((a, b) => a - b);
        let mid = parseInt(sortedArray.length / 2);
        const root = new Node(sortedArray[mid], buildTree(sortedArray.slice(0, mid)), buildTree(sortedArray.slice(mid + 1)));
        return root;
    }

    function insert(newValue, root = tag){
        if(root === null){
            return new Node(newValue);
        }
        if (newValue === root.value){
            return root;
        }
        if (root.value < newValue){
            root.right = this.insert(newValue, root.right);
         } else if ( root.value > newValue){
            root.left = this.insert(newValue, root.left);
        }
        return root;
    }

    function deleteNode(oldValue, root = tag){
        
        if (root === null){
            console.log("1")
            return root;
        }
        if (root.value < oldValue){
            console.log("2")
            root.right = deleteNode(oldValue, root.right);
        } else if (root.value > oldValue){
            console.log("3")
            root.left= deleteNode(oldValue, root.left);
        } else {
            if (root.left === null){
                console.log("4")
                return root.right;
            } else if (root.right === null){
                console.log("5")
                return root.left;
            }
            root.value = minValue(root.right);
            root.right = deleteNode(oldValue, root.right)
        }
        return root;
    }

    function minValue(root){
        let minv = root.value;
        while(root.left != null){
            minv = root.left.value;
            root = root.left
        }
        return minv;
    }

    function find(findValue, root = tag){
        if(root.value === findValue){
            return root;
        }
        if (root.value > findValue){
            return this.find(findValue, root.left)
        }
        if (root.value < findValue){
            return this.find(findValue, root.right)
        }
    }

    const prettyPrint = (node = tag, prefix = '', isLeft = true) => {
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

    return {tag, prettyPrint, insert, deleteNode, find}
}



//testing area
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.insert(21);
tree.deleteNode(9);
tree.prettyPrint()





