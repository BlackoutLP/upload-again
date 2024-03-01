export default function btnOptionUserLogin(
  bntUserLoginCss,
  btnOptionUserLogin
) {
  const $changeOptionsUserLogin = document.querySelector(
      ".changeOptionsUserLogin"
    ),
    $btnChangeUserLoginCss = document.querySelector(bntUserLoginCss),
    $btnChangeIconUser = document.getElementById("btnChangeIconUser");
  // console.log($btnChangeIconUser);
  let ls = localStorage;

  const $userNameLogin = document.getElementById("userNameLogin");
  //introduce el texto

  const textoIntroducido = () => {
    const $userNameLogin = document.getElementById("userNameLogin");
    $userNameLogin.innerHTML = "";
    let texto = prompt("introdusca un NickName");
    $userNameLogin.innerHTML = texto;
  };

  document.addEventListener("click", (e) => {
    if (
      e.target.matches(btnOptionUserLogin) ||
      e.target.matches(`${btnOptionUserLogin} *`)
    ) {
      $changeOptionsUserLogin.classList.add("is-activeTableOptions");
    }
    if (e.target.matches(bntUserLoginCss) || e.target.matches(".sections")) {
      if (e.target.matches("#btnChangeNickName")) {
        textoIntroducido();
        // ls.setItem("saveName", "loader");
        $changeOptionsUserLogin.classList.remove("is-activeTableOptions");
      } else if (e.target.matches("#btnChangeIconUser")) {
        console.log("segunda Opcion");
      } else {
        $changeOptionsUserLogin.classList.remove("is-activeTableOptions");
      }
    }
    // textoIntroducido();
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    // console.log(ls.removeItem("saveName"));
    // ls.removeItem();
    if (ls.getItem("saveName") === null) {
      ls.setItem("saveName", "nadaaun");
    }
    if (ls.getItem("saveName")) {
      console.log(textoIntroducido());
    }
    if (ls.getItem("saveName") === "imgagnes") {
      console.log("imganes");
    }
  });
}
