const currentPageUrl = window.location.href;
const menuItems = document.querySelectorAll("nav a")
menuItems.forEach(item => {
  const itemUrl = item.href ;

  if(currentPageUrl === itemUrl) {
    item.classList.add("active");
  }
})
