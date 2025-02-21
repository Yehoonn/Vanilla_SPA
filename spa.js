const goToPath = (path) => {
  history.pushState(null, "", path);
  pageRender(path);
};

const pageRender = (path) => {
  const appDiv = document.getElementById("app");

  const renderHTML = (component) => {
    appDiv.innerHTML = component();
  };

  switch (path) {
    case "/":
      renderHTML(home);
      break;

    case "/about":
      renderHTML(about);
      break;

    case "/contact":
      renderHTML(contact);
      break;
  }
};

const home = () => {
  const useNumberState = () => {
    let number = 0;

    const getNumber = () => {
      return number;
    };

    const setNumber = (newState) => {
      number = newState;

      updateView();
    };

    const updateView = () => {
      document.getElementById("number").textContent = number;
    };

    return {
      getNumber,
      setNumber,
      updateView,
    };
  };

  const { getNumber, setNumber } = useNumberState();

  setTimeout(() => {
    document.getElementById("plus")?.addEventListener("click", () => {
      setNumber(getNumber() + 1);
    });

    document.getElementById("minus")?.addEventListener("click", () => {
      setNumber(getNumber() - 1);
    });

    document.getElementById("reset")?.addEventListener("click", () => {
      setNumber(0);
    });
  }, 1000);

  return `
  <div>
        <div id="number">${getNumber()}</div>
        <div style="display: flex; gap:10px; ">
            <div id="plus">더하기</div>
            <div id="minus">빼기</div>
            <div id="reset">초기화</div>
        </div>
  </div>
  `;
};

const about = () => {
  return `<div>어바웃 화면 입니다</div>`;
};

const contact = () => {
  return `<div>연락처 화면 입니다</div>`;
};

document.addEventListener("DOMContentLoaded", () => {
  const links = document.getElementsByClassName("nav-link");

  if (links.length > 0) {
    let linksArray = Array.from(links);

    linksArray.forEach((value) => {
      value.addEventListener("click", (event) => {
        event.preventDefault();
        const path = value.getAttribute("href");
        goToPath(path);
      });
    });
  }
});

window.addEventListener("popstate", () => {
  let path = window.location.pathname;

  pageRender(path);
});
