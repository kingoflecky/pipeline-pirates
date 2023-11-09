import { app } from './app';

const port = process.env.PORT || 3001;
console.log(`Listening on port: ${port}`);
app.listen(port);

