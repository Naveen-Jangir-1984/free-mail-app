const Cc = ({ mail, selectionStyle }) => {
  const ccStyle = { fontSize: "12px" }
  return (
    <div>
      <span style={ccStyle}>
        <b>cc</b>
      </span>{" "}
      {mail.cc.map((item, index) => (
        <span key={index}>
          <span
            style={selectionStyle}
          >
            <span>{item.name}</span>{" "}
            <span style={ccStyle}>
              ({item.email})
                </span>
          </span>{" "}
        </span>
      ))}
    </div>
  )
}

export default Cc