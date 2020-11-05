const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

class Store{
    constructor(name, options) {
        this.name = name;
        this.content = {};
    }

    getById(id){
        return this.content[id];
    }

    add(resource){
        resource.id = uuidv4();
        this.content[resource.id] = resource;
    }

    delete(id){
        if (id === this.content[id]) {
            delete this.content[id];
        }
    }

    replace(id, resource){
        this.content[id] = resource;
        this.content[id].id = uuidv4();
        this.content[id].answer = "J'ai replace";
    }

    patch(id, resource){
        this.content[id] = { ...this.content[id], resource};
        this.content[id].id = uuidv4();
        this.content[id].answer = "J'ai patché";
    }

    getAll(){
        return this.content;
    }

    autoSave() {

    }

    autoLoad() {

    }

    save() {

    }
}

exports.Store = Store;