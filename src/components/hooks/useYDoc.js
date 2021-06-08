//import React, {useRef} from 'react';
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
//import { IndexeddbPersistence } from 'y-indexeddb'

export default function useYDoc() {
  // Setup reference to a new yDoc so that mutable link to the current yDoc is persistent
  const yDoc = new Y.Doc();

  // this allows you to instantly get the (cached) documents data
/*   const indexeddbProvider = new IndexeddbPersistence('YFabric',  yDoc.current);
  indexeddbProvider.whenSynced.then(() => {
    console.log('loaded data from indexed db');
  }); */

  const webrtcProvider = new WebrtcProvider('YFabric',  yDoc.current);

  // Sync clients with the y-websocket provider
  const wsProvider = new WebsocketProvider('ws://localhost:5000', 'default-04', yDoc);

  wsProvider.on('connect', () => console.log('Websocket connected'));

  //
/*   useEffect(() => {

  }, []) */

  return { yDoc, wsProvider };
}
