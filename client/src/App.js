import './App.css';
import Layout from './layouts/Layout'
import Splash from './screens/Splash/Splash';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import MainContainer from './containers/MainContainer';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState , useEffect } from 'react';
import {
	loginUser,
	registerUser,
	verifyUser,
	removeToken,
} from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };

  
    return (
      <div className="App">
        <Layout currentUser={currentUser} handleLogout={handleLogout}>
          <Switch>

          <Route exact path="/">
            <Splash />
          </Route>

            <Route path='/login'>
              <Login handleLogin={handleLogin} />
            </Route>

            <Route path='/register'>
              <Register handleRegister={handleRegister} /> 
            </Route>

            <Route path="/">
              <MainContainer currentUser={currentUser} />
            </Route>
            
          </Switch>
        </Layout>
      </div>
    );
  }
export default App;
