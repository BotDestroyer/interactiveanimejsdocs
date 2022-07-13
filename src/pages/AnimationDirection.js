import React from "react";
import anime from "animejs";
import '../styles/AnimationDirection.css';

const AnimationDirection = function () {
    const animationRef = React.useRef(null);
    React.useEffect(() => {
        animationRef.current = anime({
            targets: ".el",
            translateX: 250,
            delay: function(el, i) {
                return i * 100;
            },
            loop: true,
        direction: "alternate",
        easing: "easeInOutSine"
    });
  }, []);
  return (
    <div className="App">
      <div className="el" />
    </div>
  );
};
  
export default AnimationDirection;
  