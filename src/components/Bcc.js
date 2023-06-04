const Bcc = ({ mail, selectionStyle }) => {
  const bccStyle = { fontSize: "12px" }
  return (
    <div>
      <span style={bccStyle}>
        <b>bcc</b>
      </span>{" "}
      {mail.bcc.map((item, index) => (
        <span key={index}>
          <span
            style={selectionStyle}
          >
            <span>{item.name}</span>{" "}
            <span style={bccStyle}>
              ({item.email})
            </span>
          </span>{" "}
        </span>
      ))}
    </div>
  )
}

export default Bcc