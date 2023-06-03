const Body = ({ mail, selectionStyle, handleDeleteButton }) => {
  const deleteStyle = {
    padding: "3px 0",
    fontSize: "12px",
    width: "100px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "coral",
  }
  return (
    <>
      <div style={selectionStyle}>
        {mail.body}
      </div>
      <button
        style={deleteStyle}
        onClick={() => handleDeleteButton(mail.id)}
      >
        Delete Mail
     </button>
    </>
  )
}

export default Body;