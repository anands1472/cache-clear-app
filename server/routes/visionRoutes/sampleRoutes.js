const express = require("express");
const router = express.Router();
const logger = require("../../lib/logger");
const config = require("config");
const axios = require("axios");
const headers = require("../../middlewares/headers");

router.get("/sampleApi", [headers], async (req, res, next) => {
  const url = encodeURI(`https://dummyjson.com/todos`);
  logger.debug(`calling anand utn ${url}`);
  axios({
    method: "get",
    url,
    headers: { ...req.headers },
    data: req.body,
  })
    .then((response) => {
      const data = response.data;
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
