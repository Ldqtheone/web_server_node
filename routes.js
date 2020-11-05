const Router = require('express').Router;
const router = Router();
const store = require('./store');

// Enregistrer une route, methode GET, url /resources/ID_RESOURCE

// Creer une nouvelle ressource
router.post('/resources', (req, res) => {
    const resource = req.body
    store.resources.add(resource);
    res.json(resource);
})

// Recuperer une ressource avec son id
router.get('/resources/:id', (req, res) => {
    const id = req.params.id
    res.json(store.resources.getById(id));
})

// remplacer une ressource
router.put('/resources/:id', (req, res) => {
    const id = req.params.id
    if (req.params.id === req.body.id) {
        store.resources.replace(id, req.body)
        res.json(req.body)
    }
    else
        res.status(400).end()
})

// patch une ressource
router.patch('/resources/:id', (req, res) => {
    const id = req.params.id
    store.resources.patch(id, req.body)
    res.json({resource: store.resources.getById(id)})
})

// supprimer
router.delete('/resources/:id', (req, res) => {
    const id = req.params.id

    if(!store.resources.delete(id)){
        return res.status(404).end();
    }
    else{
        res.json({ success: true, result: store.resources.getAll() })
    }

})

module.exports = router