import React, { useState } from "react";

const WritePost = ({ twetch }) => {
  const post = () => {
    console.log("POST");
    // twetch.publish('twetch/post@0.0.1', {
    // bContent: "Hello from React App $nce",
    // })

    // window.twetchPay.pay({
    // outputs: [{
    // to: '14q5aNA6dfWkSUHZ3bXKfaTmMfCVwWeRuu',
    // amount: 0.0001,
    // debug: true,
    // }],
    // onError: (e) => { console.log("ERROR", e) },
    // onPayment: async (p) => {
    // console.log("ON PAYMENT", p)
    // twetch.buildAndPublish('twetch/post@0.0.1', {
    // bContent: "Hello from React App $nce",
    // })
    // const res = await twetch.publishRequest({
    // action: 'twetch/post@0.0.1',
    // signed_raw_tx: p.rawtx,
    // broadcast: true,
    // bContent: "Hello from React App $nce",
    // })
    //
    // console.log("DONE", res)
    // }
    // });
  };

  return <div onClick={post}>CLICK HERE</div>;
};

export default WritePost;

// {
// "txid": "526fd0fc9e35114084f205b0f4c772869c3dc9a1c0719e5509b70f9d50a0a75f",
// "rawtx": "01000000019215a51078f5d833c48862143add04ca4711ade5a6aa32a60787c92ebfae3b02030000006b483045022100df83565e9ed4f969e9abcf93ce1360fd48ed9b8a96edb251a810c135209067a2022019977d7c723b7f3e026f6bc0df78897a102841b8a19fe0d8aa0d5dd088ccd926412102310dcf65f06a82f6502e429905a4b14b33380b4432b8735be940ec7049447ec7ffffffff0210270000000000001976a9142a0029a9d237148f73ad661c9f9b37e852d28de588acdd3a0000000000001976a914e7dec856e1c2f2d50badcb31e8e7235e1b278d9f88ac00000000",
// "walletResponse": {
// "createdAt": "2020-11-11T16:46:35.704Z",
// "userId": "31439",
// "txid": "526fd0fc9e35114084f205b0f4c772869c3dc9a1c0719e5509b70f9d50a0a75f",
// "normalizedTxid": "3a916290742f2d321ab330d2dc6cb28654ec2d3828b7d25d4cedac0f2460178b",
// "amount": "0.016642909824094186",
// "currency": "USD",
// "satoshis": "10000",
// "status": "RECEIVED",
// "statusDescription": null,
// "buttonId": null,
// "buttonData": null,
// "amountUsd": "0.016642909824094186",
// "inputAmountUsd": "0.0419135041009988",
// "inputAmountSatoshis": "25184",
// "spendAmountUsd": "0.00019139346297708315",
// "spendAmountSatoshis": "115",
// "feeAmountUsd": "0.00019139346297708315",
// "feeAmountSatoshis": "115",
// "changeAmountUsd": "0.02507920081392753",
// "changeAmountSatoshis": "15069",
// "rawtx": "01000000019215a51078f5d833c48862143add04ca4711ade5a6aa32a60787c92ebfae3b02030000006b483045022100df83565e9ed4f969e9abcf93ce1360fd48ed9b8a96edb251a810c135209067a2022019977d7c723b7f3e026f6bc0df78897a102841b8a19fe0d8aa0d5dd088ccd926412102310dcf65f06a82f6502e429905a4b14b33380b4432b8735be940ec7049447ec7ffffffff0210270000000000001976a9142a0029a9d237148f73ad661c9f9b37e852d28de588acdd3a0000000000001976a914e7dec856e1c2f2d50badcb31e8e7235e1b278d9f88ac00000000",
// "senderSignature": "IAJPUrqjuG4XdI/w2yfSeeyqG08VkGTk9SgcoTO+M3zHOcf0oIg7PFecx7FZNbWksqA7Nrnd/XA9+JpE9QM2cK8=",
// "signaturePubkey": "024f300075ef971a0f966477c286491a6e9a0468d9a4d7194c5671edbf73621e16",
// "senderPaymail": "31439@moneybutton.com",
// "referrerUrl": "https://pay.twetch.com/",
// "browserUserAgent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
// "preserveOrder": false,
// "id": "4441035",
// "cryptoOperations": [],
// "paymentOutputs": [
// {
// "createdAt": "2020-11-11T16:46:35.710Z",
// "to": "14q5aNA6dfWkSUHZ3bXKfaTmMfCVwWeRuu",
// "amount": "0.0001",
// "currency": "BSV",
// "satoshis": "10000",
// "type": "ADDRESS",
// "userId": "31439",
// "address": "14q5aNA6dfWkSUHZ3bXKfaTmMfCVwWeRuu",
// "script": null,
// "amountUsd": "0.016642909824094186",
// "paymailDt": null,
// "paymailPubkey": null,
// "paymailPurpose": null,
// "paymailRecipientHandle": null,
// "paymailSenderHandle": null,
// "paymailSenderName": null,
// "paymailSignature": null,
// "id": "1"
// }
// ]
// }
// }
