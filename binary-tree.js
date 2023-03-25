function Node(value = null, left= null, right=null) {
    return { value, leftChild, rightChild };
}

function Tree(array){
    this.root = buildTree(array);

    function buildTree(array){
        if(array.length === 0){
            return;
        }
        let node = new Node(array[0])
        let temp = new Node();
        for(i = 1 i < array.length; i++){
            if (array[i] < node.value){
                while(node.left === null){

                }
            }
        }
    }
}

