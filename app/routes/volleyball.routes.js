const { addMatch, updateMatch, matchDelete, getLiveMatch, getCompletdMatch, getScheduledMatch } = require("../controllers/volleyball.controller");

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
        "/api/volleyball/add-match",
        addMatch
    );

    app.put(
        "/api/volleyball/update-match/:matchId",
        updateMatch
    );

    app.delete(
        "/api/volleyball/delete-match/:matchId",
        matchDelete
    );

    app.get(
        "/api/volleyball/get-live",
        getLiveMatch
    );

    app.get(
        "/api/volleyball/get-completed",
        getCompletdMatch
    );

    app.get(
        "/api/volleyball/get-scheduled",
        getScheduledMatch
    );
};
