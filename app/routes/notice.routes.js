const {
  addNotice,
  deleteNotice,
  updateNotice,
  getNotice,
} = require("../controllers/notice.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/notice/add-notice", addNotice);

  app.delete("/api/notice/delete-notice/:noticeId", deleteNotice);

  app.get("/api/notice/get-notice", getNotice);

  app.put("/api/notice/update-notice/:noticeId", updateNotice);
};
