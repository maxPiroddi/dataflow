// Global generic parameter constraint
type Schema = Record<string, { inputs: string; outputs: string }>;

// Accessor utility types
type GetInputs<S extends Schema, K extends keyof S> = S[K]['inputs'];
type GetOutputs<S extends Schema, K extends keyof S> = S[K]['outputs'];

// Turn a concrete Kinds<S> back into Schema
// We will use for storage of the editor state
// so we can retrieve a schema from a config object
export type GetSchema<T extends Kinds<Schema>> = {
  [k in keyof T]: T[k] extends Kind<infer I, infer O>
    ? { inputs: I; outputs: O }
    : never;
};

// Values necessary for each node kind
type Kind<I extends string, O extends string> = Readonly<{
  title: string;
  inputs: Record<I, null>;
  outputs: Record<O, null>;
}>;

// Configuration property, that will drive inference of S
type Kinds<S extends Schema> = {
  readonly [K in keyof Schema]: Kind<GetInputs<S, K>, GetOutputs<S, K>>;
};

type NodeId = string;
type EdgeId = string;

// Each node knows what properties its input & output obj have
type Node<S extends Schema, K extends keyof S = keyof S> = {
  [k in K]: {
    kind: k;
    position: { x: number; y: number };
    inputs: Record<GetInputs<S, k>, string | null>;
    outputs: Record<GetOutputs<S, k>, string[]>;
  };
}[K];

type Source<S extends Schema, K extends keyof S = keyof S> = {
  id: NodeId;
  output: GetOutputs<S, K>;
};

type Target<S extends Schema, K extends keyof S = keyof S> = {
  id: NodeId;
  input: GetInputs<S, K>;
};

// Edges don't store the kinds of their sources or targets
// so we don't need to re-index them as we do for nodes
type Edge<
  S extends Schema,
  SK extends keyof S = keyof S,
  TK extends keyof S = keyof S,
> = {
  source: Source<S, SK>;
  target: Target<S, TK>;
};

interface EditorState<S extends Schema> {
  nodes: Record<NodeId, Node<S>>;
  edges: Record<EdgeId, Edge<S>>;
}

export interface EditorProps<S extends Schema> {
  kinds: Kinds<S>; // static & immutable
  state: EditorState<S>; // dynamic & mutable
}
