"use strict";

const email = (
  (x) => (y) => (z) => (w) =>
    `${y}@${x}.${w}.${z}`
)("inf")("szumi")("hu")("elte");

const emailElem = document.getElementById("email");
emailElem.innerHTML = `<a href="mailto:${email}">${email}</a>`;
