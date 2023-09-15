const sessionModel = require('../storage/mockStorage');

module.exports = {
  createSession: (sessionData) => {
    return sessionModel.create(sessionData);
  },
  getAllSessions: () => {
    return sessionModel.findAll();
  },
};