import { EditorState, GetSchema } from 'types';

import { flowKinds } from './flowKinds';

type S = GetSchema<typeof flowKinds>;

export const initialState: EditorState<S> = {
  nodes: {},
  edges: {},
  focus: null,
};
