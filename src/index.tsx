import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
)
