function FeatureCard({ title, description }) {
  return (
    <div
      style={{
        width: "280px",
        padding: "25px",
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        textAlign: "center",
        transition: "0.3s",
        cursor: "pointer",
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          marginBottom: "12px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#555",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;