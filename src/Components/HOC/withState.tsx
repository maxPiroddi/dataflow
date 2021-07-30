import React, { FunctionComponent, useReducer } from 'react';
import { EditorProps, EditorState, GetSchema } from 'service/types';

// declare function reduce<S extends Schema>(
//     kinds: Kinds<S>,
//     state: EditorState<S>,
//     action: EditorAction<S>,
//   ): EditorState<S>;

// const [state, setState] = useState<EditorState<S>>({
//     nodes: {},
//     edges: {},
//     focus: null,
//   });

//   const dispatch = useCallback(
//     (action: EditorAction<S>) => {
//       setState(reduce(kinds, state, action));
//     },
//     [state],
//   );

export const acceptedKinds = {
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

export type KindsSchema = GetSchema<typeof acceptedKinds>;

const initialState: EditorState<KindsSchema> = {
  nodes: {},
  edges: {},
  focus: null,
};

const reducer = (state: EditorState<KindsSchema>) => ({ ...state });

export const withState =
  (Component: FunctionComponent<EditorProps<KindsSchema>>): FunctionComponent =>
  () => {
    console.log('HOC Running');
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <Component kinds={acceptedKinds} state={state} dispatch={dispatch} />
    );
  };
