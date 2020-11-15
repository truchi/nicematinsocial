import Twetch from "@twetch/sdk";
import React from "react";
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
  const twetch = new Twetch({
    clientIdentifier: "c9009915-109f-456e-9432-cdc94013e599",
  });

  //const auth = await twetch.authenticate()
  //console.warn("", auth)
  //console.log(twetch.wallet.address())

  const res = await twetch.query(`
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

  ReactDOM.render(
    <React.StrictMode>
      <App posts={res.allPosts.nodes} twetch={twetch} />
    </React.StrictMode>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
