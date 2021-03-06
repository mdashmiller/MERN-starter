const express = require('express')
const router = express.Router()

// Item model
const Item = require('../../models/Item')

// @route   GET api/items
// @desc    get all items
// @access  public
router.get('/', (req, res) => {
  Item
    .find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => res.json(err))
})

// @route   POST api/items
// @desc    create an item
// @access  public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  })

  newItem
    .save()
    .then(item => res.json(item))
    .catch(err => res.json(err))
})

// @route   DELETE api/items/:id
// @desc    remove an item
// @access  public
router.delete('/:id', (req, res) => {
  Item
    .findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})

module.exports = router
