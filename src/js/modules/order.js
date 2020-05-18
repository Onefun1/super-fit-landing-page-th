export default () => {
  // Firefox 1.0+
  let isFirefox = typeof InstallTrigger !== "undefined";

  if (isFirefox) {
    let orderItemList = document.querySelectorAll(".order__item");

    for (let i = 0; i < orderItemList.length; i++) {
      orderItemList[i].classList.add("moz-fix");
    }
  }
};
