import React from 'react';

const HeadComponent = () => {
  const title = "Cursor";

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <meta name="description" content={title} />
      <link rel="icon" type="image/png" href="images/favicon.png" />
      <link type="text/css" rel="stylesheet" href="styles/_styles.scss" />
      <title>{title}</title>
    </>
  );
};

export default HeadComponent;