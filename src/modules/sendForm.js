import togglePopups from "./togglePopups";
const sendForm = () => {
  const statusMessageText = document.createElement("div");
  const popupThank = document.querySelector(".popup-thank");

  const errorMessage = "Что-то пошло не так...",
    loadMessage = "Отправляю ваше сообщение",
    succesMessage = "Спасибо! Мы скоро свяжемся с вами!",
    validMessage = "Заполните поля корректно!";

  const forms = document.querySelectorAll("form");

  const replaceInputForms = () => {
    const allInputsForm = document.querySelectorAll("form input");
    allInputsForm.forEach((item) => {
      item.addEventListener("input", (e) => {
        const target = e.target;

        target.style.border = `none`;
        target.setCustomValidity("");
        if (target.name === "user_name") {
          target.value = target.value.replace(/[^а-яёА-ЯЁ\s]/gi, "");
        }
        if (target.name === "user_phone") {
          target.maxLength = 11;
          if (target.value[0] === "+") {
            target.maxLength = 12;
          }
          target.value = target.value.replace(/[^0-9+]/gi, "");
        }
        if (target.name === "user_message") {
          target.value = target.value.replace(/[^а-яёА-ЯЁ\s\,\.\!\?\-]/gi, "");
        }
      });
    });
  };

  replaceInputForms();

  const validInputsForm = (form) => {
    let validStatus = true;

    const inputs = form.querySelectorAll("input");
    const errorValid = (input) => {
      input.style.borderBottom = `4px solid red !important`;
      input.setCustomValidity("Заполните корректно!");
      input.reportValidity();
      validStatus = false;
    };
    inputs.forEach((input) => {
      if (input.value === "") {
        errorValid(input);
      }
      if (input.name === "username") {
        if (input.value.length < 2) {
          errorValid(input);
        }
      }
      if (input.name === "user_email") {
        if (input.value.replace(/^\w+@\w+\.\w{2,}$/, "") !== "") {
          errorValid(input);
        }
      }
    });
    return validStatus;
  };

  const statusMessage = (status) => {
    statusMessageText.classList.add("status-msg");
    statusMessageText.style.color = `white`;
    statusMessageText.style.fontSize = `18px`;
    statusMessageText.textContent = "Тут будет сообщение";
    statusMessageText.innerHTML = status;
    setTimeout(() => {
      statusMessageText.textContent = "";
      statusMessageText.classList.remove("status-msg");
    }, 5000);
  };

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const checkBoxPolicy = form.querySelector(".checkbox__input");
      form.appendChild(statusMessageText);
      if (!validInputsForm(form)) {
        statusMessage(validMessage);
        return;
      }
      if (!checkBoxPolicy.checked) {
        statusMessage("Примите соглашение на обработку персональных данных");
        return;
      }

      statusMessage(loadMessage);

      const formData = new FormData(form);
      const body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      const postData = (body) =>
        fetch("./server.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("status network not 200");
          }
          statusMessage(succesMessage);
          form.reset();
          togglePopups(popupThank);
          setTimeout(() => {
            const popup = document.querySelector(".popup");
            popup.style.display = `none`;
          }, 4000);
        })
        .catch((error) => {
          statusMessage(errorMessage);
          console.warn(error);
        });
    });
  });
};

export default sendForm;
