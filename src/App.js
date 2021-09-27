import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';

const App = () => {

    return (
        <HashRouter>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" exact={true} component={About} />
          <Route path="/movie/:id" exact={true} component={Detail} />
        </HashRouter>
    )
}

export default App;
