const express = require('express')
const router = express.Router()

// Doc model
const Doc = require('../../models/Doc')

// @route   GET api/docs
// @desc    get all docs
// @access  public
router.get('/', (req, res) => {
  Doc
    .find()
    .sort({ date: -1 })
    .then(docs => res.json(docs))
    .catch(err => res.json(err))
})

// @route   POST api/docs
// @desc    create a doc
// @access  public
router.post('/', (req, res) => {
  const newDoc = new Doc({
    prop1: req.body.prop
  })

  newDoc
    .save()
    .then(doc => res.json(doc))
    .catch(err => res.json(err))
})

// @route   DELETE api/docs/:id
// @desc    remove a doc
// @access  public
router.delete('/:id', (req, res) => {
  Doc
    .findById(req.params.id)
    .then(doc => doc.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})

module.exports = router
