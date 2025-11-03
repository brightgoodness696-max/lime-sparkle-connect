import ProductTemplate from "@/components/ProductTemplate";

const LimeSlurry = () => {
  return (
    <ProductTemplate
      title="Lime Slurry"
      description="Ready-to-use lime suspension for flue gas treatment and water purification"
      overview="Our Lime Slurry is a pre-mixed suspension of calcium hydroxide in water, providing a convenient, ready-to-use solution for applications requiring rapid lime deployment. This product eliminates the need for on-site mixing and handling of dry lime."
      details="Manufactured to precise specifications and delivered fresh to ensure optimal reactivity, our lime slurry offers superior performance in flue gas desulfurization, water treatment, and other industrial processes requiring immediate lime availability."
      features={[
        "Ready-to-use suspension",
        "Consistent concentration",
        "No dry material handling",
        "Reduced dust exposure",
        "Improved safety",
        "Custom formulations available",
      ]}
      applications={[
        "Flue gas desulfurization (FGD)",
        "Acid neutralization",
        "Water and wastewater treatment",
        "Mining effluent treatment",
        "Industrial pH control",
        "Scrubber systems",
        "Environmental remediation",
        "Process water treatment",
      ]}
      specifications={[
        { label: "Solids Content", value: "20-35%" },
        { label: "Ca(OH)₂", value: "High purity" },
        { label: "Delivery", value: "Tanker truck" },
        { label: "Storage", value: "Agitated tanks" },
      ]}
      relatedProducts={[
        { name: "Hydrated Lime", link: "/products/hydrated-lime" },
        { name: "High Calcium Quicklime", link: "/products/high-calcium-quicklime" },
        { name: "Lime Kiln Dust", link: "/products/lime-kiln-dust" },
      ]}
    />
  );
};

export default LimeSlurry;
