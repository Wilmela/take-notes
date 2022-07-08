const express = require("express");
const cors = require("cors");
require("dotenv").config();
const useRouter = require("./routes/note");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8000;

const app = express();
connectDB();
app.use(cors());

app.use(express.json());
app.use("/api/notes", useRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
