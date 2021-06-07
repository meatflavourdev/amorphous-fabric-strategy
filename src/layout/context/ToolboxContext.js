import React from 'react';

const ToolboxContext = React.createContext({ currentTool: 'arrow' });

function toolboxReducer(state, action) {
  const toolbox = {
    SELECT_ARROW: () => {
      return {currentTool: 'arrow'}
    },
    SELECT_PENCIL: () => {
      return {currentTool: 'pencil'}
    },
    SELECT_SHAPE: () => {
      return {currentTool: 'shape'}
    },
    SELECT_TEXT: () => {
      return {currentTool: 'text'}
    },
    default: () => {
      throw new Error(`Unsupported action type: ${action.type}`)
    },
  }
  return toolbox[action.type]();
}

function ToolboxProvider(props) {
  const [state, dispatch] = React.useReducer(toolboxReducer, {count: 0})
  const value = React.useMemo(() => [state, dispatch], [state])
  return <ToolboxContext.Provider value={value} {...props} />
}

function useToolbox() {
  const context = React.useContext(ToolboxContext)
  if (!context) {
    throw new Error(`useToolbox must be used within a ToolboxProvider`)
  }
  const [state, dispatch] = context
  const increment = () => dispatch({type: 'INCREMENT'})
  return {
    state,
    dispatch,
    increment,
  }
}

export { ToolboxProvider, useToolbox };
