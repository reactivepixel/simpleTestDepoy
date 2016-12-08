module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {

    res.json({
      healthy: true,
      status: "deployed"
    });
  });

  return router;
};
