import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const El = document.getElementById('root');
const root = ReactDOM.createRoot(El);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
