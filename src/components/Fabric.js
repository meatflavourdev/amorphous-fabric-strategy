import React, { useEffect } from 'react';
import { fabric } from 'fabric';

export default function Fabric({ yDocLoading, canvas, setCanvas }) {




  // Initialize the fabric canvas
  const initCanvas = () => {
    const bgPattern = new fabric.Pattern({ source: './assets/background_dots_01.svg' });
    return new fabric.Canvas('canvas', {
      height: 800,
      width: window.innerWidth,
      stateful: true,
      uniScaleTransform: false,
      backgroundColor: bgPattern,
    });
  };

  // Invoke fabric's canvas function upon initial render
  useEffect(() => {
    const newCanvas = initCanvas();
    console.log('new Canvas', newCanvas);
    newCanvas.renderAll.bind(newCanvas);
    setCanvas(newCanvas);

/*     fabric.Image.fromURL('./assets/background_dots_01.svg', function (img) {
      img.scaleToWidth(100);
      let patternSourceCanvas = new fabric.StaticCanvas();
      patternSourceCanvas.add(img);
      patternSourceCanvas.renderAll();
      let bgPattern = new fabric.Pattern({
        source: patternSourceCanvas.getElement(),
        repeat: 'repeat',
        //color: 'black' used to test that the pattern was showing up (it isn't)
      });
      newCanvas.setBackgroundColor(bgPattern, () => {
        newCanvas.renderAll.bind(newCanvas);
        console.log('newCanvas:', newCanvas);
        console.log('Pattern:', bgPattern);
      });
    }); */

    const objectRadius = 10;
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
