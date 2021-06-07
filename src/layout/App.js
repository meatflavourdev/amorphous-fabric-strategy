import React from 'react';
import { Main } from 'grommet';
import { fabric } from 'fabric';
import HeaderNav from './navheader/NavHeader';
import './App.css';
import Loader from './loader/Loader';
import Canvas from '../components/fabric/Canvas';
import useYDoc from '../components/hooks/useYDoc';

// Fabric lives in the global window object
//const fabric = window.fabric

function App() {
  // Setup reference to a new yDoc so that mutable link to the current yDoc is persistent
  const { yDoc, yDocLoading } = useYDoc();

  // Get YMap which replicates the fabric data model
/*   React.useEffect(() => {
    console.log('yDoc:', yDoc);
    const yCanvas = yDoc.current.getMap('yCanvas');

    yCanvas.observeDeep((event) => {
      window.canvas && window.canvas.loadFromJSON({
        "json": "goes here",
      }, window.canvas.renderAll.bind(window.canvas), function (o, object) {
        // `o` = json object
        // `object` = fabric.Object instance
        // ... do some stuff ...
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

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
      ry: 10,
      rx: 10,
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
    //console.log('rect:', rect.toObject())
  };

  return (
    <>
      <HeaderNav add={add} />
      <Main className="App-main">
        <Loader loading={yDocLoading} />
        <Canvas loading={yDocLoading} />
      </Main>
    </>
  );
}

export default App;
