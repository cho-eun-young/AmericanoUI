import './CoverContainer.css'
import { useRef } from 'react';
export const CoverContainer = () => {
  const handlerCover = useRef();

  const handlerMouseOver = (e) => {
    e.preventDefault()
    handlerCover.current.classList.add('hover');
  }
  const handlerMouseLeave = (e) => {
    e.preventDefault()
    handlerCover.current.classList.remove('hover');
  }

  return (
    <div className = 'CoverContainer' ref={handlerCover} >
      <h2 id='AmericanoScreener'>
        Americano Screener
      </h2>
      <button className="material-symbols-outlined">arrow_forward_ios</button>
      <div className ='transparentBg'
        onMouseEnter = {handlerMouseOver}
        onMouseLeave = {handlerMouseLeave}
      ></div>
    </div>
  )
}
