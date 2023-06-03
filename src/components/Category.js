const Category = ({
  user,
  emails,
  property,
  selectionColor,
  handleCategoryClick
}) => {
  return (
    <div
      style={{
        fontWeight: emails[property].filter((mail) => !mail.isRead)
          .length
          ? "bold"
          : "normal",
        backgroundColor:
          user.lastSelectedCategory === property
            ? selectionColor
            : "transparent",
        borderRadius: "5px",
        padding: "0 5px 2px 5px",
        boxSizing: "border-box",
      }}
      onClick={() => handleCategoryClick(property)}
    >
      {property}
      {emails[property].filter((mail) => !mail.isRead).length
        ? ` (${emails[property].filter((mail) => !mail.isRead).length})`
        : ""}
    </div>)
}

export default Category;