//import axios from "./axiosConfig";

//export const registerUser = async (email, password) => {
   // return axios.post("/auth/register", {email, password});
//}

//export const loginUser = async (email, password) => {
    //return axios.post("/auth/signIn", {email, password});
//}

//import axios from "./axiosConfig";
const express = require('express');
const { getAllClub, createClub, updateClub, deleteClub } = require('../controllers/clubControllers');
const router = express.Router();

router.get('/', getAllClub);
router.post('/', createClub);
router.put('/:taller', updateClub);
router.delete('/:taller', deleteClub);

module.exports = router;



