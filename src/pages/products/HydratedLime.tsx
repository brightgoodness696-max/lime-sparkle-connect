import ProductTemplate from "@/components/ProductTemplate";

const HydratedLime = () => {
  return (
    <ProductTemplate
      title="Hydrated Lime"
      description="Versatile calcium hydroxide for water treatment, construction, and environmental applications"
      overview="Our Hydrated Lime is produced through the controlled slaking of high-calcium quicklime, resulting in a fine, white powder with excellent solubility and reactivity. This product offers superior performance in a wide range of applications."
      details="With high available lime content and consistent particle size distribution, our hydrated lime is ideal for water treatment, soil modification, asphalt production, and industrial processing. It provides reliable pH control and chemical reactivity."
      features={[
        "High calcium hydroxide content",
        "Fine particle size for optimal reactivity",
        "Low residue and impurities",
        "Excellent slaking characteristics",
        "Available in various grades",
        "Food-grade options available",
      ]}
      applications={[
        "Water and wastewater treatment",
        "Soil stabilization and modification",
        "Asphalt production",
        "Chemical manufacturing",
        "Flue gas treatment",
        "Sugar refining",
        "Food processing",
        "Construction mortars and plasters",
      ]}
      specifications={[
        { label: "Ca(OH)₂ Content", value: "92-96%" },
        { label: "Particle Size", value: "Fine powder" },
        { label: "Available Lime", value: "High" },
        { label: "Packaging", value: "Bulk, supersacks, bags" },
      ]}
      relatedProducts={[
        { name: "High Calcium Quicklime", link: "/products/high-calcium-quicklime" },
        { name: "Lime Slurry", link: "/products/lime-slurry" },
        { name: "Lime Kiln Dust", link: "/products/lime-kiln-dust" },
      ]}
    />
  );
};

export default HydratedLime;
