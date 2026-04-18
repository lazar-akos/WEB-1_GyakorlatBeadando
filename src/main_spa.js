import SpaApp from './SpaApp.js';

const root = ReactDOM.createRoot(document.getElementById('spa-root'));
root.render(
  React.createElement(React.StrictMode, null, 
    React.createElement(SpaApp)
  )
);