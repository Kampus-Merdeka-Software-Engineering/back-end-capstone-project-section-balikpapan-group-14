const express= require('express');
const {pool}= require('../config/database');
const {getAllLessons}= require('../controllers/lesson.controller');
const lessonsRoute= express.Router();

lessonsRoute.get('/lessons', getAllLessons)

module.exports= {lessonsRoute}
