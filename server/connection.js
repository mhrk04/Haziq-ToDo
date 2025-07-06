const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(`Error connecting to MongoDB: ${e.message}`);
    process.exit(1);
  }
};
