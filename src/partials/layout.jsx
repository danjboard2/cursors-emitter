import React from 'react';
import Head from './head'; // Assuming you have a separate HeadComponent
import Header from './header'; // Assuming you have a separate Header component

const SetContainerCursor = ({ number }) => {
  return (
    <section className="cursor-container" id={`cursor-${number}`}>
      {/* Your content here */}
    </section>
  );
};

const App = () => {
  const cursors = ["Waves"];

  return (
    <html lang="en">
      <Head />

      <body>
        <div id="swup">
          <Header nameCursor="Cursor Name" cursors={cursors} />
          
          <main role="main">
            {/* Your main content here */}
            <SetContainerCursor number={1} />
          </main>
        </div>

        <script type="module" src="index.js"></script>
      </body>
    </html>
  );
};

export default App;