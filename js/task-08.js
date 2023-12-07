const btn = document.querySelector('button[type="submit"]').addEventListener("click", loginFuction);
let form = document.forms[0];
function loginFuction(){
  let email = form.elements.email;
  let pass = form.elements.password;
  if (email.value == null || email.value == "" || pass.value == null || pass.value == "")
  window.alert("Введіть Email та пароль!");
  else{
    const obj = new Object();
    obj.login = email.value;
    obj.pasword = pass.value;
    console.log(obj);
    document.getElementById("form-reset").reset();
  }
}
