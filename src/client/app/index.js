
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Layout extends Component{
    render(){
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <App />
            </Provider>
        )
    }
}

ReactDOM.render(<Layout />, document.getElementById('app'));
