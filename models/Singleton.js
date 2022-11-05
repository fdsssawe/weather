import  mongo from 'mongoose';

class PrivateSingleton {
    constructor() {
        mongo.connect("mongodb+srv://admin:M2YZPZUns5eNcyS@cluster0.fqtchuh.mongodb.net/forcast?retryWrites=true&w=majority",).then(()=>{
            console.log("db ok");
        }).catch((err)=>console.log(err))
    }
}class Singleton {
    constructor() {
        throw new Error('Use Singleton.getInstance()');
    }    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new PrivateSingleton();
        }
        return Singleton.instance;
    }
}

export default Singleton