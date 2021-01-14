const popupRepairTypes = () => {
  const navListPopupRepair = document.querySelector(".nav-list-popup-repair");

  const renderNavBtn = (data) => {
    navListPopupRepair.textContent = "";

    data.forEach(item => {
      if(!item) return
      navListPopupRepair.innerHTML += `<button class="button_o popup-repair-types-nav__item active">${item}</button>`;
    })
  };

  const dataBase = () => fetch("./db/db.json");

  dataBase()
    .then((response) => response.json())
    .then((data) => {
      const dataTitle = data.map(item => item.title);
      renderNavBtn(dataTitle);
    })
    .catch((error) => console.error(error));


};

export default  popupRepairTypes;