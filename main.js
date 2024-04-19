import accordeonBtn from "./all_Module_JS/accordeon_Button.js";
import btnCarrosel from "./all_Module_JS/btnCarrosel.js";
import seasons from "./all_Module_JS/seasonsTempo.js";
import btnOptionUserLogin from "./all_Module_JS/user_Login_Local.js";

document.addEventListener("DOMContentLoaded", (e) => {
  seasons();
  accordeonBtn();
  btnCarrosel("#btnNext", "#btnprevious");
});

btnOptionUserLogin(".btnChangeUserLoginCss", "#btnOptionUserLogin");
