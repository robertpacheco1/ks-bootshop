/*
    © 2023 Iron Fist Wrestling LLC
    https://www.ironfistwrestling.com
*/

console.log(
  "Iron Fist Wrestling - Wrestling Apperal Store | Shop at https://www.ironfistwrestling.com"
);

// Init Bootstrap tooltips
document
  .querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach((el) => new bootstrap.Tooltip(el));

// Init Bootstrap popovers
document
  .querySelectorAll('[data-bs-toggle="popover"]')
  .forEach((el) => new bootstrap.Popover(el));

// Shopify's callenge page - Add BS classes
document
  .querySelector(".btn.shopify-challenge__button")
  ?.classList.add("btn-primary");

// Shopify's errors messages - Add BS classes
const errors = document.querySelector(".errors");
if (errors) {
  errors.classList.add("alert", "alert-danger");
}
