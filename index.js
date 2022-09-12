const express= require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello I am excited to learn node and express. oh i am sweating from all this learning while nodemon is bussy automating restarting');
});

const users = [
    {id:0, name: 'Shabana', email:'shabana@gmail.com', phone: '01788888888'},
    {id:1, name: 'Sabnoor', email:'sabnoor@gmail.com', phone: '01788888888'},
    {id:2, name: 'Srabonti', email:'srabonti@gmail.com', phone: '01788888888'},
    {id:3, name: 'Suchorita', email:'suchorita@gmail.com', phone: '01788888888'},
    {id:4, name: 'Sonya', email:'sonya@gmail.com', phone: '01788888888'},
    {id:5, name: 'Susmita', email:'susmitaa@gmail.com', phone: '01788888888'}




]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser);
    
});
// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'apple', 'banana', 'oranges', 'pineapple']);
})

app.get('/fruits/mangoes/fazli/', (req, res) => {
    res.send('Yammy Yammy tok marka fazli');
});

app.listen(port, () => {
    console.log('listening to port ', port);
})