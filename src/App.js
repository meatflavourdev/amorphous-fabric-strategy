import React, { useEffect, useState } from 'react';
import { Main } from 'grommet';
import { OnHeader } from './components/Header';
import './App.css';
import { fabric } from 'fabric';

// Fabric lives in the global window object
//const fabric = window.fabric

function App() {
  // Fabric's canvas state
  const [canvas, setCanvas] = useState();
  window.canvas = canvas;

  const [loading, setLoading] = useState(true);

  // Invoke fabric's canvas function upon initial render
  useEffect(() => {
    const newCanvas = initCanvas()
    console.log('new Canvas', newCanvas)
    setCanvas(newCanvas);
  }, []);

    const add = (canvi) => {
      var rect = new fabric.Rect({
        left: 100,
        top: 50,
        fill: 'lightgrey',
        width: 200,
        height: 100,
        objectCaching: false,
        stroke: 'darkgrey',
        strokeWidth: 3,
      });

      canvi.add(rect);
      canvi.setActiveObject(rect);
      canvi.renderAll();
    }

  // Initialize the fabric canvas
  const initCanvas = () => {
    setLoading(false);
    return new fabric.Canvas('canvas', {
      height: 800,
      width: 1055,
      backgroundColor: 'white',
    });
  }

  // Create a rectangle
  const addRect = (canvi) => {
    console.log('addRect Called')
  }

  return (
    <>
      <OnHeader add={add} />
      <Main gridArea="main" className="App-main">
        <canvas id="canvas" />

      </Main>
    </>
  );
}

export default App;
