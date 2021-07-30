import { Schema, Source, Target } from '../types';

export type EditorAction<S extends Schema> =
  | CreateNodeAction<S>
  | DeleteNodeAction
  | MoveNodeAction
  | CreateEdgeAction<S>
  | DeleteEdgeAction
  | MoveEdgeAction<S>;

export type CreateNodeAction<S extends Schema> = {
  id: string;
  type: 'node/create';
  kind: keyof S;
  position: { x: number; y: number };
};

export type DeleteNodeAction = {
  id: string;
  type: 'node/delete';
};

export type MoveNodeAction = {
  id: string;
  type: 'node/move';
  position: { x: number; y: number };
};

export type CreateEdgeAction<S extends Schema> = {
  id: string;
  type: 'edge/create';
  source: Source<S>;
  target: Target<S>;
};

export type DeleteEdgeAction = {
  id: string;
  type: 'edge/delete';
};

export type MoveEdgeAction<S extends Schema> = {
  id: string;
  type: 'edge/move';
  target: Target<S>;
};
