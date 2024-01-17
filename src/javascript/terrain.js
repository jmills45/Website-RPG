// Forest objects
class forest {
    constructor(id, index) {
        this.id = id;
        this.index = index;
        this.name = 'forest';
    }

    interact() {
        console.log('This is a forest');
    }
}

// Rock Objects
class rock {
    constructor(id, index) {
        this.id = id;
        this.index = index;
        this.name = 'rock';
    }

    interact() {
        console.log('This is a rock');
    }
}

// Town Objects
class town {
    constructor(id, index) {
        this.id = id;
        this.index = index;
        this.name = 'town';
    }

    interact() {
        console.log('This is a town');
    }
}

// Generate desired terrain
function createTerrain(type, id, index) {
    switch(type) {
        case 'forest':
            return new forest(id, index);

        case 'rock':
            return new rock(id, index); 
            
        case 'town':
            return new town(id, index);
    }
}

function createRandomTerrain(id, index) {
    
}

export { createTerrain };