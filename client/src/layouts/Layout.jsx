import { Link } from 'react-router-dom'


export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
    <div>
      <header>
        <h1>WhatsGoinOn</h1>
        {currentUser ? (
					<>
						<p>Hello, {currentUser.username}</p>
						<button onClick={handleLogout}>Logout</button>
					</>
				) : (
        <Link to='/login'>Login/Register</Link>
        )}
        <hr />
        {
          currentUser && 
          <>
            <h3>Display About, Events and Performers links here</h3>
            {/* <Link to='/events'>Events</Link>
            <Link to='/performers'>Performers</Link> */}
          </>
        }
      </header>
      {children}

      
    </div>
  )
}
