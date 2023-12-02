const btn = document.querySelector('button[type="submit"]').addEventListener("click", loginFuction);

function loginFuction(){
  const login = document.querySelector('input[type="email"]');
  const password = document.querySelector('input[type="password"]');
  if (login.value == null || login.value == "" || password.value == null || password.value == "")
  window.alert("Введіть Email та пароль!");
  else{
    const obj = new Object();
    obj.login = login.value;
    obj.pasword = password.value;
    console.log(obj);
    document.getElementById("form-reset").reset();
  }
}
