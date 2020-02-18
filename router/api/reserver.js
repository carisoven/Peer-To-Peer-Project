const express = require("express");
const router = express.Router();
const Resever = require("../../model/Resever");
const User = require("../../model/User");
const auth = require("../../Middleware/auth");

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

module.exports = router;