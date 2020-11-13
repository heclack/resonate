const mongodb = require('mongodb');
const getHash = require('./cr');


/*DB STRUCT

register:{
    content: //content hash//
    author:{
        display: //displayed name//
        email: //this shouldnt be stored in plain text//
    };
    IID: //bound on email verification//
}
*/

const prepContent=(content)=>{
    let _content = `${content}`;
    _content.toUpperCase();
    _content.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    return _content.split(' ').join('');
};

const confirmEmail


(async()=>{
    //todo THESE SHOULD BE ENV AKA not hard-coded
    const MONGODB = 'mongodb://localhost:27017';

    try{
        let client = await mongodb.connect(MONGODB);
        let db = await client.db('resonate');
        
        const registerContent = async(userContent, userEmail)=>{
            try{
                let contentReady = await prep(userContent);
                let h = await getHash(contentReady);




        }