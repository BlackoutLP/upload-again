export default function seasons() {
  const temporadas = ["winter", "spring", "summer", "autumn"];
  let $sections = document.querySelector(".sections");
  const $ul = document.createElement("ul");

  const $csection = document.createElement("section");
  $csection.classList.add("sections");
  $sections.insertAdjacentElement("afterend", $csection);

  $ul.setAttribute("id", "seasons");
  $csection.appendChild($ul);

  // $ul.innerHTML = `<h3></h3>`;

  $ul.insertAdjacentHTML("afterbegin", `<h2>the best season is? </h2>`);
  temporadas.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = `${el}`;
    $ul.appendChild($li);
  });
}
