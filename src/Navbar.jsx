const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>PG</div>

      <ul style={styles.menu}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button style={styles.button}>Resume</button>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    position: "sticky",
    top: 0,
    background: "white",
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#8b5cf6"
  },
  menu: {
    display: "flex",
    gap: "30px",
    listStyle: "none"
  },
  button: {
    background: "#8b5cf6",
    color: "white",
    border: "none",
    padding: "8px 18px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Navbar;