// eslint-disable-next-line import/no-cycle
import { NodeID, EdgeID, Schema, Source, Target, Position, Focus } from 'types';

export type EditorAction<S extends Schema> =
  | CreateNodeAction<S>
  | DeleteNodeAction
  | MoveNodeAction
  | CreateEdgeAction<S>
  | DeleteEdgeAction
  | MoveEdgeAction<S>
  | FocusAction;

export type CreateNodeAction<S extends Schema> = {
  id: NodeID;
  type: 'node/create';
  kind: keyof S;
  position: Position;
};

export type DeleteNodeAction = {
  id: NodeID;
  type: 'node/delete';
};

export type MoveNodeAction = {
  id: NodeID;
  type: 'node/move';
  position: Position;
};

export type CreateEdgeAction<S extends Schema> = {
  id: EdgeID;
  type: 'edge/create';
  source: Source<S>;
  target: Target<S>;
};

export type DeleteEdgeAction = {
  id: EdgeID;
  type: 'edge/delete';
};

export type MoveEdgeAction<S extends Schema> = {
  id: EdgeID;
  type: 'edge/move';
  target: Target<S>;
};

export type FocusAction = {
  type: 'focus';
  subject: Focus | null;
};
