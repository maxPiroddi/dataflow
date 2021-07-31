import { EditorAction, EditorState, GetSchema } from 'types';

import { nodeKinds } from './nodeKinds';

type S = GetSchema<typeof nodeKinds>;

export const reducer = (state: EditorState<S>, action: EditorAction<S>) => {
  console.log(action);
  switch (action.type) {
    case 'node/create':
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
