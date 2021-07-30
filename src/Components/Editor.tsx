import React, { FunctionComponent, useCallback, useState } from 'react';
import {
  Editor as DataflowEditor,
  EditorAction,
  EditorState,
} from 'react-dataflow-editor';

import { GetSchema, Kinds, Schema } from 'types';

declare function reduce<S extends Schema>(
  kinds: Kinds<S>,
  state: EditorState<S>,
  action: EditorAction<S>,
): EditorState<S>;

const kinds = {
  add: {
    inputs: { a: null, b: null },
    outputs: { sum: null },
    backgroundColor: 'lavender',
    name: 'Addition',
  },
  div: {
    inputs: { dividend: null, divisor: null },
    outputs: { quotient: null, remainder: null },
    backgroundColor: 'darksalmon',
    name: 'Division',
  },
};

type S = GetSchema<typeof kinds>;

const Editor: FunctionComponent = () => {
  const [state, setState] = useState<EditorState<S>>({
    nodes: {},
    edges: {},
    focus: null,
  });

  const dispatch = useCallback(
    (action: EditorAction<S>) => {
      setState(reduce(kinds, state, action));
    },
    [state],
  );

  return <DataflowEditor kinds={kinds} state={state} dispatch={dispatch} />;
};
export default Editor;
