const Notice = require("../models/notice.model");

exports.addNotice = async (req, res) => {
  try {
    const body = req.body;

    const newNotice = new Notice(body);
    await newNotice.save();

    return res.status(200).json({ message: "Notice created successfully!" });
  } catch (error) {
    console.log("Error in Add Notice!");
    return res.status(500).json("Internal server error!");
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    const noticeId = req.params.noticeId;

    if (!noticeId) {
      return res.status(401).json("Notice Id is required!");
    }

    const deleteNotice = await Notice.findByIdAndDelete(noticeId);

    if (deleteNotice) {
      return res.status(200).json({ message: "Notice deleted successfully!" });
    } else {
      return res.status(404).json({ message: "Notice not found!" });
    }
  } catch (error) {
    console.log("Error in Notice delete!");
    return res.status(500).json("Internal server error");
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const noticeId = req.params.noticeId;

    if (!noticeId) {
      return res.status(401).json("Notice Id is required!");
    }

    const updateNotice = await Notice.findByIdAndUpdate(noticeId, req.body, {
      new: true,
    });

    if (updateNotice) {
      return res.status(200).json({ message: "Notice updated successfully!" });
    } else {
      return res.status(404).json({ message: "Notice not found!" });
    }
  } catch (error) {
    console.log("Error in Notice update!", error);
    return res.status(500).json("Internal server error");
  }
};

exports.getNotice = async (req, res) => {
  try {
    const notice = await Notice.find({}).sort({ createdAt: -1 });

    return res.status(200).json({notice});
  } catch (error) {
    console.log("Error in get Notice!");
    return res.status(500).json("Internal server error");
  }
};
