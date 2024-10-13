import React from 'react';
import ChatComponent from './components/ChatComponent';
import ErrorBoundary from './utils/ErrorBoundary';
function App() {
  return (
    <div className="App">
      {/* Wrap the part of the app you want to protect with ErrorBoundary */}
      <ErrorBoundary>
        <ChatComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;