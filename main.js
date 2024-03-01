import accordeonBtn from "./all_Module_JS/accordeon_Button.js";
import seasons from "./all_Module_JS/seasonsTempo.js";
import btnOptionUserLogin from "./all_Module_JS/user_Login_Local.js";

document.addEventListener("DOMContentLoaded", (e) => {
  seasons();
  accordeonBtn();
});

btnOptionUserLogin(".btnChangeUserLoginCss", "#btnOptionUserLogin");
