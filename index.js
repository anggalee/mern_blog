const express = require('express');

const app = express();
const bodyParser = require('body-parser')
const PORT = 5000;

const authRoutes = require('./src/routes/auth')
const blogRoutes = require('./src/routes/blogs')

app.use(bodyParser.json())


//Error CORS ORIGIN on BROWSER
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin','GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Origin','Content-Type, Authorization');
    next();
})

//Error CORS ORIGIN on BROWSER//

app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes)

app.listen(PORT, () => {
    console.log(`Server is active on http://localhost:${PORT}`);
})