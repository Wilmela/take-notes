const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_MONGO_URL);
    console.log(
      `Connected to ${conn.connection.host} on port ${conn.connection.port}`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
