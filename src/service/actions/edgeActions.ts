import { nanoid } from 'nanoid';

import {
  CreateEdgeAction,
  Schema,
  Source,
  Target,
  DeleteEdgeAction,
  MoveEdgeAction,
} from 'types';

const createEdge = <S extends Schema>(
  source: Source<S>,
  target: Target<S>,
): CreateEdgeAction<S> => ({
  id: nanoid(10),
  type: 'edge/create',
  source,
  target,
});

const deleteEdge = (id: string): DeleteEdgeAction => ({
  id,
  type: 'edge/delete',
});

const moveEdge = <S extends Schema>(
  id: string,
  target: Target<S>,
): MoveEdgeAction<S> => ({
  id,
  type: 'edge/move',
  target,
});

export { createEdge, deleteEdge, moveEdge };
