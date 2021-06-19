const { Socket } = require("socket.io");

module.exports = { 
     generateAlarm(req, res) {
    try{
    const contries = [
        "Tel-Aviv",
        "Yavne",
        "Herzelia",
        "Ashdod",
        "Jerusalem"
    ]
    res.json({alramZone: contries[(Math.floor(Math.random() * 10)) % contries.length]})
}
catch(err){
    console.log(err)
    res.status(500).json({err})
}

}
}