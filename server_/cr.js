const crypto = require ('crypto');

const setHash = async(dat)=>{
    let data = `${dat}`;
    try{
        let hashed = await crypto.createHash('sha256').update(data).digest('hex');
        return hashed;
    }catch(err){
        return 0;
    }
};

exports.getHash=(value)=>{
    return setHash(value);
};