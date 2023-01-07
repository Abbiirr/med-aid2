const queue_schema = require("../../../models/Queue");

//

//--------------------------------
const getQueue = async (req, res) => {
  const queue = await queue_schema.find();
  res.json(queue);
};

const setQueue = async (req, res) => {
  try {
    const { listOfPatients } = req.body;

    const newQueue = await queue_schema.create({
      listOfPatients :listOfPatients
    });
    const createQueue = await newQueue.save();

    console.log(req.body);
    res.json(newQueue);

    if (createQueue)
      return res.status(201).json({
        status: true,
        message: "New Queue have been added.",
      });
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

//

module.exports = {
  getQueue,
  setQueue
};
