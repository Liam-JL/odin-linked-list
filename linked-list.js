class LinkedList { 
    constructor () {
        this.head = new Node("HEAD")
    }

    append(value) {
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value)
    }

    prepend(value) {
        const nextNode = this.head.next;
        const newNode = new Node(value);
        newNode.next = nextNode;
        this.head.next = newNode;
    }

    printList() {
        let currentNode = this.head.next;
        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    size() {
        let currentNode = this.head.next;
        let nodeCount = 0;
        while(currentNode) {
            nodeCount += 1;
            currentNode = currentNode.next;
        }
        return nodeCount 
    }

    getHead() {
        return this.head.next
    }

    tail() {
        let currentNode = this.head
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    at(index) {
        if (index < 0 ) {
            return null
        }
        let currentNode = this.head.next
        let count = 0;
        while(currentNode) {
            if (count === index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            count ++;
        }
        return null; //out of bounds
    }

    pop() {
        if (!this.head.next) return; // Empty list
        let previousNode = this.head;
        let nextNode = this.head.next;
        while(nextNode.next) {
            previousNode = previousNode.next;
            nextNode = nextNode.next;
        }
        previousNode.next = null
    }

    contains(value) {
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value) {
                return true
            }
            currentNode = currentNode.next
        }
        return false
    }

    find(value) {
        let currentNode = this.head;
        let currentIndex = -1;
        while (currentNode) {
            currentIndex ++;
            if(currentNode.value === value) {
                return currentIndex;
            }
            currentNode = currentNode.next
        }
        return null;
    }

    toString() {
        let listString = '';
        let currentNode = this.head.next;
        while(currentNode) {
            listString = listString + `( ${currentNode.value} ) -> `;
            currentNode = currentNode.next;
        }
        listString = listString + 'null';
        return listString;
    }

    insertAt(value, index) {
        let previousNode = this.head;
        let nextNode = this.head.next;
        while(index > 0){
            if (nextNode === null) {
                break
            }
            previousNode = previousNode.next;
            nextNode = nextNode.next;
            index --
        }
        previousNode.next = new Node(value);
        previousNode.next.next = nextNode;
    }

    removeAt(index) {
        let previousNode = this.head;
        let nextNode = this.head.next;
        while(index > 0){
            if (nextNode.next === null) {
                break
            }
            previousNode = previousNode.next;
            nextNode = nextNode.next;
            index --
        }
        previousNode.next = nextNode.next;
    }

}

class Node {
    #next = null
    constructor(value) {
        this.value = value; 
    }

    get next(){
        return this.#next
    }

    set next(node) {
        this.#next = node
    }
}

const list = new LinkedList();

