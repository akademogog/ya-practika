import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';

function CustomScrollBar({autoHeightMax, ...props}) {
   const renderThumb = () => {
      const thumbStyle = {
         background: "#8585AD"
      };
      return (
         <div
            style={{ ...thumbStyle }}/>
      );
   }
   const renderTrack = () => {
      const trackStyle = {
         background: "#2F2F37",
         position: 'absolute',
         width: 8,
         right: 0,
         bottom: 0,
         top: 0
      };
      return (
         <div
            style={{ ...trackStyle }}/>
      );
   }
   
   return (
      <Scrollbars
         autoHeight
         autoHeightMin = { 0 }
         autoHeightMax = { autoHeightMax }
         hideTracksWhenNotNeeded={true}
         renderThumbVertical={renderThumb}
         renderTrackVertical={renderTrack}
      >
         {props.children}
      </Scrollbars>
   );
}

CustomScrollBar.propTypes = {
   autoHeightMax: PropTypes.number.isRequired
};

export default CustomScrollBar;