const Router = require('express').Router;
const router = Router();
const store = require('./store');

// Enregistrer une route, methode GET, url /resources/ID_RESOURCE
// Recuperer une ressource avec son id
router.get('/resources/:id', (req, res) => {
    const id = req.params.id
    res.json(store.resources[id])
})

// Creer une nouvelle ressource
router.post('/resources', (req, res) => {
    const resource = req.body
    //store.resources.add(res.json(resource));
    // on genere un id grace a la longueur du tableau des keys se trouvant dans notre objets
    resource.id = Object.keys(store.resources).length + 1 // ['res_id'] -> 1
    store.resources[resource.id] = resource
    res.json(resource)
})

// remplacer une ressource
router.put('/resources/:id', (req, res) => {
    const id = req.params.id
    if (req.params.id === req.body.id) {
        store.resources[id] = req.body
        res.json(req.body)
    }
    else
        res.status(400).end()
})

// patch une ressource
router.patch('/resources/:id', (req, res) => {
    const id = req.params.id
    const resource = { ...store.resources[id], ...req.body }
    store.resources[id] = resource
    res.json(resource)
})

// supprimer
router.delete('/resources/:id', (req, res) => {
    const { id } = req.params
    if (store.resources[id]) {
        delete store.resources[id]
        res.json({ success: true })
    }
    else
        res.status(404).end()

})

module.exports = router