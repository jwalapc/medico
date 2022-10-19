console.log("Form Validate");

const first = document.getElementById("firstName");
const last = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const car = document.getElementById("car");

let validfirstName = false;
let validlastName = false;
let validemail = false;
let validphone = false;

first.addEventListener("blur", () => {
  console.log("first");
  let regex = /^([a-zA-Z]){4,10}$/i;
  let str = first.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("it match");
    first.classList.remove("is-invalid");
    first.classList.add("is-valid");
    validfirstName = true;
  } else {
    console.log("not match");
    first.classList.add("is-invalid");
    validfirstName = false;
  }
});

last.addEventListener("blur", () => {
  console.log("last");
  regex = /^([a-zA-Z]){4,10}$/i;
  let str = last.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("it match");
    last.classList.add("is-valid");
    last.classList.remove("is-invalid");
    validlastName = true;
  } else {
    console.log("not match");
    last.classList.add("is-invalid");
    validlastName = false;
  }
});
email.addEventListener("blur", () => {
  console.log("email");
  let regex =
    /^[a-zA-Z]([_\-\0-9a-zA-Z]+)@([_\-\0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/i;
  let str = email.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("it match");
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    validemail = true;
  } else {
    console.log("not match");
    email.classList.add("is-invalid");
    validemail = false;
  }
});
phone.addEventListener("blur", () => {
  console.log("Name");
  let regex = /^[0-9]{10}$/i;
  let str = phone.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("it match");
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
    validphone = true;
  } else {
    console.log("not match");
    phone.classList.add("is-invalid");
    validphone = false;
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  console.log("submit");
  e.preventDefault();

  if (validemail && validfirstName && validlastName && validphone) {
    console.log("added");
    let failure = document.getElementById("failure");
    let success = document.getElementById("success");
    success.classList.add("show alert-success");
    failure.alert("close");
  } else {
    console.log("not added");
    let failure = document.getElementById("failure");
    let success = document.getElementById("success");

    failure.classList.add("show");
    success.alert("close");
  }
});
