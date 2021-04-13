import React from 'react';
import './App.scss';
import SassContent from './components/sass/SassContent';
import ModuleContent from "./components/module/ModuleContent";

function App() {
  return (
    <div className="App">
      <SassContent />
      <ModuleContent />
    </div>
  );
}

export default App;
