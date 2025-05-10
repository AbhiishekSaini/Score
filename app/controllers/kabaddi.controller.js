const Kabaddi = require('../models/kabaddi.model');

exports.addMatch = async (req, res) => {
    try {
      const body = req.body;
  
      const newCric = new Kabaddi(body);
      await newCric.save();
  
      return res.status(200).json({ message: "Match created successfully!" });
    } catch (error) {
      console.log("Error in Add match!");
      return res.status(500).json("Internal server error!");
    }
  };
  
  exports.updateMatch = async (req, res) => {
    try {
      const matchId = req.params.matchId;
  
      if (!matchId) {
        return res.status(401).json("Match Id is required!");
      }
  
      const updateMatch = await Kabaddi.findByIdAndUpdate(matchId, req.body, {
        new: true,
      });
  
      if (updateMatch) {
        return res.status(200).json({ message: "Match updated successfully!" });
      } else {
        return res.status(404).json({ message: "Match not found!" });
      }
    } catch (error) {
      console.log("Error in match update!");
      return res.status(500).json("Internal server error");
    }
  };
  
  exports.matchDelete = async (req, res) => {
    try {
      const matchId = req.params.matchId;
  
      if (!matchId) {
        return res.status(401).json("Match Id is required!");
      }
  
      const deleteMatch = await Kabaddi.findByIdAndDelete(matchId);
  
      if (deleteMatch) {
        return res.status(200).json({ message: "Match deleted successfully!" });
      } else {
        return res.status(404).json({ message: "Match not found!" });
      }
    } catch (error) {
      console.log("Error in match delete!");
      return res.status(500).json("Internal server error");
    }
  };
  
  exports.getLiveMatch = async (req, res) => {
    try {
      const matches = await Kabaddi.find({ matchStatus: "live" });
  
      return res.status(201).json({ matches, message: "Matches fetched!" });
    } catch (error) {
      console.log("Error in get live match!");
      return res.status(500).json("Internal server error");
    }
  };
  
  exports.getCompletdMatch = async (req, res) => {
    try {
      const matches = await Kabaddi.find({ matchStatus: "completed" });
  
      return res.status(201).json({ matches, message: "Matches fetched!" });
    } catch (error) {
      console.log("Error in get completed match!");
      return res.status(500).json("Internal server error");
    }
  };
  
  exports.getScheduledMatch = async (req, res) => {
    try {
      const matches = await Kabaddi.find({ matchStatus: "scheduled" });
  
      return res.status(201).json({ matches, message: "Matches fetched!" });
    } catch (error) {
      console.log("Error in get scheduled match!");
      return res.status(500).json("Internal server error");
    }
  };
  