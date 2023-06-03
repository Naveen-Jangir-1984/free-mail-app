const Summary = ({ user, emails, selectionColor, handleMailClick }) => {
  return (
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
  )
}

export default Summary;