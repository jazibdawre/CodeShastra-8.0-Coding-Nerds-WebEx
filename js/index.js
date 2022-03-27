let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNmOTI0ZjVlNDEwYzdlYmQ1NGEwMGUiLCJpYXQiOjE2NDgzNTUzNjEsImV4cCI6MTY0ODM1ODk2MX0.Cyy_zxAnMCPEBRyXAw8bfukD4Egw2p7rBFsQhCSuZ-8";

$(document).ready(function () {
  axios
    .get("https://zepp-node-backend.herokuapp.com/users/getAllCoupon", {
      headers: { Authorization: "Bearer " + token },
    })
    .then((resp, err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resp);
        let i = 1;
        resp.data.coupons.map((el) => {
          if (i <= 3) {
            $("#c" + i + "-cat").html(el.category);
            if (el.discount) {
              $("#c" + i + "-disc").html(el.discount + "%");
            } else if (el.price) {
              $("#c" + i + "-disc").html(el.price + "₹");
            } else if (el.code) {
              $("#c" + i + "-disc").html(el.code);
            }
            $("#c" + i + "-tit").html(el.title);
          }
          i += 1;
        });
      }
    });
});
