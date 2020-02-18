const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json({extended: false}));
app.get('/',(req,res)=> res.send('API Running'));


app.use('/api/user',require('./router/api/user'));
app.use('/api/auth',require('./router/api/auth'));
app.use('/api/know',require('./router/api/knowlege'));
app.use('/api/resever',require('./router/api/reserver'));
app.use('/api/sender',require('./router/api/sender'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=> console.log(`server Started on port ${PORT}`));