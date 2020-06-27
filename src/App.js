import React from 'react';
import EmailTo from './EmailTo';

function App() {
  return (
    <div>
      <form method='GET'>
        <EmailTo />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
