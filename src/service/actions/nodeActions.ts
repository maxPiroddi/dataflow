import { nanoid } from 'nanoid';

import {
  Schema,
  CreateNodeAction,
  NodeID,
  Position,
  DeleteNodeAction,
  MoveNodeAction,
} from 'types';

const createNode = <S extends Schema>(
  kind: keyof S,
  position: Position,
): CreateNodeAction<S> => ({
  type: 'node/create',
  id: nanoid(10),
  kind,
  position,
});

const deleteNode = (id: NodeID): DeleteNodeAction => ({
  id,
  type: 'node/delete',
});

const moveNode = (id: NodeID, position: Position): MoveNodeAction => ({
  id,
  type: 'node/move',
  position,
});

export { createNode, deleteNode, moveNode };
