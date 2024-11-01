import express, { Request, Response } from 'express';
import usersRoute from '../src/api/users';
import bodyParser from 'body-parser';

const app : express.Application = express();
const port : number = 3000;

// middleware

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// routes
app.get('/', (req: Request, resp: Response) => 
{
    resp.send('Hello from server!');
})

app.use('/users', usersRoute);


// start
app.listen(port, () => 
{
    console.log(`Server running at http://localhost:${port}`);
});
  