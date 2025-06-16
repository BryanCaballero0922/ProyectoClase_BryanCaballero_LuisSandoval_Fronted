
const express = require('express');
const { getAllClub, createClub, updateClub, deleteClub } = require('../controllers/clubControllers');
const router = express.Router();

router.get('/', getAllClub);
router.post('/', createClub);
router.put('/:taller', updateClub);
router.delete('/:taller', deleteClub);

module.exports = router;


