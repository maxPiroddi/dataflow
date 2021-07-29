# Dataflow Editor

## Technical Overview

### State

#### Rules of the editor state

- Nodes have a fixed set of input and output ports
- Edges connect output to input ports
- An input port can be the target of at most one incoming edge
- An output port can be the source of many outgoing edges
