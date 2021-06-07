import React, { createContext, useContext, useState } from "react";
import { useImmer } from "use-immer";

export const DocumentContext = createContext();

export default function DocumentProvider({ children }) {

  //
  const [document, updateDocument] = useImmer({
    canvas: {
      objects: [],
    },
    yDoc: null,
  });

  function updateCanvas(canvas) {
    updateDocument(draft => {
      draft.canvas = canvas;
    });
  }

  function updateCanvasObjects(objects) {
    updateDocument(draft => {
      draft.canvas.objects = objects;
    });
  }

  function setYDoc(yDoc) {
    updateDocument(draft => {
      draft.yDoc = yDoc;
    });
  }

  return (
    <DocumentContext.Provider value={{ document, updateCanvas, updateCanvasObjects, setYDoc }}>
      {children}
    </DocumentContext.Provider>
  );

}

// Convenience hook for document context
export function useDocument() {
  const context = useContext( DocumentContext );
  if (!context) {
    throw new Error(`useDocument must be used within a DocumentProvider`)
  }
  const { document, updateCanvas, updateCanvasObjects, setYDoc } = context;
  return { document, updateCanvas, updateCanvasObjects, setYDoc };
}
