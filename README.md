# Dataflow Editor

The purpose of this application is to allow users to create and retrieve dataflow editors.

It is [Create React App](https://github.com/facebook/create-react-app) project, using an implementation of [joeltg's React datflow editor](https://github.com/joeltg/react-dataflow-editor),
with a strict typing system outlined in [their blog post](https://research.protocol.ai/blog/2021/designing-a-dataflow-editor-with-typescript-and-react/), as well as AWS services to host user information and editors in the cloud.

---

### Helpful Links:

Project:

- [This repository](https://github.com/maxPiroddi/dataflow)

Deployments:

- [N/A]()

Tooling used by this project:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Eslint](https://eslint.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [NanoId](https://github.com/ai/nanoid)

---

## Getting Started

To install all required dependencies, run:

```
$ npm install
```

## Available Scripts

​
In the project directory, you can run the follow via `npm run`:
​

```
  start
    # Runs the app in the development mode
  build
    # Produce a compiled & deployable application
  format
    # Auto-format the code with prettier
  lint
    # Linting the code to match (some) project conventions and avoid errors
  lint:fix
    # Futomatically fix lint errors as much as possible
  test
    # Running unit tests and report test coverage
```

---

## Application Structure

The structure of this repository follows the principles laid out in [this article](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1).
​
The main principles are:
​

- There are components (React), services (non-react) and scenes (mega
  components, e.g. a full page).
- A component can define nested components or services. It cannot use or
  define scenes.
- A scene can define nested components, scenes or services.
- A service can define nested services. It cannot use or define components or
  scenes.
- Code is allowed to include code nested inside it, or from the very top
  level of the application. It may not include code that is a cousin or a
  grandparent.
  ​
  That last rule is the most important one, as it can sometimes be violated in
  the course of development. This means you need to move the code to the appropriate place.
  ​
  This style means it is very easy to reason about what code is used where, and
  what the boundaries of each component are. It should also increase
  findability within the code.
  ​
  The practical result means that your imports should either start with `./`
  or be a very top level import with at most one slash (eg `services/foo`).
  ​
  This rule is not currently enforced with linting, so you will need to
  manually eyeball dependencies. Be careful with auto-importing - you may need
  to adjust your editor's settings to avoid fully qualified imports.

### Types

​
It is hard to maintain types when using the structure suggested above. Types
in this project follow the following convention:
​

- Unless a type is only local to a file, export it from `./types.ts` at the
  position in the codebase that makes the most sense for that type (eg, where
  the core functionality that supports the type is defined)
- Types files may import from any other `types.ts` anywhere in the code
  _except_ for the root level `src/types.ts`
- Types files should not define any behaviour, and may not import any files
  that aren't `types.ts`.
- All types that need to be imported by other code are re-exported by the
  root level `src/types.ts`.
  ​
  This means components and services can import any types they need either
  locally or from `'types'`.

---

## Technical Overview

### State

#### Rules of the editor state

- Nodes have a fixed set of input and output ports
- Edges connect output to input ports
- An input port can be the target of at most one incoming edge
- An output port can be the source of many outgoing edges
