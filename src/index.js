import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import { Router, Route } from 'react-router';
import { createBrowserHistory  } from 'history';

import Main from './modules/Main';

const history = createBrowserHistory();

render((
    <Provider store={store}>
        <Router history={history }>
            <Route path="/" component={Main}/>
        </Router>
    </Provider>
), document.getElementById('root'));
