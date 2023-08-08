function setScrollVar() {
  const htmlElement = document.documentElement;
  // console.log(htmlElement);

  // percentOfScreenHeightScrolled = X means we have scroll X page(s), etc
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement;

  htmlElement.style.setProperty(
    '--scroll',
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  );
}
