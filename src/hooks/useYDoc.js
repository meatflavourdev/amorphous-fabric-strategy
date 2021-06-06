import { useState, useRef, useEffect } from 'react';
import * as Y from 'yjs'
//import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
//import { IndexeddbPersistence } from 'y-indexeddb'

export default function useYDoc() {
  const [yDocLoading, setyDocLoading] = useState(true);

  // Setup reference to a new yDoc so that mutable link to the current yDoc is persistent
  const yDoc = useRef();
  yDoc.current = new Y.Doc();

  // this allows you to instantly get the (cached) documents data
/*   const indexeddbProvider = new IndexeddbPersistence('YFabric',  yDoc.current);
  indexeddbProvider.whenSynced.then(() => {
    console.log('loaded data from indexed db');
  }); */

  //const webrtcProvider = new WebrtcProvider('YFabric',  yDoc.current);

  // Sync clients with the y-websocket provider
  const websocketProvider = new WebsocketProvider('ws://localhost:5000', 'YFabric', yDoc.current);

  websocketProvider.on('connect', () => setyDocLoading(false));

  //
  useEffect(() => {

  }, [])

  return {yDoc, yDocLoading};
}
