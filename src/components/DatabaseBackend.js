
const firebase_obj = require('../FirebaseConfig');


class DatabaseBackend {
    constructor() {
        this.state = {'ref':''};
        this.database = firebase_obj.database;
        this.createRoom = this.createRoom.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.setSeek = this.setSeek.bind(this);
        this.getRef = this.getRef.bind(this);
        this.addChat = this.addChat.bind(this);
        this.deleteRoom = this.deleteRoom.bind(this);
    }

    async deleteRoom(){
        this.state.ref.delete();

    }

    async createRoom(room_info){
        let ref = await this.database.collection('rooms').doc();
        await ref.set(room_info);
        this.state.ref = ref;
        return ref
    }

    async getRef(room_id){
        console.log(`getting ref ${room_id}`)
        let ref = await this.database.collection(`rooms`).doc(room_id);
        this.state.ref = ref;
        return ref;

    }



    async togglePlay(state){
        this.state.ref.update({"mode":state});
    }

    async setSeek(time){
        await this.state.ref.update({"time":time});
        console.log("Updated")
    }

    async setURL(url){
        await this.state.ref.update({"url":url});
    }

    async addChat(msg){
        await this.state.ref.update({"chats":firebase_obj.firebase.firestore.FieldValue.arrayUnion(msg)});
    }

    async addSuggestion(sug){
        let ref = await this.database.collection(`suggestions`).doc();
        ref.set(sug);
    }

    async addVideo(vid){
        await this.state.ref.update({"video_list":firebase_obj.firebase.firestore.FieldValue.arrayUnion(vid)});
    }

}

export default DatabaseBackend;