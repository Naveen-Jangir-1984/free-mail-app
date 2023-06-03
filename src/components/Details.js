import Email from "./Email.js";

const Details = ({ user, emails, selectionColor, handleDeleteButton }) => {
  return (
    <div className="email_details">
      {
        Object.keys(emails).map(
          (property) =>
            user.lastSelectedCategory === property &&
            emails[property].map(
              (mail, index) =>
                mail.isSelected &&
                <Email
                  key={index}
                  mail={mail}
                  selectionColor={selectionColor}
                  handleDeleteButton={handleDeleteButton}
                />
            )
        )
      }
    </div >
  )
}

export default Details;