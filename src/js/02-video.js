import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = `videoplayer-current-time`;

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem(LOCALSTORAGE_KEY, evt.seconds);
  }, 1000)
);
player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .catch(function (error) {
    console.error(error);
  });
