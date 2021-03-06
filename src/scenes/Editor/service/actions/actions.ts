import { Focus, FocusAction } from 'types';

import { createNode, deleteNode, moveNode } from './nodeActions';
import { createEdge, deleteEdge, moveEdge } from './edgeActions';

const focus = (subject: Focus | null): FocusAction => ({
  type: 'focus',
  subject,
});

export {
  createNode,
  deleteNode,
  moveNode,
  createEdge,
  deleteEdge,
  moveEdge,
  focus,
};
