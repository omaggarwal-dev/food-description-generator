import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#111827",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      {/* Logo */}
      <h2
        style={{
          color: "white",
          margin: 0,
          fontSize: "20px",
        }}
      >
        AI Product Writer
      </h2>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          About
        </Link>

        <Link
          to="/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;