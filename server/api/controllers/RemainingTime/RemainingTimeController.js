const time_schema = require("../../../models/RemainingTime");

//

//--------- main med-aid get set delete update for disease------------------------
const getTime = async (req, res) => {
  const time = await time_schema.find();
  res.json(time);
};


const setTime = async (req, res) => {
  try {
    const { time } = req.body;

    const newRemainingTime = await time_schema.create({
      time: time,
    });
    const createRemainingTime = await newRemainingTime.save();

    console.log(req.body);
    res.json(newRemainingTime);

    if (createRemainingTime)
      return res.status(201).json({
        status: true,
        message: "New remaining time have been added.",
      });
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

//

module.exports = {
  getTime,
  setTime
};
