const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/mockController');

// Create a new session
router.post('/sessions', sessionController.createSession);

// Get all sessions
router.get('/sessions', sessionController.getAllSessions);

module.exports = router;