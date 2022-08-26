import './Cover.css'
import { CoverContainer } from './CoverContainer'
import { OpacityCover } from './OpacityCover'

export const Cover = () => {

  function onMouseClick(e) {
    e.preventDefault();

    const coverContainer = document.querySelector('.CoverContainer');
    coverContainer.style.transform = "translateX(-100vw)";
    coverContainer.style.transitionDuration = "1s";

    const OpacityCover = document.querySelector('#OpacityCover');
    OpacityCover.style.opacity = "0";
    OpacityCover.style.transitionDuration = "1s";

    setTimeout(() => {
      const AmericanoCover = document.getElementById('Cover');
      AmericanoCover.style.display = "none";
    }, 1000);
  }

  return <div id="Cover">
    <CoverContainer />
    <OpacityCover onMouseClick={onMouseClick} />
  </div>
}
