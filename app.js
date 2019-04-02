import express  from 'express';
import helmet from 'helmet';
import graphqlHTTP  from 'express-graphql';
import DataLoader  from 'dataloader';
import { Schema }   from './schemas/schema';


const app = express();
const schema = new Schema();

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/graphql', graphqlHTTP ( req => {
  return {
    schema,
    graphiql: true
  }
}));

app.listen(3000,  () =>  { console.log('Example app listening on port 3000!'); });
