import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// Hype Content - Main Entry Point
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
