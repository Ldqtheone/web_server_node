const express = require('express');
const middlewares = require('./middlewares');
const defaultRoutes = require('./routes');
const app = express();

app.disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middlewares.printReq);

app.get('/', middlewares.printReq, (req, res) => {
    res.json({ success: true });
})

app.post('/', middlewares.printReq, (req, res) => {
    res.json({ success: true });
});

app.use('/api', defaultRoutes);

app.listen(4021, (e, d) => {
    console.log('Listening on http://localhost:4021');
})