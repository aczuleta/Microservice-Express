import { express } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { DataLoader } from 'dataloader';
import  { schema }  from './schemas/schema';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000,  () =>  { console.log('Example app listening on port 3000!'); });
