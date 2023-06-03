const Subject = ({ mail, selectionStyle }) => {
  const subjectStyle = { fontSize: "12px" }
  return (
    <div>
      <span style={subjectStyle}>
        <b>subject</b>
      </span>{" "}
      <span
        style={selectionStyle}
      >
        {mail.subject}
      </span>
    </div>
  )
}

export default Subject