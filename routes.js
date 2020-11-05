const Router = require('express').Router;
const router = Router();
const axios = require('./axios');

const store = {
    resources: {
        1: {
            name: 'Brian',
            attr: 'Master'
        }
    }
}

router.get('/resources/select/:id', (req, res) => {
    console.log(req.params);
    const idx = req.params.id;

    res.send(store.resources[idx]);
});

router.get('/resources/add/:name/:attr', (req, res) => {

    const name = req.params.name;
    const attr = req.params.attr;

    let max = 0;

    for (let maxIndex in store.resources) {
        max = (max < parseFloat(maxIndex)) ? parseFloat(maxIndex) : max;
    }

    let maxValue = max + 1;

    console.log(max + 1);

    store.resources[maxValue] = {
            name: name,
            attr: attr
        };

    console.log(store.resources);

    res.send(store.resources[maxValue]);
});

router.get('/resources/delete/:id', (req, res) => {
    const idx = req.params.id;

    delete store.resources[idx];

    console.log(store.resources);

    res.send('Deleting id : ' + idx);
});

router.get('/resources/update/:id/:newName/:newAttr', (req, res) => {
    const idx = req.params.id;
    const newName = req.params.newName;
    const newAttr = req.params.newAttr;

    store.resources[idx].name = newName;
    store.resources[idx].attr = newAttr;

    console.log(store.resources);

    res.send('Updated id : ' + idx);
});

module.exports = router;