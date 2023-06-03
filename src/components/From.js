const From = ({ mail, selectionStyle }) => {
  const fromStyle = { fontSize: "12px" }
  return (
    <div>
      <span style={fromStyle}>
        <b>from </b>
      </span>
      <span
        style={selectionStyle}
      >
        {mail.from.name}
      </span>
    </div>
  )
}

export default From