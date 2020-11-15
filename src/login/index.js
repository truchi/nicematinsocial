import Twetch from "@twetch/sdk";

export const TWETCH = new Twetch({
  clientIdentifier: "c9009915-109f-456e-9432-cdc94013e599",
});

export const IMB = new window.moneyButton.IMB({
  clientIdentifier: "8fe1056f601e4679ac2c096ed3c14bca",
});

export const TWLogin = async () => {
  return await TWETCH.authenticate();
};

export const IMBLogin = () => {
  IMB.swipe({
    amount: "0.03",
    currency: "USD",
    to: "31439@moneybutton.com",
    onPayment: async (pay) => {
      console.log({ pay });
      let post = await TWETCH.publish("twetch/post@0.0.1", {
        bContent: "Hello?",
      });
      console.log({ post });
    },
    onError: (err) => console.warn(err),
  });
};
