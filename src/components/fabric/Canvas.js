import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import { useProject } from '../../layout/context/ProjectContext';

export default function Canvas({ yDocLoading }) {

  let canvasFabric;



  // Create Canvas object and configure
  function initCanvas () {
    canvasFabric = window.canvas = new fabric.Canvas(canvasRef.current, {
      height: 840,
      width: window.innerWidth,
      x: window.innerWidth / 2,
      y: 420,
      stateful: true,
      uniScaleTransform: false,
      backgroundColor: 'white',
      preserveObjectStacking: true,
      isDrawingMode: false,
    });
  };

  // Setup canvas properties that must be donw asynchronously
  function configureCanvas() {
    /*   function bgPattern(url) {
      let patternSourceCanvas = new fabric.Canvas();
      fabric.Image.fromURL(url, function (img) {
        img.scaleToWidth(100);
        patternSourceCanvas.add(img);
        patternSourceCanvas.renderAll();
      });
      return new fabric.Pattern({
        source: img,
        repeat: 'repeat',
        color: 'red',
      });
    } */
   /*canvasFabric.setBackgroundColor({source: bgPattern('logo512.png')}, canvasFabric.renderAll.bind(canvasFabric));
    //canvasFabric.backgroundColor.repeat === 'repeat';
    console.log('initialized Canvas', canvasFabric); */
    //canvasFabric.renderAll();
  };

  // TODO: Resize canvas on window resize (add listener and resize function)
  function responsiveCanvasResize() {

  };

  const { project, updateCanvas } = useProject();

  // Invoke fabric's canvas function upon initial render
  useEffect(() => {
    initCanvas();
    configureCanvas();
    responsiveCanvasResize();
    updateCanvas(canvasFabric);

    // Scale object radius relative to the scale of the object
    const objectRadius = 10;
    canvasFabric.on('object:scaling', (e) => {
      function calcRadius(obj) {
        return Math.min(obj.width * obj.scaleX, obj.height * obj.scaleY) / 2;
      }
      const obj = e.target;
      const currentRadius =
        obj.height / 2 <= objectRadius / obj.scaleX || obj.width / 2 <= objectRadius / obj.scaleY
          ? calcRadius(obj)
          : objectRadius;
      obj.rx = currentRadius / obj.scaleX;
      obj.ry = currentRadius / obj.scaleY;
    });

    //
    canvasFabric.on('object:modified', (e) => {
      const currentObjects = canvasFabric.toObject(['key']).objects;
      const yObjects = window.project.yDoc ? window.project.yDoc.get('objects') : null;
      console.log('canvas-- object:modified -- currentCanvas:', currentObjects);
      yObjects && currentObjects.forEach((elm) => {
        yObjects.set(elm.key, elm);
      });
      console.log('canvas-- yObjects', yObjects);

    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // A reference to the canvas DOM object for fabric to grab onto
  const canvasRef = React.createRef();
  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} id="canvas" />
    </div>
  );
}
