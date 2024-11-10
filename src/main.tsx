import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import React from "https://esm.sh/v128/@types/react@18.2.38/index.d.ts";

createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);
