const Dashboard = ({
  user,
  emails,
  handleLogoutButton,
  handleCategoryClick,
  handleMailClick,
  handleDeleteButton,
}) => {
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
        <div className="email_category">
          {Object.keys(emails).map((property, index) => (
            <div
              key={index}
              style={{
                fontWeight: emails[property].filter((mail) => !mail.isRead)
                  .length
                  ? "bold"
                  : "normal",
                backgroundColor:
                  user.lastSelectedCategory === property
                    ? "yellow"
                    : "transparent",
                borderRadius: "5px",
                padding: "0 5px 2px 5px",
                boxSizing: "border-box",
              }}
              onClick={() => handleCategoryClick(property)}
            >
              {property}
              {emails[property].filter((mail) => !mail.isRead).length
                ? ` (${emails[property].filter((mail) => !mail.isRead).length})`
                : ""}
            </div>
          ))}
        </div>
        <div className="email_summary">
          {Object.keys(emails).map(
            (property) =>
              user.lastSelectedCategory === property &&
              emails[property].map((mail, index) => (
                <div
                  key={index}
                  style={{
                    fontWeight: mail.isRead ? "normal" : "bold",
                    backgroundColor: mail.isSelected ? "yellow" : "transparent",
                    borderRadius: "5px",
                    padding: "0 5px 2px 5px",
                    boxSizing: "border-box",
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
                          style={{
                            backgroundColor: "yellow",
                            padding: "0 5px 2px 5px",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                          }}
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
                              style={{
                                backgroundColor: "yellow",
                                padding: "0 5px 2px 5px",
                                borderRadius: "5px",
                                boxSizing: "border-box",
                              }}
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
                                style={{
                                  backgroundColor: "yellow",
                                  padding: "0 5px 2px 5px",
                                  borderRadius: "5px",
                                  boxSizing: "border-box",
                                }}
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
                                style={{
                                  backgroundColor: "yellow",
                                  padding: "0 5px 2px 5px",
                                  borderRadius: "5px",
                                  boxSizing: "border-box",
                                }}
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
                          style={{
                            backgroundColor: "yellow",
                            padding: "0 5px 2px 5px",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                          }}
                        >
                          {mail.subject}
                        </span>
                      </div>
                      <div
                        style={{
                          backgroundColor: "yellow",
                          padding: "0 5px 2px 5px",
                          borderRadius: "5px",
                          boxSizing: "border-box",
                        }}
                      >
                        {mail.body}
                      </div>
                      <button
                        style={{
                          width: "50px",
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
