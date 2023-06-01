import { readFile, writeFileSync } from "fs";
import bodyparser from 'body-parser';
const { urlencoded, json } = bodyparser;
import express from "express";
import cors from "cors";
const port = 8080;

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.post("/login", (req, res) => {
  readFile("../database/users.json", "utf-8", (err, data) => {
    if (err) throw err;

    let id = req.body.id;
    let password = req.body.password;

    var data = JSON.parse(data);
    const user = data.users.filter(
      (user) => user.id === id && user.password === password
    );
    const users = data.users.map((user) => {
      if (user.id === id && user.password === password) {
        user.isLogged = true;
      }
      return user;
    });
    writeFileSync(
      "../database/users.json",
      JSON.stringify({ users: users }, null, 2)
    );

    readFile("../database/emails.json", "utf-8", (err, data) => {
      if (err) throw err;

      var data = JSON.parse(data);
      const emails = {
        inbox: data.inbox.filter((mail) => {
          if (mail.to.filter((item) => item.id === id).length) {
            return mail;
          }
        }),
        sent: data.sent.filter((mail) => mail.from.id === id),
      };
      res.end(
        user.length
          ? JSON.stringify({
              user: user[0],
              emails: emails,
            })
          : JSON.stringify({})
      );
    });
  });
});
app.post("/logout", (req, res) => {
  readFile("../database/users.json", "utf-8", (err, data) => {
    if (err) throw err;

    const id = req.body.id;
    const password = req.body.password;
    const isLogged = req.body.isLogged;
    const lastSelectedCategory = req.body.lastSelectedCategory;

    var data = JSON.parse(data);
    const users = data.users.map((user) => {
      if (
        user.id === id &&
        user.password === password &&
        user.isLogged === isLogged
      ) {
        user.isLogged = !isLogged;
        user.lastSelectedCategory = lastSelectedCategory;
      }
      return user;
    });
    writeFileSync(
      "../database/users.json",
      JSON.stringify({ users: users }, null, 2)
    );
    res.end("success");
  });
});
app.post("/updateCategory", (req, res) => {
  readFile("../database/users.json", "utf-8", (err, data) => {
    if (err) throw err;

    let id = req.body.id;
    let password = req.body.password;
    let category = req.body.category;

    var data = JSON.parse(data);
    const users = data.users.map((user) => {
      if (user.id === id && user.password === password) {
        user.lastSelectedCategory = category;
      }
      return user;
    });
    writeFileSync(
      "../database/users.json",
      JSON.stringify({ users: users }, null, 2)
    );
    res.end("success");
  });
});
app.post("/updateEmail", (req, res) => {
  readFile("../database/users.json", "utf-8", (err, data) => {
    if (err) throw err;

    let id = req.body.id;
    let password = req.body.password;
    let mail_id = req.body.mail_id;
    let category = req.body.category;

    var data = JSON.parse(data);
    const user = data.users.filter(
      (user) => user.id === id && user.password === password
    );

    readFile("../database/emails.json", "utf-8", (err, data) => {
      if (err) throw err;

      var data = JSON.parse(data);
      const emails = {
        inbox: data.inbox.map((mail) => {
          if (
            mail.id === mail_id &&
            mail.to.filter((item) => item.id === id).length
          ) {
            mail.isRead = true;
            mail.isSelected = true;
          } else if (category === "inbox") {
            mail.isSelected = false;
          }
          return mail;
        }),
        sent: data.sent.map((mail) => {
          if (mail.id === mail_id && mail.from.id === id) {
            mail.isRead = true;
            mail.isSelected = true;
          } else if (category === "sent") {
            mail.isSelected = false;
          }
          return mail;
        }),
      };
      writeFileSync(
        "../database/emails.json",
        JSON.stringify(emails, null, 2)
      );
      const userEmails = {
        inbox: emails.inbox.filter((mail) => {
          if (mail.to.filter((item) => item.id === id).length) {
            return mail;
          }
        }),
        sent: emails.sent.filter((mail) => mail.from.id === id),
      };
      res.end(user.length ? JSON.stringify(userEmails) : JSON.stringify({}));
    });
  });
});
app.post("/deleteEmail", (req, res) => {
  readFile("../database/users.json", "utf-8", (err, data) => {
    if (err) throw err;

    let id = req.body.id;
    let password = req.body.password;
    let mail_id = req.body.mail_id;

    var data = JSON.parse(data);
    const user = data.users.filter(
      (user) => user.id === id && user.password === password
    );

    readFile("../database/emails.json", "utf-8", (err, data) => {
      if (err) throw err;

      var data = JSON.parse(data);
      const emails = {
        inbox: data.inbox.filter((mail) => mail.id !== mail_id),
        sent: data.sent.filter((mail) => mail.id !== mail_id),
      };
      writeFileSync(
        "../database/emails.json",
        JSON.stringify(emails, null, 2)
      );
      const userEmails = {
        inbox: emails.inbox.filter((mail) => {
          if (mail.to.filter((item) => item.id !== id).length) {
            return mail;
          }
        }),
        sent: emails.sent.filter((mail) => mail.from.id !== id),
      };
      res.end(user.length ? JSON.stringify(userEmails) : JSON.stringify({}));
    });
  });
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
