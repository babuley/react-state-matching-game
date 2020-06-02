import React from 'react'
import './TileSelector.css'
import  useHover  from "../../hooks";

const TileSelector = (props) => {

  const [ref, hovered] = useHover();

  const tileChanged = (t) => {
    return () => props.handleNumTileChange(t);
  };

  const dropdown = hovered ? (
        <div className='tileSelectorContent' >
          <div className='number' onClick={tileChanged(4)}>4</div>
          <div className='number' onClick={tileChanged(16)}>16</div>
          <div className='number' onClick={tileChanged(36)}>36</div>
        </div>
  ) : null;

 return (
   <div className='tileSelector'>
     <div>Number of Tiles</div>
     <div className='tileSelectorDropdown'
      ref={ref}>
       {props.numTiles}
       {dropdown}
     </div>
   </div>
 )
}

export default TileSelector
