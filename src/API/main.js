import axios from 'axios'

// const site = baseURL

// axios.create({
//     baseURL: 'game',
//     withCredentials: false,
//     headers: {
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods':'GET',   
//     }
// })

const getWord = (cb) => {
    axios.get('https://random-word-api.herokuapp.com/word?number=1&swear=0')
    .then(res => {
        console.log(res.data)
        return cb(res.data[0])
    })
    .catch(e=>{
        console.error(e)
        return cb('hello')
    })
}

const getWordsArr = (n,cb) => {
    axios.get(`https://random-word-api.herokuapp.com/word?number=${n}&swear=0`)
    .then(res => {
        console.log(res)
        return cb(res.data)
    })
    .catch(e=>{
        console.log(e)
        return cb(['hello'])
    })
}


const getAllWords = (cb) => {
    axios.get(`https://random-word-api.herokuapp.com/all?swear=0`)
    .then(res => {
        return cb(res.data)
    })
    .catch(e=>{
        console.log(e)
        return cb(['taco','hello'])
    })
}

export {
    getWordsArr,
    getWord,
    getAllWords
}