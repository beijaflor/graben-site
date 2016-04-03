---
---
(function(exports) {
  exports.myModal = exports.myModal || {};
  const module = exports.myModal;

  const modal = document.getElementById('slideModal');
  const btn = document.getElementById("slideBtn");
  const close = document.getElementById("modalClose");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  close.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

})(window);

