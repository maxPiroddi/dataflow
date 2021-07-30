import React, { FunctionComponent } from 'react';
import { Editor as DataflowEditor } from 'react-dataflow-editor';

import { EditorProps } from 'types';

import { KindsSchema, withState } from './HOC/withState';

const Editor: FunctionComponent<EditorProps<KindsSchema>> = ({
  kinds,
  state,
  dispatch,
}) => <DataflowEditor kinds={kinds} state={state} dispatch={dispatch} />;

export default withState(Editor);
