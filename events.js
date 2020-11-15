const needle = require('needle');
const crypto = require('crypto');
const dToken = process.env.DAKEY;


const getEventScore = (text) =>{
    needle('post', 'https://api.dandelion.eu/datatxt/sent/v1',{
            token: dToken, 
            text: `'${text}'`, 
            lang: 'en'
    }).then((response)=>{
        return response.body.sentiment.score
    }).catch((err)=>{return (err)});
};

const createReactionEvent = async(text)=>{
    try{
        let id  = await crypto.createHash('sha256').update(text).digest('hex');
        let score = await getEventScore(text);
        return await ({
            id: id,
            score: score,
            log: [{v: score, ts: Date.now()}]
        });
    }catch(err){
        console.log(err);
        return 0;
    }
};
const sqc = Math.PI*4;
const simpleReaction = (eventScore, interval)=>{
   let t2 = Math.pow(interval, 2);
   let div = sqc*t2;
   return (eventScore/div)
}


const watchReaction = (e, t=0) =>{
    let I = e.score;
    do{
        t++;
        setInterval(()=>{
            let cev = simpleReaction(I, t);
            e.log.push({v: cev, ts: Date.now()})
            console.log(e.log)
        }, 60);
    }while(e.log[t].v > 0);
}

createReactionEvent('hello').then((obj)=>{
    watchReaction(obj)
}).catch(err=>console.log(err));
