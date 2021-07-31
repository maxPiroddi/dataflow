import React, { FunctionComponent, useReducer } from 'react';
import {
  Editor as DataflowEditor,
  EditorState as DataflowEditorState,
} from 'react-dataflow-editor';

import { GetSchema } from 'types';
import { nodeKinds, initialState, reducer } from 'service/state';

type S = GetSchema<typeof nodeKinds>;

const Editor: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataflowEditor
      kinds={nodeKinds}
      state={state as DataflowEditorState<S>}
      dispatch={dispatch}
    />
  );
};

export default Editor;
