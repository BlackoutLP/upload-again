export default function accordeonBtn() {
  const $btnAccordeon = document.querySelectorAll(".btnAccordion");
  const $cardAccordion = document.querySelectorAll(".cardAccordion");

  for (let i = 0; i < $btnAccordeon.length; i++) {
    const el = $btnAccordeon[i];
    el.addEventListener("click", (e) => {
      if (e.target) {
        $cardAccordion.forEach((el) => {
          el.classList.add("active_accordeon");
        });
      }
    });
  }

  document.addEventListener("click", (e) => {});
  var acc = document.getElementsByClassName("btnAccordion");
  var $panel = document.getElementsByClassName("cardAccordion");

  // console.log(acc);
  // console.log($panel);
  // for (let i = 0; i < acc.length; i++) {
  //   acc[i].addEventListener("click", function () {
  //     this.classList.toggle("active_accordeon");

  //     var panel = this.nextElementSibling;
  //     if (panel.style.display === "block") {
  //       $panel.classList.remove("active_accordeon");
  //       $panel.style.display = "none";
  //     } else {
  //       panel.style.display = "block";
  //     }
  //   });
  // }
}
