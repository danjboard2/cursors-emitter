const Header = ({ nameCursor, cursors }) => {
  return (
    <header role="banner">
      <h1>{nameCursor}</h1>
      <nav role="navigation">
        <ul>
          {cursors.map((cursor, key) => (
            <li key={key}>
              <a href={`index${key === 0 ? "" : key + 1}.js`}>
                <span>{`demo ${key + 1}`}</span>
                <i>{` (${cursor})`}</i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;