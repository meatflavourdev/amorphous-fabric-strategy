import React, { useEffect } from 'react';
import { fabric } from 'fabric';

export default function Fabric({ yDocLoading, canvas, setCanvas }) {
  // Initialize the fabric canvas
  const initCanvas = () => {
    return new fabric.Canvas('canvas', {
      height: 800,
      width: window.innerWidth,
      backgroundColor: 'white',
      stateful: true,
    });
  };

  // Invoke fabric's canvas function upon initial render
  useEffect(() => {
    const newCanvas = initCanvas();
    console.log('new Canvas', newCanvas);
    setCanvas(newCanvas);

    const objectRadius = 20;
    function calcRadius(obj) {
      return Math.min(obj.width * obj.scaleX, obj.height * obj.scaleY) / 2;
    }
    // Scale object radius relative to the scale of the object
    newCanvas.on('object:scaling', (e) => {
      //console.log('object:scaling callback', e);
      const obj = e.target;
      //console.log(`obj.height / 2: ${obj.height / 2} obj.rx: ${obj.rx} obj.width / 2: ${obj.width / 2} obj.ry: ${obj.ry}`);
      const currentRadius = obj.height / 2 <= objectRadius / obj.scaleX || obj.width / 2 <= objectRadius / obj.scaleY ? calcRadius(obj) : objectRadius;
      obj.rx = currentRadius / obj.scaleX;
      obj.ry = currentRadius / obj.scaleY;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: Resize canvas on window resize (add listener and resize function)




  return <canvas id="canvas" />;
}
