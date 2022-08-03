import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Trace timeupdate and Save playback time to local storage

player.on('timeupdate', throttle(onPlay, 500));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

// Renewal playback from the saved position

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
