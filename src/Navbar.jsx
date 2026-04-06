const Navbar = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        
        <div style={styles.logo}>
          PG
        </div>

        <nav style={styles.nav}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button style={styles.button}>
          Resume
        </button>

      </div>
    </header>
  );
};

const styles = {
  header: {
    position: "sticky",
    top: 0,
    background: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    zIndex: 1000
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "18px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  logo: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#7c3aed"
  },

  nav: {
    display: "flex",
    gap: "30px",
    fontWeight: "500"
  },

  button: {
    background: "#7c3aed",
    color: "white",
    padding: "8px 18px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer"
  }
};

export default Navbar;