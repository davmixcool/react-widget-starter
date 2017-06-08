import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';


Reactotron
  .configure({ name: 'React Widget Starter'}) 
  .use(reactotronRedux())
  .connect(); // let's connect!
