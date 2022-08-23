import './CoverContainer.css'
import { useCallback, useRef } from 'react';

export const CoverContainer = () => {
  const cover = useRef()

  const handlerMouseOver = useCallback(() => {
    cover.current.classList.add('hover');
  },[]);

  const handlerMouseLeave = useCallback(() => {
    cover.current.classList.remove('hover');
  },[]);

  return <div ref={cover} className='CoverContainer' >
    <h2 id='AmericanoScreener' onMouseOver={handlerMouseOver} onMouseLeave={handlerMouseLeave}>Americano Screener</h2>
  </div>
}
