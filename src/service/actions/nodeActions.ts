import { nanoid } from 'nanoid';

import { Schema, CreateNodeAction } from 'types';
import { DeleteNodeAction, MoveNodeAction } from './types';

const createNode = <S extends Schema>(
  kind: keyof S,
  position: { x: number; y: number },
): CreateNodeAction<S> => ({
  type: 'node/create',
  id: nanoid(10),
  kind,
  position,
});

const deleteNode = (id: string): DeleteNodeAction => ({
  id,
  type: 'node/delete',
});

const moveNode = (
  id: string,
  position: { x: number; y: number },
): MoveNodeAction => ({
  id,
  type: 'node/move',
  position,
});

export { createNode, deleteNode, moveNode };
