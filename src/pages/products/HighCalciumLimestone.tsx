import ProductTemplate from "@/components/ProductTemplate";

const HighCalciumLimestone = () => {
  return (
    <ProductTemplate
      title="High Calcium Limestone"
      description="Premium crushed limestone for construction, agriculture, and industrial uses"
      overview="Our High Calcium Limestone is quarried from select deposits with superior calcium carbonate content. Processed to precise specifications, it serves as an essential raw material for construction, agriculture, and numerous industrial applications."
      details="Available in various sizes and grades, our limestone products deliver consistent quality and performance. From coarse aggregate to fine agricultural lime, we provide the right product for your specific requirements."
      features={[
        "High calcium carbonate content (>95%)",
        "Low magnesium content",
        "Consistent gradation",
        "Multiple size options",
        "Bright white appearance",
        "Excellent durability",
      ]}
      applications={[
        "Construction aggregate",
        "Road base and surfacing",
        "Agricultural lime",
        "Concrete and asphalt production",
        "Railroad ballast",
        "Landscaping stone",
        "Industrial fillers",
        "Water treatment",
      ]}
      specifications={[
        { label: "CaCO₃ Content", value: "95-98%" },
        { label: "Available Sizes", value: "1/4\" to 6\"" },
        { label: "Gradation", value: "Per specification" },
        { label: "Packaging", value: "Bulk, supersacks" },
      ]}
      relatedProducts={[
        { name: "High Calcium Quicklime", link: "/products/high-calcium-quicklime" },
        { name: "Lime Kiln Dust", link: "/products/lime-kiln-dust" },
        { name: "Hydrated Lime", link: "/products/hydrated-lime" },
      ]}
    />
  );
};

export default HighCalciumLimestone;
