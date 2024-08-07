const body = document.querySelector("body");

const btn_menu = body.querySelector("#btn-menu");
const ds_1 = btn_menu.querySelector("#ds-1");
const ds_2 = btn_menu.querySelector("#ds-2");
const ds_3 = btn_menu.querySelector("#ds-3");

const hamb_menu_fixed = body.querySelector("#hamb-menu-fixed");
btn_menu.addEventListener("click", (e) => {
  const isOpenMenu = hamb_menu_fixed.classList.contains("open");
  console.log(isOpenMenu);
  if (isOpenMenu) {
    body.classList.remove("overflow-hidden");
    hamb_menu_fixed.classList.remove("open");
    ds_1.classList.remove("ds-1");
    ds_2.classList.remove("ds-2");
    ds_3.classList.remove("ds-3");
  } else {
    body.classList.add("overflow-hidden");
    hamb_menu_fixed.classList.add("open");
    ds_1.classList.add("ds-1");
    ds_2.classList.add("ds-2");
    ds_3.classList.add("ds-3");
  }
});
