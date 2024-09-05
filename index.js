const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World! 2'
  })
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})