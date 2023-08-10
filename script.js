window.addEventListener('scroll', setScrollVar);
window.addEventListener('resize', setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  // console.log(htmlElement);

  // percentOfScreenHeightScrolled = X means we have scroll X page(s), etc
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;

  // console.log('htmlElement.scrollTop=', htmlElement.scrollTop);
  // console.log('htmlElement.clientHeight=', htmlElement.clientHeight);
  console.log(percentOfScreenHeightScrolled * 100);

  // console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
  // It will never get more than 100, if it scroll to the next page, we will just put '100' into --scroll
  htmlElement.style.setProperty(
    '--scroll',
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  );
}

setScrollVar();
