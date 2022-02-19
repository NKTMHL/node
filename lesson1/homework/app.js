// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME:
// ім'я з обєкту і т.д і всі пункти з нового рядка.
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)
const path = require('path');
const fs = require('fs');


const inPersonUsers = [
    {name: "Anya", age: 34, city: "Киев"},
    {name: "Olya", age: 35, city: "Винница"},
    {name: "Ira", age: 36, city: "Житомир"}
]

const onlineUsers = [
    {name: "Petya", age: 31, city: "Львов"},
    {name: "Sasha", age: 32, city: "Тернополь"},
    {name: "Pasha", age: 33, city: "Луцк"},
]

const createUser1 = path.join(__dirname, 'main', 'inPerson', 'users1.txt');
const createUser2 = path.join(__dirname, 'main', 'online', 'users2.txt');

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }
    inPersonUsers.forEach(inPersonUser => {
        for (const key in inPersonUser) {
            fs.writeFile(createUser1, `${[key]}: ${inPersonUser[key]}\n`, {flag: 'a'}, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            });
        }
    });
});

fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }
    onlineUsers.forEach(onlineUser => {
        for (const key in onlineUser) {
            fs.writeFile(createUser2, `${[key]}: ${onlineUser[key]}\n`, {flag: 'a'}, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            });
        }
    });
    swapUsers();
});

const swapUsers = () => {
    fs.readFile(createUser1, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(data);

        fs.readFile(createUser2, 'utf8', (err, data1) => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(data1)

            fs.writeFile(createUser2, data, {flag: 'w'}, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            });
            fs.writeFile(createUser1, data1, {flag: 'w'}, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            });
        });
    });
};