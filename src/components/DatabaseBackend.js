
const firebase_obj = require('../FirebaseConfig');

class DatabaseBackend {
    constructor() {
        this.state = {};
        this.database = firebase_obj.database;
    }

    async createRoom(room_info){
        let ref = await this.database.collection('rooms').doc();
        await ref.set(room_info);
        return ref

    }

}

export default DatabaseBackend;