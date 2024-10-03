const menu_icon = document.getElementById("menu-icon")

const mobile_drawer = document.getElementById("mobile-drawer")

menu_icon.addEventListener("click", () => {
  mobile_drawer.classList.remove("mobile-drawer-hidden")
  mobile_drawer.classList.add("mobile-drawer-visible")
})

document.getElementById("drawer-close-btn").addEventListener("click", () => {
  mobile_drawer.classList.remove("mobile-drawer-visible")
  mobile_drawer.classList.add("mobile-drawer-hidden")
})
