// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { IconStyle } from './assets/iconfont/iconfont'
import { GlobalStyle } from './style';
import { renderRoutes } from 'react-router-config';
import store from './store';
import routes from './routes';
import { HashRouter } from 'react-router-dom';

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="App">
                    <GlobalStyle></GlobalStyle>
                    <IconStyle></IconStyle>
                    { renderRoutes(routes) }
                </div>
            </HashRouter>
        </Provider>
    );
}

export default App;