import '../styles/Header.css';

const styles = {
    headerStyle: {
      background: 'blue',
    },
    headingStyle: {
      fontSize: '100px',
    },
  };
  
  // We use JSX curly braces to evaluate the style object
  
  function Header() {
    return (
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Welcome</h1>
      </header>
    );
  }
  
  export default Header;
  