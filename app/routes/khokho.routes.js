const { addMatch, updateMatch, matchDelete, getLiveMatch, getCompletdMatch, getScheduledMatch } = require("../controllers/khokho.controller");

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
        "/api/kho-kho/add-match",
        addMatch
    );

    app.put(
        "/api/kho-kho/update-match/:matchId",
        updateMatch
    );

    app.delete(
        "/api/kho-kho/delete-match/:matchId",
        matchDelete
    );

    app.get(
        "/api/kho-kho/get-live",
        getLiveMatch
    );

    app.get(
        "/api/kho-kho/get-completed",
        getCompletdMatch
    );

    app.get(
        "/api/kho-kho/get-scheduled",
        getScheduledMatch
    );
};
