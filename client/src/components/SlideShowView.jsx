import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from '../../../lib/react-images';

function SlideShowView(props) {
  const gridViewButton = ( // for future modal grid gallery view
    <button
      className="grid-view-button"
      style={{position:'fixed', left:'90%', backgroundColor:'transparent', border:'none', color:'white', fontWeight:'900', borderRadius:'50%', padding:'10px'}}
      onClick={() => props.gridButtonClick()}
    ><i className="fa fa-th fa-2x" />
    </button>);

  const name = props.placeName.toUpperCase();
  const placeName = <div className="place-name" style={{fontFamily:`'Raleway', 'sans-serif'`, letterSpacing:'.15em', fontSize:'18px', fontWeight:'400', color:'white', width:'100%', position:'fixed', left:'35%', top:'30px', zIndex: '1000', backgroundColor:'black'}}>{name}</div>;
  const photoCounter = <div className="slideshow-counter" style={{fontFamily:`'Raleway', 'sans-serif`, fontWeight:'100px', color:'white', fontSize:'16px', position:'fixed', left:'85%', top:'30px'}}>{props.current + 1} of {props.photos.length}</div>;

  return (
    <div id="slideshow">
      <Lightbox
        images={props.photos}
        onClose={() => props.closeLightbox()}
        onClickPrev={() => props.clickPrev()}
        onClickNext={() => props.clickNext()}
        currentImage={props.current}
        isOpen={props.isLightboxOpen}
        height={400}
        width={1600}
        customControls={[gridViewButton, placeName, photoCounter]}
        className="image"
      />
    </div>
  );
}

SlideShowView.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    caption: PropTypes.object.isRequired,
  })).isRequired,
  current: PropTypes.number.isRequired,
  placeName: PropTypes.string.isRequired,
  isLightboxOpen: PropTypes.bool.isRequired,
  closeLightbox: PropTypes.func.isRequired,
  clickPrev: PropTypes.func.isRequired,
  clickNext: PropTypes.func.isRequired,
  gridButtonClick: PropTypes.func.isRequired,
};

export default SlideShowView;
