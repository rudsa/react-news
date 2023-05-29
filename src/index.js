import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
