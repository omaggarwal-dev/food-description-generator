import { useState } from "react";

function Generator() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [tone, setTone] = useState("");

  const [description, setDescription] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [keywords, setKeywords] = useState("");
  const [caption, setCaption] = useState("");

  const generateDescription = () => {
    if (!productName || !category || !tone) {
      alert("Please fill all fields");
      return;
    }

    const generatedText = `Introducing ${productName}, a premium ${category} product designed to deliver exceptional performance and value. Crafted with quality and innovation, this product is perfect for customers seeking reliability and excellence. Written in a ${tone.toLowerCase()} tone, this description highlights the key benefits and unique selling points of ${productName}.`;

    setDescription(generatedText);

    setSeoTitle(`Buy ${productName} Online | Best ${category}`);

    setKeywords(
      `${productName}, ${category}, Best ${category}, Buy ${productName}, Premium ${category}`
    );

    setCaption(
      `✨ Discover ${productName}! Experience premium quality and outstanding performance today. #${productName.replace(
        /\s/g,
        ""
      )} #${category.replace(/\s/g, "")}`
    );
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "80px auto",
        padding: "40px",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#111827",
        }}
      >
        Generate Product Content
      </h2>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "15px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "15px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <option value="">Select Category</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Beauty</option>
        <option>Furniture</option>
        <option>Home Decor</option>
      </select>

      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <option value="">Select Tone</option>
        <option>Professional</option>
        <option>Luxury</option>
        <option>Friendly</option>
        <option>Technical</option>
      </select>

      <button
        onClick={generateDescription}
        style={{
          width: "100%",
          padding: "15px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Generate Content
      </button>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#f3f4f6",
          borderRadius: "10px",
        }}
      >
        <h3>Generated Description</h3>
        <p>{description}</p>

        {description && (
          <button
            onClick={() => navigator.clipboard.writeText(description)}
            style={{
              padding: "10px 20px",
              background: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Copy Description
          </button>
        )}

        <h3>SEO Title</h3>
        <p>{seoTitle}</p>

        <h3>SEO Keywords</h3>
        <p>{keywords}</p>

        <h3>Instagram Caption</h3>
        <p>{caption}</p>
      </div>
    </div>
  );
}

export default Generator;