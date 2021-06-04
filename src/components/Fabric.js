import React, { useEffect } from 'react';
import { fabric } from 'fabric';

export default function Fabric({ yDocLoading, canvas, setCanvas }) {
  // Initialize the fabric canvas
  const initCanvas = () => {
    return new fabric.Canvas('canvas', {
      height: 800,
      width: window.innerWidth * 0.95,
      backgroundColor: 'white',
    });
  };

  // Invoke fabric's canvas function upon initial render
  useEffect(() => {
    const newCanvas = initCanvas();
    console.log('new Canvas', newCanvas);
    setCanvas(newCanvas);
  }, []);


  // Set event listeners when canvas is set
  useEffect(() => {
  // Scale object stroke width to match aspect ratio
    canvas && canvas.on('object:scaling', (e) => {
    console.log('object:scaling callback', e)
      const obj = e.target;
      obj.rx = 20 / obj.scaleX;
      obj.ry = 20 / obj.scaleY;
  })

  }, [canvas]);

  // TODO: Resize canvas on window resize (add listener and resize function)




  return <canvas id="canvas" />;
}
