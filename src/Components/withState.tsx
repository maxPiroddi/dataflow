import React, { useCallback, FunctionComponent, useState } from 'react';
import {
  reduce,
  EditorState as DataflowEditorState,
} from 'react-dataflow-editor';

import { EditorAction, EditorProps, EditorState, KindSchema } from 'types';
import { nodeKinds } from 'service/state';

export const initialState: EditorState<KindSchema> = {
  nodes: {},
  edges: {},
  focus: null,
};

export const withState =
  (Component: FunctionComponent<EditorProps<KindSchema>>): FunctionComponent =>
  () => {
    const [state, setState] = useState<EditorState<KindSchema>>(initialState);

    const dispatch = useCallback(
      (action: EditorAction<KindSchema>) => {
        setState(
          reduce(nodeKinds, state as DataflowEditorState<KindSchema>, action),
        );
      },
      [state],
    );

    return <Component kinds={nodeKinds} state={state} dispatch={dispatch} />;
  };
