const express = require("express");
const router = express.Router();
const Sender = require("../../model/Sender");
const auth = require("../../Middleware/auth");
const User = require("../../model/User");
const Know = require("../../model/knowlege");
// get All Sender
router.get("/" ,auth, async (req,res)=>{
    try {
        const user = await User.findById(req.user.id).select("-password");
        const sender = await Sender.find({uid: user.id});
        if(!sender) return res.status(400).json({ msg: "Sender not Found" });
        res.json(sender);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// get knowledge by sender_ID
router.get("/:id",async (req,res)=>{
    try {
        const send = await Sender.findById(req.params.id);
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !send) {
            return res.status(404).json({ msg: "Sender not found" });
        }
        const know = await Know.findOne({ title: send.title, discription: send.discription })
        res.json(know);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})
//update Status on 
router.post("/app",auth,async (req,res)=>{
    const {title,discription} = req.body;
    const kn = {status:"true"};

    try {
        const know  = await Know.findOneAndUpdate({title:title,discription:discription},{$set:kn},{new:true});
        const send = await Sender.findOneAndUpdate({title:title,discription:discription},{$set:kn},{new:true})
        res.json(send);
        res.json(know);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


// Delete knowledge on db
// router.delete("/:id", auth, async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//         const send = await Sender.findById()
//       res.json({ msg: "Know Delete" });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   });

module.exports = router;