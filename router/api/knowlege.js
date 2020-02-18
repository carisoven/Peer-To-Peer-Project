const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
// const config = require("config");

const auth = require("../../middleware/auth");
const User = require("../../model/User");
const Know = require("../../model/knowlege");
const Resever = require("../../model/Resever");
const Sender = require("../../model/Sender");

router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //add Knowlege
      const user2 = await User.findOne({ name: req.body.name }).select(
        "-password"
      );
      const user = await User.findById(req.user.id).select("-password");
      const newknow = new Know({
        title: req.body.title,
        discription: req.body.discription,
        status: req.body.status,
        resever: { uid: req.user.id, name: user.name },
        sender: { uid: user2.id, name: user2.name }
      });
      const know = await newknow.save();
      res.json(know);
      //add Resever
      const newResev = new Resever({
        uid: req.user.id,
        name: user.name,
        title: req.body.title,
        discription: req.body.discription
      });
      const resev = await newResev.save();
      console.log(resev);

      //add Sender
      const newSend = new Sender({
        uidresev: req.user.id,
        uid: user2.id,
        name: user2.name,
        title: know.title,
        discription: know.discription,
        status: req.body.status
      });

      const send = await newSend.save();
      console.log(send);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const know = await Know.find({ status: "false" });
    if (!know) return res.status(400).json({ msg: "Knowledge not found" });
    res.json(know);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//get by id
router.get("/:id", async (req, res) => {
  try {
    const know = await Know.findById(req.params.id);
    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !know) {
      return res.status(404).json({ msg: "Know not found" });
    }
    res.json(know);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//edit knowledge on db
router.post(
  "/editknow",
  [
    auth,
    [
      check("title", "Title is required")
        .not()
        .isEmpty(),
      check("discription", "Discription is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, discription } = req.body;
    const known = {
      title: title,
      discription: discription
    };
    try {
      const knowl = await Know.findOne({ _id: req.body.id });
      const re = await Resever.findOne({ title: knowl.title });
      const sen = await Sender.findOne({ title: knowl.title });

      let knownn = await Know.findOneAndUpdate(
        { _id: knowl._id },
        { $set: known },
        { new: true }
      );

      let resever = await Resever.findOneAndUpdate(
        { _id: re._id },
        { $set: known },
        { new: true }
      );

      let sends = await Sender.findOneAndUpdate(
        { _id: sen._id },
        { $set: known },
        { new: true }
      );
      res.json(knownn);
      res.json(resever);
      res.json(sends);
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//Delete knowledge on db
router.delete(
"/delknow",

)

module.exports = router;
