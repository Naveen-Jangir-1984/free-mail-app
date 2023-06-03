import Categories from "./Categories.js"
const Dashboard = ({
  user,
  emails,
  handleLogoutButton,
  handleCategoryClick,
  handleMailClick,
  handleDeleteButton,
}) => {
  const selectionColor = "lightcoral";
  const selectionStyle = {
    backgroundColor: selectionColor,
    padding: "0 5px 2px 5px",
    borderRadius: "5px",
    boxSizing: "border-box",
  }
  return (
    <div className="Dashboard">
      <div className="userinfo">
        <div style={{ fontSize: "13px" }}>
          <span style={{ fontWeight: "bold" }}>{user.name}</span> |{" "}
          <span>{user.email}</span>
        </div>
        <button className="logout" onClick={() => handleLogoutButton()}>
          logout
        </button>
      </div>
      <div className="emails">
        <Categories
          user={user}
          emails={emails}
          selectionColor={selectionColor}
          handleCategoryClick={handleCategoryClick}
        />
        <div className="email_summary">
          {Object.keys(emails).map(
            (property) =>
              user.lastSelectedCategory === property &&
              emails[property].map((mail, index) => (
                <div
                  key={index}
                  style={{
                    fontWeight: mail.isRead ? "normal" : "bold",
                    backgroundColor: mail.isSelected ? selectionColor : "transparent",
                    borderRadius: "5px",
                    padding: "0 5px 2px 5px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                  onClick={() => handleMailClick(mail.id, property)}
                >
                  <div>
                    {property === "inbox"
                      ? mail.from.name
                      : mail.to.length === 1
                        ? mail.to[0].name
                        : mail.to.map((item, index) => (
                          <span key={index}> {item.name};</span>
                        ))}
                  </div>
                  <div style={{ fontSize: "12px" }}>{mail.subject}</div>
                </div>
              ))
          )}
        </div>
        <div className="email_details">
          {Object.keys(emails).map(
            (property) =>
              user.lastSelectedCategory === property &&
              emails[property].map(
                (mail, index) =>
                  mail.isSelected && (
                    <div key={index} className="email_view">
                      <div>
                        <span style={{ fontSize: "12px" }}>
                          <b>from </b>
                        </span>
                        <span
                          style={selectionStyle}
                        >
                          {mail.from.name}
                        </span>
                      </div>
                      <div>
                        <span style={{ fontSize: "12px" }}>
                          <b>to</b>
                        </span>{" "}
                        {mail.to.map((item, index) => (
                          <span key={index}>
                            <span
                              style={selectionStyle}
                            >
                              <span>{item.name}</span>{" "}
                              <span style={{ fontSize: "12px" }}>
                                ({item.email})
                              </span>
                            </span>{" "}
                          </span>
                        ))}
                      </div>
                      {mail.cc.length ? (
                        <div>
                          <span style={{ fontSize: "12px" }}>
                            <b>cc</b>
                          </span>{" "}
                          {mail.cc.map((item, index) => (
                            <span key={index}>
                              <span
                                style={selectionStyle}
                              >
                                <span>{item.name}</span>{" "}
                                <span style={{ fontSize: "12px" }}>
                                  ({item.email})
                                </span>
                              </span>{" "}
                            </span>
                          ))}
                        </div>
                      ) : (
                          ""
                        )}
                      {mail.bcc.length ? (
                        <div>
                          <span style={{ fontSize: "12px" }}>
                            <b>bcc</b>
                          </span>{" "}
                          {mail.bcc.map((item, index) => (
                            <span key={index}>
                              <span
                                style={selectionStyle}
                              >
                                <span>{item.name}</span>{" "}
                                <span style={{ fontSize: "12px" }}>
                                  ({item.email})
                                </span>
                              </span>{" "}
                            </span>
                          ))}
                        </div>
                      ) : (
                          ""
                        )}
                      <div>
                        <span style={{ fontSize: "12px" }}>
                          <b>subject</b>
                        </span>{" "}
                        <span
                          style={selectionStyle}
                        >
                          {mail.subject}
                        </span>
                      </div>
                      <div
                        style={selectionStyle}
                      >
                        {mail.body}
                      </div>
                      <button
                        style={{
                          width: "50px",
                          border: "none",
                          borderRadius: "5px",
                          backgroundColor: selectionColor,
                        }}
                        onClick={() => handleDeleteButton(mail.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )
              )
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
