const sessionService = require('../services/mockService');

module.exports = {
  createSession: (req, res) => {
    const { title, description } = req.body;
    const session = sessionService.createSession({ title, description });
    res.json(session);
  },
  getAllSessions: (req, res) => {
    const sessions = sessionService.getAllSessions();
    res.json(sessions);
  },
};