const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', require('./routes/index'));

app.use('*', (req, res, next) => {
    res.status(500).send(
        {hostname: req.hostname,
        message: "Route does NOT exist"
    });
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));

module.exports = app;