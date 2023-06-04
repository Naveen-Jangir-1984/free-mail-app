import { useState, useEffect } from "react";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
import "./App.css";
import Banner from "./components/Banner.js";

export default function App() {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("emails");
  const selectionColor = "yellow";
  const [banner, setBanner] = useState(
    {
      display: false,
      text: "",
      color: "",
      close: false,
    }
  );
  useEffect(() => {
    fetch("http://localhost:8080/network")
      .then((res) => res.text())
      .catch(error => setBanner(
        {
          display: true,
          text: "server unreachable !",
          color: "coral",
          close: false,
        }
      ));
  }, [])
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) !== null
      ? JSON.parse(sessionStorage.getItem("user"))
      : {
        id: "",
        name: "",
        email: "",
        password: "",
        isLogged: false,
        lastSelectedCategory: "",
      }
  );
  const [error, setError] = useState(false);
  const [emails, setEmails] = useState(
    JSON.parse(sessionStorage.getItem("emails")) !== null
      ? JSON.parse(sessionStorage.getItem("emails"))
      : {}
  );
  const handleLoginButton = (user) => {
    if (user.id === "" || user.password === "") {
      setError(true);
      return;
    }
    fetch("http://localhost:8080/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
        password: user.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (Object.keys(data).length === 0) {
          setError(true);
        } else {
          setUser(data.user);
          sessionStorage.setItem("user", JSON.stringify(data.user));
          sessionStorage.setItem("emails", JSON.stringify(data.emails));
          setEmails(data.emails);
          setError(false);
        }
      })
      .catch(error => setBanner({
        display: true,
        text: "server unavailable !",
        color: "coral",
        close: false,
      }));
  };
  const handleLogoutButton = () => {
    fetch("http://localhost:8080/logout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "success") {
          setUser({
            id: "",
            name: "",
            email: "",
            password: "",
            isLogged: false,
            lastSelectedCategory: "",
          });
          setEmails({});
          sessionStorage.removeItem("user");
          sessionStorage.removeItem("emails");
        }
      })
      .catch(error => setBanner({
        display: true,
        text: "server unavailable !",
        color: "coral",
        close: false,
      }));
  };
  const handleCategoryClick = (category) => {
    fetch("http://localhost:8080/updateCategory", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
        password: user.password,
        category: category,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "success") {
          setUser({ ...user, lastSelectedCategory: category });
          sessionStorage.setItem(
            "user",
            JSON.stringify({ ...user, lastSelectedCategory: category })
          );
        }
      })
      .catch(error => setBanner({
        display: true,
        text: "server unavailable !",
        color: "coral",
        close: false,
      }));
  };
  const handleMailClick = (id, category) => {
    fetch("http://localhost:8080/updateEmail", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
        password: user.password,
        mail_id: id,
        category: category,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        if (Object.keys(data).length !== 0) {
          setEmails(JSON.parse(data));
          sessionStorage.setItem("emails", JSON.stringify(data));
        }
      })
      .catch(error => setBanner({
        display: true,
        text: "server unavailable !",
        color: "coral",
        close: false,
      }));
  };
  const handleDeleteButton = (id) => {
    fetch("http://localhost:8080/deleteEmail", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
        password: user.password,
        mail_id: id,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        if (Object.keys(data).length !== 0) {
          setEmails(JSON.parse(data));
          sessionStorage.setItem("emails", JSON.stringify(data));
        }
      })
      .catch(error => setBanner({
        display: true,
        text: "server unavailable !",
        color: "coral",
        close: false,
      }));
  };
  const handleBannerClose = () => {
    setBanner({
      display: false,
      text: "",
      color: "",
      close: false,
    })
  }
  return (
    <div className="App">
      {
        user.isLogged ? (
          <Dashboard
            user={user}
            emails={emails}
            selectionColor={selectionColor}
            handleLogoutButton={handleLogoutButton}
            handleCategoryClick={handleCategoryClick}
            handleMailClick={handleMailClick}
            handleDeleteButton={handleDeleteButton}
          />
        ) : <Login handleLoginButton={handleLoginButton} error={error} />
      }
      <Banner banner={banner} handleBannerClose={handleBannerClose} />
    </div>
  );
}