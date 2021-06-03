import React, { useEffect, useState, useRef } from 'react';
import { Main } from 'grommet';
import { fabric } from 'fabric';
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { OnHeader } from './components/Header';
import './App.css';
import ScaleLoader from '@bit/davidhu2000.react-spinners.scale-loader';

// Fabric lives in the global window object
//const fabric = window.fabric

function App() {
  // Fabric's canvas state
  const [canvas, setCanvas] = useState();
  window.canvas = canvas;

  const [loading, setLoading] = useState(true);

  const yDoc = new Y.Doc();

  // Invoke fabric's canvas function upon initial render
  useEffect(() => {
    const newCanvas = initCanvas();
    console.log('new Canvas', newCanvas);
    setCanvas(newCanvas);
  }, [loading]);

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
  };

  // Initialize the fabric canvas
  const initCanvas = () => {
    return new fabric.Canvas('canvas', {
      height: 800,
      width: 1055,
      backgroundColor: 'white',
    });
  };

  // Create a rectangle
  const addRect = (canvi) => {
    console.log('addRect Called');
  };

  return (
    <>
      <OnHeader add={add} />
      <Main gridArea="main" className="App-main">
        {!loading ? (
          <></>
        ) : (
          <div className="loaderContainer">
            <ScaleLoader className="loader" height={90} width={10} color="#222222" />
          </div>
        )}
        <canvas id="canvas" />
      </Main>
    </>
  );
}

export default App;
