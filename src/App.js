import './App.css';
//import Header from './components/Header';
import Menu from './components/Menu';
import Pomo from './components/Pomo';
import Task from './components/Task';

function App() {
  return (
    <div>
      <Menu />
      <div className="bodybox">
        <Task />
        <Pomo />
      </div>
    </div>
  );
}

export default App;

//Mouse Cursor
if (window.matchMedia("(min-width: 768px)").matches) {
  let mousePosX = 0,
      mousePosY = 0,
      mouseCircle = document.getElementById("mouse-circle");

  document.onmousemove = (e) => {
      mousePosX = e.pageX;
      mousePosY = e.pageY;
  };

  let delay = 15,
      revisedMousePosX = 0,
      revisedMousePosY = 0;

  function delayMouseFollow() {
      requestAnimationFrame(delayMouseFollow);

      revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
      revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

      mouseCircle.style.top = revisedMousePosY + "px";
      mouseCircle.style.left = revisedMousePosX + "px";
  }
  delayMouseFollow();
}