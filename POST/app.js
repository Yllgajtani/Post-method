const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true}));

// Serveri statik ne folderin publik HTML FILE
app.use(express.static(path.join(__dirname, 'public')));


app.post('/submit_answer', (request,response) => {
    response.send(request.body.answer);
})

app.listen(3000, () => {
    console.log("Serveri eshte duke u bere run ne porten 3000")
})