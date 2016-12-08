module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {

    res.json({
      healthy: true,
      status: "deployed",
      testing: true,
      forceFail: true
    });
  });

  return router;
};
