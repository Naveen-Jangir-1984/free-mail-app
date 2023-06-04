const User = ({ user, handleLogoutButton }) => {
  return (
    <div className="userinfo" >
      <div style={{ fontSize: "13px" }}>
        <span style={{ fontWeight: "bold" }}>{user.name}</span> |{" "}
        <span>{user.email}</span>
      </div>
      <button className="logout" onClick={() => handleLogoutButton()}>
        logout
      </button>
    </div>
  )
}

export default User;