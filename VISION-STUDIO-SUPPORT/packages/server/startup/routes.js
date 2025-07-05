const express = require("express");
const multer = require("multer");
const headers = require("../middlewares/headers");
const sampleRoute = require("../routes/visionRoutes/sampleRoutes");

module.exports = function (app) {
  app.use(express.json({ limit: "200mb" }));
  app.use(express.urlencoded({ extended: true })); // to log request into terminal
  app.use((req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
  });
  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });
  app.use(upload.array("files"));
  app.use(`/api/disney`, headers, sampleRoute);
};
