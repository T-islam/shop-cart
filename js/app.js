document.getElementById("phone-plus").addEventListener("click", function () {
  const newQuentity = counts(true, "phone-quantity");
  SetPrices(newQuentity, 1240, "phone-price");
  amountUpdate();
});

document.getElementById("phone-minus").addEventListener("click", function () {
  const newQuentity = counts(false, "phone-quantity");
  SetPrices(newQuentity, 1240, "phone-price");
  amountUpdate();
});

document.getElementById("Case-plus").addEventListener("click", function () {
  const newQuentity = counts(true, "case-quantity");
  SetPrices(newQuentity, 59, "case-price");

  amountUpdate();
});

document.getElementById("Case-minus").addEventListener("click", function () {
  const newQuentity = counts(false, "case-quantity");
  SetPrices(newQuentity, 59, "case-price");
  amountUpdate();
});

function remove(id) {
  document.querySelector(id).addEventListener("click", function (e) {
    console.log(
      e.target.parentNode.parentNode.remove(e.target.parentNode.parentNode)
    );
  });
}

remove("#Case-remove");
remove("#phone-remove");
