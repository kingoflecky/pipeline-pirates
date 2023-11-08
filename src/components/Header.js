import "../css/Header.css";

const Header = ({ setIsLoggedIn }) => {
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username"); // Remove username from localStorage
    localStorage.removeItem("password"); // Remove username from localStorage
    setIsLoggedIn(false); // Update login state
  };

  return (
    <div className="header-wrapper">
      <h1>CI/CD Dashboard</h1>
      <div className="user-info">
        {username ? (
          <div className="check-username">
            <p id="welcome-user">Welcome back, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <p>Please log in first.</p>
        )}
      </div>
    </div>
  );
};

export default Header;
