import { nanoid } from 'nanoid';

import {
  CreateEdgeAction,
  Schema,
  Source,
  Target,
  DeleteEdgeAction,
  MoveEdgeAction,
  EdgeID,
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

const deleteEdge = (id: EdgeID): DeleteEdgeAction => ({
  id,
  type: 'edge/delete',
});

const moveEdge = <S extends Schema>(
  id: EdgeID,
  target: Target<S>,
): MoveEdgeAction<S> => ({
  id,
  type: 'edge/move',
  target,
});

export { createEdge, deleteEdge, moveEdge };
