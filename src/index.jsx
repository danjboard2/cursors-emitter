import React from 'react';
import ReactDOM from 'react-dom';
import SetContainerCursor from '../src/partials/layout'; // Assuming you have this component

const App = () => {
  const cursors = ["Waves"];
  const nameCursor = cursors[0];


  ReactDOM.render(
    <React.StrictMode>
      {/* You can choose which component to render here, or conditionally render based on some logic */}
      <SetContainerCursor number={1} />
      {/* or <SomeComponent /> */}
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default App;