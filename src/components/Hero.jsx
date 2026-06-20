function Hero() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
        background:
          "linear-gradient(135deg, #2563eb, #7c3aed)",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 4rem)",
          marginBottom: "20px",
          fontWeight: "700",
        }}
      >
        AI Product Description Generator
      </h1>

      <p
        style={{
          fontSize: "clamp(1rem, 3vw, 1.3rem)",
          maxWidth: "700px",
          margin: "0 auto 30px",
        }}
      >
        Generate SEO-optimized product descriptions, marketing copy,
        social media captions and keywords instantly using Artificial
        Intelligence.
      </p>

      <button
        style={{
          padding: "15px 35px",
          fontSize: "18px",
          border: "none",
          borderRadius: "10px",
          background: "white",
          color: "#2563eb",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Generate Product Description
      </button>
    </section>
  );
}

export default Hero;