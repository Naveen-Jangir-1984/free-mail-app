const Email = ({ mail, selectionColor, handleDeleteButton }) => {
  const selectionStyle = {
    backgroundColor: selectionColor,
    padding: "0 5px 2px 5px",
    borderRadius: "5px",
    boxSizing: "border-box",
  }
  return (
    <div className="email_view">
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
}

export default Email;