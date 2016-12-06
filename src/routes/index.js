module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {

    res.json({
      healthy: true,
    });
  });

  // Routes
  // router.use('/api/', require('./api/user')(express));

  return router;
};
