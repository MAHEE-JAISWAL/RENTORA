// import express from 'express';
// import mongoose from 'mongoose';

// const app = express();
// const PORT = 5000;

// app.use(express.json());

// //const mongoUrl = 'mongodb://localhost:27017/RentoSphere';
// //const mongoUrl = 'mongodb://127.0.0.1/RentoSphere';


// const mongoUrl = 'mongodb://127.0.0.1/RentoSphere';
// app.get('/', (req,res) => {
//     res.send("Welcome to project Rentora");
// })

// mongoose
//     .connect(mongoUrl)
//     .then(() => app.listen(PORT))
//     .then(() => console.log(`Server running on http://localhost:${PORT}`))
//     .catch((error) => console.log(error.message));

    
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());


