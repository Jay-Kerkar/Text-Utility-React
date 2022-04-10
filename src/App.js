import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Utility from './components/Utility';
import Alert from './components/Alert';
// import Contact from './components/Contact';

function App() {
  const [mode, switchMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const configAlert = (alertMessage, type) => {
    setAlert({
      alertMessage: alertMessage,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      switchMode('dark');
      document.body.style.backgroundColor = '#070f47';
      configAlert("Dark Mode Has Been Enabled", "success");
    } else {
      switchMode('light');
      document.body.style.backgroundColor = 'White';
      configAlert("Dark Mode Has Been Disabled", "success");
    }
  }

  return (
    <>
      <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Utility title="Enter The Text Below To Manipulate" mode={mode} configAlert={configAlert} />
      {/* <Contact /> */}
    </>
  );
}

export default App;