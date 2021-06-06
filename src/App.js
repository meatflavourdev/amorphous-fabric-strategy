import React, { useEffect, useState, useRef } from 'react';
import { Main } from 'grommet';
import { fabric } from 'fabric';
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
import HeaderNav from './components/HeaderNav';
import './App.css';
import Loader from './components/Loader';
import Fabric from './components/Fabric';
import useYDoc from './hooks/useYDoc';

// Fabric lives in the global window object
//const fabric = window.fabric

function App() {
  // Fabric's canvas state
  const [canvas, setCanvas] = useState(null);
  window.canvas = canvas;

  // Setup reference to a new yDoc so that mutable link to the current yDoc is persistent
  const { yDoc, yDocLoading } = useYDoc();

  // Get YMap which replicates the fabric data model


  useEffect(() => {

  }, [])

  // Adds a somewhat unremarkable rectangle to the fabric canvas
  const add = (canvi) => {
    var rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: '#7D4CDB',
      width: 200,
      height: 200,
      objectCaching: false,
      stroke: '#333333',
      strokeWidth: 3,
      originX: 'left',
      originY: 'top',
      centeredRotation: true,
      strokeUniform: true,
      rx: 50,
      ry: 50,
    });
    rect.toObject = (function(toObject) {
      return function() {
        return fabric.util.object.extend(toObject.call(this), {
          name: this.name
        });
      };
    })(rect.toObject);
    rect.name = 'trololo';

    canvi.add(rect);
    canvi.setActiveObject(rect);
    canvi.renderAll();
    console.log('rect:', rect.toObject())
  };

  return (
    <>
      <HeaderNav add={add} />
      <Main gridArea="main" className="App-main">
        <Loader loading={yDocLoading} />
        <Fabric loading={yDocLoading} canvas={canvas} setCanvas={setCanvas}/>
      </Main>
    </>
  );
}

export default App;
