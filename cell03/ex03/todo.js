const list = document.getElementById("ft_list");
const btn = document.getElementById("new");

/* ---------------- Cookie helpers ---------------- */

function setCookie(name, value) {
  document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, val] = c.split("=");
    if (key === name)
      return decodeURIComponent(val);
  }
  return "";
}

/* ---------------- TO DO logic ---------------- */

function saveTodos() {
  setCookie("todos", list.innerHTML);
}

function addTodo(text) {
  const div = document.createElement("div");
  div.textContent = text;

  div.onclick = () => {
    if (confirm("Do you want to delete this TO DO?")) {
      div.remove();
      saveTodos();
    }
  };

  list.prepend(div);
  saveTodos();
}

/* ---------------- Events ---------------- */

btn.onclick = () => {
  const text = prompt("Enter a new TO DO:");
  if (text && text.trim() !== "") {
    addTodo(text.trim());
  }
};

/* ---------------- Load from cookie ---------------- */

window.onload = () => {
  const saved = getCookie("todos");
  if (saved) {
    list.innerHTML = saved;

    // reattach click events
    [...list.children].forEach(div => {
      div.onclick = () => {
        if (confirm("Do you want to delete this TO DO?")) {
          div.remove();
          saveTodos();
        }
      };
    });
  }
};
