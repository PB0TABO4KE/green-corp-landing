const INCREASE_NUMBER_ANIMATION_SPEED = 40;
function increaseNumberAnimationStep(i, elementCount, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      elementCount.innerText = i + "+";
    } else {
      elementCount.innerText = i;
      //console.log(i);
    }
    i = i + 100;

    setTimeout(
      increaseNumberAnimationStep,
      INCREASE_NUMBER_ANIMATION_SPEED,
      i,
      elementCount,
      endNumber
    );
  }
}
function initIncreaseNumberAnimation() {
  const begin = 0;
  const end = 5000;
  const elementC = document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(begin, elementC, end);
}