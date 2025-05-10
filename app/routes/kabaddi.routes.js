const { addMatch, updateMatch, matchDelete, getLiveMatch, getCompletdMatch, getScheduledMatch } = require("../controllers/kabaddi.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

    // Add Match
    app.post(
        "/api/kabaddi/add-match",
        addMatch
    );

    app.put(
        "/api/kabaddi/update-match/:matchId",
        updateMatch
    );

    app.delete(
        "/api/kabaddi/delete-match/:matchId",
        matchDelete
    );

    app.get(
        "/api/kabaddi/get-live",
        getLiveMatch
    );

    app.get(
        "/api/kabaddi/get-completed",
        getCompletdMatch
    );

    app.get(
        "/api/kabaddi/get-scheduled",
        getScheduledMatch
    );
};
