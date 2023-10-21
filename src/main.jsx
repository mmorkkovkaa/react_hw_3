import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import { legacy_createStore as createStore } from 'redux'


const initialState = {
    name: '',
    age: 0,
    gender: ''
}

const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'UPDATE_USER':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

const store = createStore(userReducer);



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
  </BrowserRouter>,
)
