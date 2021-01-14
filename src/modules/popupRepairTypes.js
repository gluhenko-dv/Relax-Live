const popupRepairTypes = () => {
  const navListPopupRepair = document.querySelector(".nav-list-popup-repair");
  let tableData;
  const table = document.querySelector(
    ".popup-repair-types-content-table>table"
  );

  table.textContent = "";

  const renderTable = (id) => {
    table.textContent = "";
    tableData.forEach((item, i) => {
      if (i !== id) return;
      document.getElementById("switch-inner").textContent = item.title;
      item.priceList.forEach((str) => {
        table.innerHTML += `
      <tbody>
        <tr class="mobile-row showHide">
          <td class="repair-types-name">${str.typeService}</td>
          <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
          <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
          <td class="repair-types-value">
            ${str.units}</sup>
          </td>
          <td class="repair-types-value">${str.cost} руб.</td>
        </tr>
      </tbody>`;
      });
    });
  };

  const btnListener = () => {
    const btns = document.querySelectorAll(".popup-repair-types-nav__item");
    btns[0].style.border = `3px solid #F48922`;;
    const btnDeleteStyle = () => {
      btns.forEach((btn) => {
        btn.style.border = `3px solid #EEEBE5`;
      });
    };

    btns.forEach((btn, indexBtn) => {
      btn.addEventListener("click", () => {
        renderTable(indexBtn);
        btnDeleteStyle();
        btn.style.border = `3px solid #F48922`;
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
      tableData = data.filter((item) => item.title);
      renderNavBtn(dataTitle);
      renderTable(0);
    })
    .catch((error) => console.error(error));
};

export default popupRepairTypes;
