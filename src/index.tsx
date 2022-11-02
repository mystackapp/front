import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// @ts-ignore
import { App } from '@app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
