import React, { FunctionComponent, useReducer } from 'react';
import {
  Editor as DataflowEditor,
  EditorState as DataflowEditorState,
} from 'react-dataflow-editor';

import { GetSchema } from 'types';
import { flowKinds, initialState, reducer } from 'service/state';

type S = GetSchema<typeof flowKinds>;

const Editor: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataflowEditor
      kinds={flowKinds}
      state={state as DataflowEditorState<S>}
      dispatch={dispatch}
    />
  );
};

export default Editor;
