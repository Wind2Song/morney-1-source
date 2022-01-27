let id = 0;
class ID {
    value:number;
    startFrom(){
        return this.value+2333;
    }
    constructor(){
        id += 1;
        this.value = id;
    }
};

export {ID};