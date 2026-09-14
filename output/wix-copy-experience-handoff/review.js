const menu = document.querySelector(".menu-button");
const tree = document.querySelector(".page-tree");
const links = [...document.querySelectorAll(".tree-link")];
function closeMenu() {
  tree.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}
menu.addEventListener("click", () => {
  const open = tree.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
links.forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
let scheduled = false;
function activePage() {
  scheduled = false;
  const sections = [...document.querySelectorAll("[data-page]")];
  const current = sections
    .filter((s) => s.getBoundingClientRect().top <= 180)
    .at(-1);
  links.forEach((a) => {
    const active = current && a.hash === `#${current.id}`;
    a.classList.toggle("active", !!active);
    if (active) a.setAttribute("aria-current", "location");
    else a.removeAttribute("aria-current");
  });
}
document.addEventListener(
  "scroll",
  () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(activePage);
    }
  },
  { passive: true },
);
window.addEventListener("hashchange", activePage);
activePage();
document.querySelector("#copy-view").addEventListener("click", (e) => {
  const on = document.body.classList.toggle("copy-only");
  e.currentTarget.setAttribute("aria-pressed", String(on));
  e.currentTarget.textContent = on ? "Full handoff" : "Copy view";
});
document
  .querySelector("#print-review")
  .addEventListener("click", () => window.print());
document.querySelectorAll("[data-copy]").forEach((button) =>
  button.addEventListener("click", async () => {
    const text = document.getElementById(button.dataset.copy).innerText.trim();
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      const input = document.createElement("textarea");
      input.value = text;
      input.style.position = "fixed";
      input.style.left = "-9999px";
      document.body.append(input);
      input.select();
      copied = document.execCommand("copy");
      input.remove();
    }
    button.textContent = copied ? "Copied" : "Select text to copy";
    document.querySelector("#copy-announcement").textContent = copied
      ? "Section text copied."
      : "Clipboard unavailable. Select the section text to copy it.";
    setTimeout(() => {
      button.textContent = "Copy text";
    }, 2200);
  }),
);
const dialog = document.querySelector("#capture-dialog");
document.querySelectorAll(".capture-open").forEach((a) =>
  a.addEventListener("click", (e) => {
    if (typeof dialog.showModal !== "function") return;
    e.preventDefault();
    dialog.querySelector("img").src = a.href;
    dialog.querySelector("img").alt =
      `Full current Wix ${a.dataset.title} capture`;
    document.querySelector("#capture-title").textContent =
      `${a.dataset.title} · full Wix capture`;
    dialog.showModal();
  }),
);
document
  .querySelector("#close-capture")
  .addEventListener("click", () => dialog.close());
