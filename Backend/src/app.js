const express = require("express");
const app = express();
const fileUpload = require("./services/storage.services");
const multer = require("multer");
const postModel = require("./models/post.model");
const cors = require("cors");
app.use(
  cors({ origin: "https://project-dam-digital-asset-managemen.vercel.app/" }),
);
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  //   console.log(req.body);

  const data = await fileUpload(req.file.buffer);

  console.log(data);
  const post = postModel.create({
    image: data.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "File uploaded.",
  });
});
app.get("/", (req, res) => {
  res.json({ message: "Server is running." });
});

app.get("/view-post", async (req, res) => {
  const data = await postModel.find();
  res.status(200).json({
    message: "Data fetched successfully.",
    data: data,
  });
});

app.delete("/post/:id", async (req, res) => {
  const id = req.params.id;

  await postModel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "The data has been deleted.",
    id,
  });
});

module.exports = app;
