import ElementAnimation from './ElementAnimation';
import Drawer from './Drawer';
import funcyboxFunc from './fancybox';
import googleMap from './googleMap';
import judgeDevice from './judgeDevice';
import Opening from './Opening';
import pageLink from './pageLink';
import slickFunc from './slick';
import smartRollover from './smartRollover';

window.onload = () => {
  const drawer = new Drawer();
  drawer.openDrawer();
  const elementAnimation = new ElementAnimation();
  elementAnimation.getPositionToBlock();
  funcyboxFunc();
  const opening = new Opening();
  opening.event();
  judgeDevice();
  pageLink();
  slickFunc();
};
google.maps.event.addDomListener(window, 'load', googleMap);
if (window.addEventListener) {
  window.addEventListener('load', smartRollover, false);
}
else if (window.attachEvent) {
  window.attachEvent('onload', smartRollover);
}
