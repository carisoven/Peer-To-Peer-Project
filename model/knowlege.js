const mongoose = require("mongoose");

const KnowSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    sender: {
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
          },
          name: {
            type: mongoose.Schema.Types.String,
            ref: "user"
          }
        },
    resever: {
        uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
        },
        name: {
        type: mongoose.Schema.Types.String,
        ref: "user"
        }
    }
});

module.exports = Know = mongoose.model("knowlege", KnowSchema);
