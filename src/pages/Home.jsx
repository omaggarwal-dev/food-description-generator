import Hero from "../components/Hero";
import FeatureCard from "../components/Card";
import Generator from "../components/Generator";

function Home() {
  return (
    <>
      <Hero />

      {/* Feature Cards Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "40px 20px",
          backgroundColor: "#f8fafc",
        }}
      >
        <FeatureCard
          title="AI Powered"
          description="Generate product descriptions instantly using advanced Artificial Intelligence."
        />

        <FeatureCard
          title="SEO Optimized"
          description="Boost search rankings with keyword-rich product descriptions."
        />

        <FeatureCard
          title="Multiple Tones"
          description="Create Professional, Luxury, Friendly and Formal content styles."
        />

        <FeatureCard
          title="Keyword Generator"
          description="Automatically generate powerful SEO keywords for your products."
        />

        <FeatureCard
          title="Social Media Captions"
          description="Generate engaging captions for Instagram, Facebook and LinkedIn."
        />

        <FeatureCard
          title="Multi Language"
          description="Create product descriptions in multiple languages instantly."
        />
      </div>

      {/* Generator Section */}
      <Generator />
    </>
  );
}

export default Home;