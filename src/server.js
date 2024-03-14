import express from 'express';
import rootRoute from './routes/index.js';
const app = express();

const port = 3591;

app.listen(port, ()=>{
    console.log(`Server running at https://localhost:${port}`)
})

app.use(rootRoute)