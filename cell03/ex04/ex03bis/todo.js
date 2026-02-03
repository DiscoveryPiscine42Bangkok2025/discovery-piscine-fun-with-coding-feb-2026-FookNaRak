$(document).ready(function() {
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
    setCookie("todos", $("#ft_list").html());
  }

  function addTodo(text) {
    const div = $("<div>").text(text).click(function() {
      if (confirm("Do you want to delete this TO DO?")) {
        $(this).remove();
        saveTodos();
      }
    });
    $("#ft_list").prepend(div);
    saveTodos();
  }

  /* ---------------- Events ---------------- */

  $("#new").click(function() {
    const text = prompt("Enter a new TO DO:");
    if (text && text.trim() !== "") {
      addTodo(text.trim());
    }
  });

  /* ---------------- Load from cookie ---------------- */

  $(window).on("load", function() {
    const saved = getCookie("todos");
    if (saved) {
      $("#ft_list").html(saved);

      // reattach click events
      $("#ft_list div").click(function() {
        if (confirm("Do you want to delete this TO DO?")) {
          $(this).remove();
          saveTodos();
        }
      });
    }
  });
});