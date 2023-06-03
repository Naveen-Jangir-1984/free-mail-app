import Categories from "./Categories.js";
import Summary from "./Summary.js";
import Details from "./Details.js";

const Emails = ({
  user,
  emails,
  selectionColor,
  handleCategoryClick,
  handleMailClick,
  handleDeleteButton
}) => {
  return (
    <div className="emails">
      <Categories
        user={user}
        emails={emails}
        selectionColor={selectionColor}
        handleCategoryClick={handleCategoryClick}
      />
      <Summary
        user={user}
        emails={emails}
        selectionColor={selectionColor}
        handleMailClick={handleMailClick}
      />
      <Details
        user={user}
        emails={emails}
        selectionColor={selectionColor}
        handleDeleteButton={handleDeleteButton}
      />
    </div>
  )
}

export default Emails;