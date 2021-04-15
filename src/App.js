import React from 'react';
import './App.scss';
import SassContent from './components/sass/SassContent';
import ModuleContent from './components/module/ModuleContent';
import SCContent from './components/sc/SCContent';

function App() {
  return (
    <div className="App">
      <SassContent />
      <ModuleContent />
      <SCContent />
    </div>
  );
}

export default App;
