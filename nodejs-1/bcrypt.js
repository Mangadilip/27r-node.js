const bcrypt = require('bcrypt');
const fs = require('fs');

let password = "INDIAISMYCOUNTRY";

// bcrypt.hash(password, 10, (err, hash) => {
//     if(err) {
//         console.log(err, 'Error while hashing');
//     }else {
//         // console.log(hash, 'Password hash');
//         fs.writeFile('./password.txt', hash, (err) => {
//             if(err) {
//                 console.log(err, 'Error while saving hash to file');
//             }else {
//                 console.log('Password hash saved to file');
//             }
//         });
//     }
  
// });

fs.readFile('./password.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err, 'File not found');
    }else {
        bcrypt.compare(password, data, (err, result) => {
            if(err) {
                console.log(err, 'Password is incorrect');
            }else {
                console.log(result, 'Password is correct');
            }
        });
    }
});
