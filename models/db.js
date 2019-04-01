var faker = require("faker/locale/en_AU");

const users = [];
for(let i=0; i< 5; i++){
    users.push(
        {
            name : faker.internet.userName(),
            email : faker.internet.email(),
            password : faker.internet.password(),
        }
    )
}

exports.users = users;