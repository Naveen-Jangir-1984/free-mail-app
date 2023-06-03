const To = ({ mail, selectionStyle }) => {
  const toStyle = { fontSize: "12px" }
  return (
    <div>
      <span style={toStyle}>
        <b>to</b>
      </span>{" "}
      {mail.to.map((item, index) => (
        <span key={index}>
          <span
            style={selectionStyle}
          >
            <span>{item.name}</span>{" "}
            <span style={toStyle}>
              ({item.email})
              </span>
          </span>{" "}
        </span>
      ))}
    </div>
  )
}

export default To;