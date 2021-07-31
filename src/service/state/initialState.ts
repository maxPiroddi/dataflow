import { EditorState, GetSchema } from 'types';

import { nodeKinds } from './nodeKinds';

type S = GetSchema<typeof nodeKinds>;

export const initialState: EditorState<S> = {
  nodes: {},
  edges: {},
  focus: null,
};
