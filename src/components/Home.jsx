const Home = ({ user, logout }) => {
  return <div>
    Email:{user.email}<br />
    Token:{user.token.substring(1, 50)}<br />
    <button onClick={() => logout()}>Log out</button>
  </div>
}

export default Home