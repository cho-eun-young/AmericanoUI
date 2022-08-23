import './CoverContainer.css'
import { useCallback, useRef } from 'react';

export const CoverContainer = () => {
  const cover = useRef();

  const handlerMouseOver = useCallback(() => {
    cover.current.classList.add('hover');
  },[]);

  const handlerMouseLeave = useCallback(() => {
    cover.current.classList.remove('hover');
  },[]);

  const handlerClick = useCallback(() => {
    window.document.getElementById('Cover').classList.add('hidden');
  },[]);
  
  return <div ref={cover} className='CoverContainer' >
    <h2 id='AmericanoScreener' onMouseOver={handlerMouseOver} onMouseLeave={handlerMouseLeave}
    onClick={handlerClick}
    >
      Americano Screener
    </h2>
  </div>
}
