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

export const IMBLogin = async () => {
  const action = "twetch/post@0.0.1";
  const { abi, payees } = await TWETCH.build(action, {
    bContent: "Hello!",
  });
  const outputs = [
    {
      currency: "BSV",
      amount: 0,
      script: window.bsv.Script.buildSafeDataOut(abi.toArray()).toASM(),
    },
    {
      to: "31439@moneybutton.com",
      amount: "0.00001000",
      currency: "BSV",
    },
    ...payees,
  ];

  const cryptoOperations = [
    { name: "myAddress", method: "address", key: "identity" },
    {
      name: "mySignature",
      method: "sign",
      data: abi.contentHash(),
      dataEncoding: "utf8",
      key: "identity",
      algorithm: "bitcoin-signed-message",
    },
  ];

  console.log(outputs, cryptoOperations);
  window.confirm("Pay?") &&
    IMB.swipe({
      cryptoOperations,
      outputs,
      onPayment: async (pay) => {
        console.log({ pay });
        window.confirm("Post?") &&
          (async () => {
            let post = await TWETCH.publishRequest({
              signed_raw_tx: pay.rawtx,
              action,
            });
            console.log({ post });
          })();
      },
      onError: (err) => console.warn(err),
    });
};
