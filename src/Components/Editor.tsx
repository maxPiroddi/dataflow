import React, { FunctionComponent, useReducer } from 'react';
import {
  Editor as DataflowEditor,
  EditorState as DataflowEditorState,
} from 'react-dataflow-editor';
import { EditorAction } from 'service/actions/types';
import { flowKinds } from 'service/state/flowKinds';
import { EditorState, GetSchema } from 'types';

type S = GetSchema<typeof flowKinds>;

const initialState: EditorState<S> = {
  nodes: {},
  edges: {},
  focus: null,
};

const reducer = (state: EditorState<S>, action: EditorAction<S>) => {
  console.log(action);
  return { ...state };
};

const Editor: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataflowEditor
      kinds={flowKinds}
      state={state as DataflowEditorState<S>}
      dispatch={dispatch as (action: EditorAction<S>) => void}
    />
  );
};

export default Editor;
