import React from 'react';
import * as Y from 'yjs';
import {Main} from 'grommet';
import {fabric} from 'fabric';
import HeaderNav from './navheader/NavHeader';
import './App.css';
import Loader from './loader/Loader';
import Canvas from '../components/fabric/Canvas';
import useYDoc from '../components/hooks/useYDoc';
import { useProject } from './context/ProjectContext';
import id62 from 'id62';
import jsonpatch from 'fast-json-patch';

// Fabric lives in the global window object
//const fabric = window.fabric

function App() {
  // Setup project and yDoc
  const { updateYjs } = useProject();
  const { yDoc, wsProvider } = useYDoc();

  // Get YMap which replicates the fabric data model
  React.useEffect(() => {
    updateYjs(yDoc, wsProvider);

    console.log('yDoc:', yDoc);
    const yObjects = yDoc.getMap('objects');

    yObjects.observeDeep(event => {
      if (window.canvas) {
        const diff = jsonpatch.compare(window.canvas.toJSON().objects, yObjects.toJSON(['key']));
        console.log('diff:', diff)
        //const updatedDocument = diff.reduce(jsonpatch.applyReducer, document);
      }

      window.canvas &&
        window.canvas.loadFromJSON(
          {objects: Object.values(yObjects.toJSON(['key'])), version: "4.5.0", background: "white"},
          window.canvas.renderAll.bind(window.canvas),
          function (o, object) {
            console.log('Yjs update-- rendering to canvas');
          }
        );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Adds a somewhat unremarkable rectangle to the fabric canvas
  const add = canvi => {
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
      ry: 10,
      rx: 10,
    });
    rect.toObject = (function (toObject) {
      return function () {
        return fabric.util.object.extend(toObject.call(this), {
          key: this.key,
        });
      };
    })(rect.toObject);
    rect.key = id62();

    canvi.add(rect);
    canvi.setActiveObject(rect);
    canvi.renderAll();
    //console.log('rect:', rect.toObject())
  };

  return (
    <>
      <HeaderNav add={add} />
      <Main className="App-main">
        <Loader wsProvider={ wsProvider} />
        <Canvas />
      </Main>
    </>
  );
}

export default App;
