const popupRepairTypes = () => {
  const navListPopupRepair = document.querySelector(".nav-list-popup-repair");

  const table = document.querySelector(
    ".popup-repair-types-content-table>table"
  );

  table.textContent = "";

  const renderTable = (data) => {
    data.forEach((item) => {
      table.innerHTML += `
      <tbody>
        <tr class="mobile-row showHide">
          <td class="repair-types-name">${data.typeService}</td>
          <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
          <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
          <td class="repair-types-value">
            ${data.units}</sup>
          </td>
          <td class="repair-types-value">${data.cost} руб.</td>
        </tr>
      </tbody>`;
    });
  };

  const btnListener = () => {
    const btns = document.querySelectorAll(".popup-repair-types-nav__item");

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        //renderTable(btn.textContent);
      });
    });
  };

  const renderNavBtn = (data) => {
    navListPopupRepair.textContent = "";

    data.forEach((item) => {
      if (!item) return;
      navListPopupRepair.innerHTML += `<button class="button_o popup-repair-types-nav__item">${item}</button>`;
    });

    btnListener();
  };

  const dataBase = () => fetch("./db/db.json");

  dataBase()
    .then((response) => response.json())
    .then((data) => {
      const dataTitle = data.map((item) => item.title);
      renderNavBtn(dataTitle);
    })
    .catch((error) => console.error(error));
};

export default popupRepairTypes;
