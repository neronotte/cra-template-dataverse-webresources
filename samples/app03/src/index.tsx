import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function render() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const w = window as any;
w.setClientApiContext = function(xrm : Xrm.XrmStatic, formContext : Xrm.FormContext) {
  w.Xrm = xrm;
  w._formContext = formContext;
  render();
}

if (process.env.NODE_ENV === 'development') {
  render();
}