import React, { FunctionComponent } from 'react';
import {
  Editor as DataflowEditor,
  EditorState as DataflowEditorState,
} from 'react-dataflow-editor';
import { nodeKinds } from 'service/state';
import { EditorProps, GetSchema } from 'types';
import { withState } from './withState';

type S = GetSchema<typeof nodeKinds>;

const Editor: FunctionComponent<EditorProps<S>> = ({
  kinds,
  state,
  dispatch,
}) => (
  <DataflowEditor
    kinds={kinds}
    state={state as DataflowEditorState<S>}
    dispatch={dispatch}
  />
);

export default withState(Editor);
