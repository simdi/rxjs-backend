import express from 'express';
import cors from 'cors';
import opFrom from './routes/operators/from.js';
import opOf from './routes/operators/of.js';

const PORT = process.env.PORT || 4003;

const app = express();

app.use(cors());

app.use('/', opFrom);
app.use('/of', opOf);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));