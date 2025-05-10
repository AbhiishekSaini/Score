const { addMatch, updateMatch, matchDelete, getLiveMatch, getCompletdMatch, getScheduledMatch } = require("../controllers/basketball.controller");

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
        "/api/basketball/add-match",
        addMatch
    );

    app.put(
        "/api/basketball/update-match/:matchId",
        updateMatch
    );

    app.delete(
        "/api/basketball/delete-match/:matchId",
        matchDelete
    );

    app.get(
        "/api/basketball/get-live",
        getLiveMatch
    );

    app.get(
        "/api/basketball/get-completed",
        getCompletdMatch
    );

    app.get(
        "/api/basketball/get-scheduled",
        getScheduledMatch
    );
};
