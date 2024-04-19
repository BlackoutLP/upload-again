export default function btnCarrosel(btnnext, btnprevious) {
  const $btnNext = document.getElementById("btnNext"),
    $btnPrevious = document.getElementById("btnprevious"),
    $imgCarroselBox = document.querySelectorAll(".imgContainerFigure");
  let i = 0;
  console.log($btnNext);
  console.log($btnPrevious);
  console.log($imgCarroselBox);

  document.addEventListener("click", (e) => {
    if (e.target.matches(`${btnnext}`) || e.target.matches(`${btnnext} *`)) {
      e.preventDefault();
      $imgCarroselBox[i].classList.remove("imgContainer-active");
      i++;
      if (i >= $imgCarroselBox.length) {
        i = 0;
      }
      $imgCarroselBox[i].classList.add("imgContainer-active");
      console.log(e.target);
    }
    if (
      e.target.matches(`${btnprevious}`) ||
      e.target.matches(`${btnprevious} *`)
    ) {
      e.preventDefault();
      $imgCarroselBox[i].classList.remove("imgContainer-active");
      i--;
      console.log("remove");
      if (i < 0) {
        i = $imgCarroselBox.length - 1;
      }
      $imgCarroselBox[i].classList.add("imgContainer-active");

      console.log(e.target);
    }
  });
}
