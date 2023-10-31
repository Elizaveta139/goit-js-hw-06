const loginForm = document.querySelector(".login-form");

const onSubmitFormClick = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all fields!");
  } else {
    const formDataOdject = {
      email: email,
      password: password,
    };
    console.log(formDataOdject);
    form.reset();
  }
};

loginForm.addEventListener("submit", onSubmitFormClick);
