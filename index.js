const app = require('./src/apps/server');

(async () => {
  const server = await app();
  const PORT = process.env.PORT || 8000;
  server.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));
})();
