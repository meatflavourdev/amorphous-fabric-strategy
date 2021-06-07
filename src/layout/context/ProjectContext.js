import React, { createContext, useContext } from "react";
import { useImmer } from "use-immer";

export const ProjectContext = createContext();

export default function ProjectProvider({ children }) {

  //
  const [project, updateProject] = useImmer({
    meta: {
      name: 'default',
    },
    yDoc: null,
    providers: {
      websocket: null,
      webrtc: null,
      indexedDB: null,
    },
    canvas: {
      version: null,
      objects: [],
      background: null,
    },
  });

  return (
    <ProjectContext.Provider value={{ project, updateProject }}>
      {children}
    </ProjectContext.Provider>
  );

}

// Convenience hook for project context
export function useProject(yDoc, wsProvider) {
  const context = useContext( ProjectContext );
  if (!context) {
    throw new Error(`useProject must be used within a ProjectProvider`)
  }
  const { project, updateProject } = context;

  function updateCanvas(canvas) {
    updateProject(draft => {
      draft.canvas = canvas;
    });
  }

  // Setup reference to a new yDoc so that mutable link to the current yDoc is persistent
  function updateYjs(yDoc, wsProvider) {
    updateProject(draft => {
      draft.yDoc = yDoc;
      draft.providers.websocket = wsProvider;
    });
  }

  React.useEffect(() => {
    updateYjs(yDoc, wsProvider);
  }, []);

  React.useEffect(() => {
    console.log('project:', project)
  }, [project]);

/*   function loadYDoc(name) {
    updateProject(draft => {
      draft.project.name = name;

    });
  } */

  return { project, updateCanvas };
}
