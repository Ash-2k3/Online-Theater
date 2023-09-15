const sessions = [];

module.exports = {
           create: (session) => {
             sessions.push(session);
             return session;
           },
           findAll: () => sessions,
         };