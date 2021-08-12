import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from 'scenes/Home/Home';
import { Editor } from 'scenes/Editor/Components';

const App = () => (
  <BrowserRouter>
    <h1>Dataflow Editor</h1>
    <Route exact path="/editor">
      <Editor />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </BrowserRouter>
);

export default App;
