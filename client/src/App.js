import './App.css';
import Layout from './layouts/Layout'
import { Switch, Route } from 'react-router-dom'
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <h1>Login</h1>
          </Route>
        </Switch>

      </Layout>
    </div>
  );
}

export default App;
