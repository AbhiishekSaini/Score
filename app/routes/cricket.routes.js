const { addMatch, updateMatch, matchDelete, getLiveMatch, getCompletdMatch, getScheduledMatch } = require("../controllers/cricket.controller");

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
        "/api/cricket/add-match",
        addMatch
    );

    app.put(
        "/api/cricket/update-match/:matchId",
        updateMatch
    );

    app.delete(
        "/api/cricket/delete-match/:matchId",
        matchDelete
    );

    app.get(
        "/api/cricket/get-live",
        getLiveMatch
    );

    app.get(
        "/api/cricket/get-completed",
        getCompletdMatch
    );

    app.get(
        "/api/cricket/get-scheduled",
        getScheduledMatch
    );
};
