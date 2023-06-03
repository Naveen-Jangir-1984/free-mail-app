import User from "./User.js"
import Emails from "./Emails.js";

const Dashboard = ({
  user,
  emails,
  selectionColor,
  handleLogoutButton,
  handleCategoryClick,
  handleMailClick,
  handleDeleteButton,
}) => {
  return (
    <div className="Dashboard">
      <User user={user} handleLogoutButton={handleLogoutButton} />
      <Emails
        user={user}
        emails={emails}
        selectionColor={selectionColor}
        handleLogoutButton={handleLogoutButton}
        handleCategoryClick={handleCategoryClick}
        handleMailClick={handleMailClick}
        handleDeleteButton={handleDeleteButton}
      />
    </div >
  );
};
export default Dashboard;
