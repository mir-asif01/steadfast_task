const menu_icon = document.getElementById("menu-icon")

const mobile_drawer = document.getElementById("mobile-drawer")

menu_icon.addEventListener("click", () => {
  mobile_drawer.classList.remove("hide-drawer")
  mobile_drawer.classList.add("show-drawer")
})

document.getElementById("drawer-close-btn").addEventListener("click", () => {
  mobile_drawer.classList.remove("show-drawer")
  mobile_drawer.classList.add("hide-drawer")
})
