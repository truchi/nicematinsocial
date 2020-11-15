import React from "react";
import { TWETCH, TWLogin, IMBLogin } from "./login";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// window.twetchPay.pay({ outputs: [{
// to: '1harrywon46Aq2b2TK29wKviKUiDzc9EQ',
// amount: 0.0002
// }]
// });

(async () => {
  console.log({ TWETCH });
  let user = await TWLogin();
  console.log(user);
  IMBLogin();

  /* const res = await twetch.query(`
    query {
      allPosts(filter: { bContent: { includes: "$nce" } }) {
        nodes {
          id
          bContent
          transaction
          createdAt
          numLikes
          userId
          youLiked
          userByUserId {
            name
            icon
            moneyButtonUserId
          }
        }
      }
      me {
        name
        id
      }
    }
  `);
  console.log(res);
*/
  ReactDOM.render(
    <React.StrictMode></React.StrictMode>,
    document.getElementById("root")
  );
})();
// <App posts={[]} twetch={twetch} />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
