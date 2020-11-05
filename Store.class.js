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
    }

    delete(id){

    }

    replace(id, resource){

    }

    patch(id, resource){

    }

    autoSave() {

    }

    autoLoad() {

    }

    save() {

    }
}

exports.Store = Store;