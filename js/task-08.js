const btn = document.querySelector('button[type="submit"]').addEventListener("click", loginFuction);
let form = document.forms[0];
function loginFuction(){
  const login = document.querySelector('input[type="email"]');
  const password = document.querySelector('input[type="password"]');
  let email = form.elements.email;
  let pass = form.elements.password;
  if (login.value == null || login.value == "" || password.value == null || password.value == "")
  window.alert("Введіть Email та пароль!");
  else{
    const obj = new Object();
    obj.login = email.value;
    obj.pasword = pass.value;
    console.log(obj);
    document.getElementById("form-reset").reset();
  }
}
