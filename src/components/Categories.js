import Category from './Category.js'

const Categories = ({ user, emails, selectionColor, handleCategoryClick }) => {
  return (
    <div className="email_category">
      {Object.keys(emails).map(
        (property, index) => (<Category
          key={index}
          user={user}
          emails={emails}
          property={property}
          selectionColor={selectionColor}
          handleCategoryClick={handleCategoryClick}
        />))
      }
    </div>)
}

export default Categories;