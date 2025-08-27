import React, { Suspense } from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* This is the correct place for Suspense */}
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </React.StrictMode>
);


