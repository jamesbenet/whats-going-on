import './Layout.css'
import { Link } from 'react-router-dom'


export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
    <div>
      <header>
        <h1>WhatsGoinOn</h1>
        {currentUser ? (
					<>
            <div>Hello, {currentUser.username}
            
              <button onClick={handleLogout}>Logout</button>
              </div>
					</>
        ) : (
            <div>
            
        <Link to='/login'>Login/Register</Link></div>
        )}
        
        {
          currentUser && 
          <><div>
            about performers
            <Link to='/events'>Events</Link>
            {/* <Link to='/performers'>Performers</Link>  */}
            </div>
          </>
        }
      </header>
      {children}

      
    </div>
  )
}
