function Card({ title, description }) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "30px",
        borderRadius: "20px",
        width: "300px",
        margin: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        textAlign: "center",
        transition: "0.3s",
        cursor: "pointer",
      }}
    >
      <h3
        style={{
          color: "#2563eb",
          fontSize: "1.8rem",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#555",
          fontSize: "1rem",
          lineHeight: "1.8",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default Card;