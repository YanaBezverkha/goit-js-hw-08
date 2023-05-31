import Player from '@vimeo/player';
import throttle from "lodash.throttle"

const save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000))

function onPlay(evt){
 save("videoplayer-current-time", evt.seconds);
}
const timePlayed = load("videoplayer-current-time")
player.setCurrentTime(timePlayed)