import React, { FunctionComponent } from 'react';
import {
  Editor as DataflowEditor,
  EditorState as DataflowEditorState,
} from 'react-dataflow-editor';

import { EditorProps, KindSchema } from 'types';

import { withState } from '../../withState';

const Editor: FunctionComponent<EditorProps<KindSchema>> = ({
  kinds,
  state,
  dispatch,
}) => (
  <DataflowEditor
    kinds={kinds}
    state={state as DataflowEditorState<KindSchema>}
    dispatch={dispatch}
  />
);

export default withState(Editor);
