import './CoverContainer.css';
import './OpacityCover.css';
import { useRef } from 'react';

export const OpacityCover = (props) => {
  const handlerOpacity = useRef();
  return (
    <div
      id="OpacityCover"
      onClick={props.onMouseClick}
      ref={handlerOpacity}
    ></div>
  );
}
