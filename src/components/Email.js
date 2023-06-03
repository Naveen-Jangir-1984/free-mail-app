import From from "./From.js"
import To from "./To.js"
import Cc from "./Cc.js"
import Bcc from "./Bcc.js"
import Subject from "./Subject.js"
import Body from "./Body.js"

const Email = ({ mail, selectionColor, handleDeleteButton }) => {
  const selectionStyle = {
    backgroundColor: selectionColor,
    padding: "0 5px 2px 5px",
    borderRadius: "5px",
    boxSizing: "border-box",
  }
  return (
    <div className="email_view">
      <From mail={mail} selectionStyle={selectionStyle} />
      <To mail={mail} selectionStyle={selectionStyle} />
      {mail.cc.length ? <Cc mail={mail} selectionStyle={selectionStyle} /> : ""}
      {mail.bcc.length ? <Bcc mail={mail} selectionStyle={selectionStyle} /> : ""}
      <Subject mail={mail} selectionStyle={selectionStyle} />
      <Body
        mail={mail}
        selectionStyle={selectionStyle}
        handleDeleteButton={handleDeleteButton}
      />
    </div>
  )
}

export default Email;