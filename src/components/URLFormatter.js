

class URLFormatter {
    constructor() {

    }

    rewrite_url(url){
        if(url == "" || url == " "){
            return url;
        }

        let formatted = url;

        if(url.startsWith('https://drive.google.com/file/d/')){ // Google Drive Link
            let g_id = url.slice(32,65);
            formatted = 'https://drive.google.com/uc?export=download&id='+g_id;
        }

        return formatted;
    }

}

export default URLFormatter;