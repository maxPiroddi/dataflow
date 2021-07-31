import React, { FunctionComponent, useReducer } from 'react';

import { nodeKinds } from 'service/state';
import {
  EditorAction,
  EditorProps,
  EditorState,
  GetInputs,
  GetOutputs,
  GetSchema,
  Kinds,
} from 'types';

type S = GetSchema<typeof nodeKinds>;

export const initialState: EditorState<S> = {
  nodes: {},
  edges: {},
  focus: null,
};

export const reducer = (
  state: EditorState<S>,
  action: EditorAction<S>,
): EditorState<S> => {
  const kinds: Kinds<S> = nodeKinds;
  switch (action.type) {
    case 'node/create': {
      const { id, kind, position } = action;
      const nodes = { ...state.nodes };
      nodes[id] = {
        id,
        kind,
        position,
        inputs: Object.fromEntries(
          Object.keys(kinds[kind].inputs).map((input) => [input, null]),
        ) as Record<GetInputs<S>, null | string>,
        outputs: Object.fromEntries(
          Object.keys(kinds[kind].outputs).map<[GetOutputs<S>, string[]]>(
            // NOTE - todo: clean up this output type mess
            (output) => [output as 'sum' | 'result', []],
          ),
        ) as Record<GetOutputs<S>, string[]>,
      };
      return { ...state, nodes, focus: { element: 'node', id } };
    }
    case 'node/delete':
    case 'node/move':
    case 'edge/create':
    case 'edge/delete':
    case 'edge/move':
    case 'focus':
    default:
      return { ...state };
  }
};

export const withState =
  (Component: FunctionComponent<EditorProps<S>>): FunctionComponent =>
  () => {
    console.log('Higher powers exist');
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Component kinds={nodeKinds} state={state} dispatch={dispatch} />;
  };
