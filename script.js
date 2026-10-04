document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".global-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.classList.toggle("is-open");
      nav.classList.toggle("is-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "メニューを閉じる" : "メニューを開く"
      );
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.classList.remove("is-open");
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "メニューを開く");
      });
    });
  }

  // Works filter
  const filterButtons = document.querySelectorAll(".filter-button");
  const workCards = document.querySelectorAll(".work-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      workCards.forEach((card) => {
        const category = card.dataset.category;
        const shouldShow = filter === "all" || category === filter;

        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });

  // Prevent demo contact form from actually submitting
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("現在はデモフォームです。公開時にContact Form 7などへ接続してください。");
    });
  }
});
