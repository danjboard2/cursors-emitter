import React from 'react';
import SetContainerCursor from '../src/partials/layout'; // Assuming you have this component

const CombinedComponent = () => {
  const cursors = ["Waves"];
  const nameCursor = cursors[0];

  return (
    <div>
      {/* Your layout content here */}
      
      {/* Your additional variables and content here */}
      <SetContainerCursor number={1} />
    </div>
  );
};

export default CombinedComponent;