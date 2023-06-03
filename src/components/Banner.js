const Banner = ({ banner, handleBannerClose }) => {
  const { display, text, color, close } = banner
  const bannerLayout = {
    position: "absolute",
    top: display ? "0" : "-100%",
    left: "0",
    width: "100vw",
    height: "100vh",
    borderRadius: "5px",
    backgroundColor: "rgba(250,250,250,0.8)",
  }
  const bannerStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "200px",
    height: "60px",
    borderRadius: "5px",
    boxShadow: "0 5px 20px 0 " + color,
    backgroundColor: color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "13px",
  }
  const closeStyle = {
    position: "absolute",
    top: "5px",
    right: "15px",
    width: "5px",
    height: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  }
  return <div style={bannerLayout}>
    <div style={bannerStyle}>
      <div>{text}</div>
      {close && <div
        style={closeStyle}
        onClick={() => handleBannerClose()}
      >
        x
      </div>}
    </div>
  </div>
}

export default Banner;