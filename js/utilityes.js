// added quentity count
function counts(isTrue, id) {
  const presentQuentity = document.getElementById(id);
  const quentityvalue = presentQuentity.value;
  const quentity = parseInt(quentityvalue);
  let newQuentity;
  if (isTrue) {
    newQuentity = quentity + 1;
  } else {
    newQuentity = quentity - 1;
  }
  presentQuentity.value = newQuentity;
  return newQuentity;
}

//   set price
function SetPrices(newQuentity, price, priceId) {
  const presentPrice = document.getElementById(priceId);
  const PriceValue = presentPrice.innerText;

  const amount = newQuentity * price;
  presentPrice.innerText = amount;
  return amount;
}

// get elementPrice

function elementPrice(id) {
  const subtotal = document.getElementById(id);
  const subtotalText = subtotal.innerText;
  const presesntPrice = parseInt(subtotalText);
  return presesntPrice;
}
// set amount Value
function setPrice(id, price) {
  const getId = document.getElementById(id);
  getId.innerText = price;
}

function amountUpdate() {
  const phonePrice = elementPrice("phone-price");
  const casePrice = elementPrice("case-price");
  const totalPrices = phonePrice + casePrice;
  const tax = parseFloat((totalPrices / 10).toFixed(2));
  const amount = totalPrices + tax;
  setPrice("tax", tax);
  setPrice("sub-total", totalPrices);
  setPrice("totalPrice", amount);
}
