const express = require("express");
const router = express.Router();
const Resever = require("../../model/Resever");
const User = require("../../model/User");
const auth = require("../../Middleware/auth");
const Know = require('../../model/knowlege');


//Get Resever All
router.get("/" ,auth, async (req,res)=>{
    try {
        const user = await User.findById(req.user.id).select("-password");
        const resever = await Resever.find({uid: user.id});
        if(!resever) return res.status(400).json({ msg: "Reserver not Found" });
        res.json(resever);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");    
    }
});

//get knowledge by resever_ID
router.get("/:id", async (req, res) => {
    try {
      const resever = await Resever.findById(req.params.id);
      // Check for ObjectId format and post
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !resever) {
        return res.status(404).json({ msg: "Know not found" });
      }
      const know = await Know.findOne({ title: resever.title , discription: resever.discription });
      res.json(know);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

module.exports = router;