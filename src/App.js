import AddContact from './Component/AddContact'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Message from './Component/Message';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={AddContact} />
      
      <Route path="/message/:messageId" component={Message} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
// https://github.com/jeganvpm/MessageApp
export default App;
