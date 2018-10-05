import React, { Component } from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import Router from './Router'


class App extends Component{
    componentWillMount(){
        var config = {
            apiKey: "AIzaSyA0ZfJdVgzNPjIyIOoFrwlhw3dIl4ZbPb0",
            authDomain: "manager-3929d.firebaseapp.com",
            databaseURL: "https://manager-3929d.firebaseio.com",
            projectId: "manager-3929d",
            storageBucket: "manager-3929d.appspot.com",
            messagingSenderId: "682563761190"
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App