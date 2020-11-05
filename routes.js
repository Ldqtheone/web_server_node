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

router.get('/resources/add', (req, res) => {
    let max = 0;

    for (let property in store.resources) {
        max = (max < parseFloat(property)) ? parseFloat(property) : max;
    }

    let maxValue = max + 1;

    console.log(max + 1);

    store.resources[maxValue] = {
            name: "Coco",
            attr: "Abricoto"
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

router.get('/resources/update/:id', (req, res) => {
    const idx = req.params.id;

    store.resources[idx].name = "NameUpdate";
    store.resources[idx].attr = "AttrUpdate";

    console.log(store.resources);

    res.send('Updated id : ' + idx);
});

module.exports = router;