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

const observer = new IntersectionObserver((entries) => {
  // loop through from the end of the image array to the start of the image array
  // So that when you scroll up from the 2nd section to the 1st section, the #img-1 will stay there.
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i];

    // isIntersecting meaning it is on the page.
    if (entry.isIntersecting) {
    }
  }
});

document.querySelectorAll('[data-img-to-show]').forEach((section) => {
  observer.observe(section);
});
