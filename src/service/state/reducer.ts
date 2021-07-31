import { EditorAction, EditorState, GetSchema } from 'types';

import { flowKinds } from './flowKinds';

type S = GetSchema<typeof flowKinds>;

export const reducer = (state: EditorState<S>, action: EditorAction<S>) => {
  console.log(action);
  return { ...state };
};
