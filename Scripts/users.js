var fs = require('fs');
// const data = require('../ProductData/userData.json');
const names = ["Liam","Olivia","Noah","Emma","Oliver","Ava","William","Sophia","Elijah","Isabella","James",
               "Charlotte","Benjamin","Amelia","Lucas","Mia","Mason","Harper","Ethan","Evelyn"]
const arrayData = []

for(var i=1;i<21;i++){
    arrayData.push(
        {
            user_id:i,
            user_name: names[i-1]
        }
    )
}

// console.log(arrayData)
fs.readFile('ProductData/userData.json', function(err, data) {
    // console.log(JSON.parse(data))
    data = JSON.parse(data)
    // if(data["data"]){
    //     data["data"].push(arrayData[0])
    //     fs.writeFile('ProductData/userData.json', JSON.stringify(data), function (err) {
    //         if (err) throw err;
    //         console.log('Saved!');
    //       });
    // }
    data["data"] = arrayData
    fs.writeFile('ProductData/userData.json', JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
})
