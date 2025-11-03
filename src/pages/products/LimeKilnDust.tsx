import ProductTemplate from "@/components/ProductTemplate";

const LimeKilnDust = () => {
  return (
    <ProductTemplate
      title="Lime Kiln Dust"
      description="Cost-effective alternative for soil stabilization and agricultural applications"
      overview="Lime Kiln Dust (LKD) is a by-product of the lime manufacturing process, consisting of fine particles collected from kiln exhaust gases. This economical product offers many of the benefits of traditional lime products at a lower cost."
      details="Our LKD contains a mixture of calcium oxide, calcium carbonate, and calcium hydroxide, making it an excellent choice for soil amendment, road base stabilization, and agricultural applications where high purity is not critical."
      features={[
        "Cost-effective lime alternative",
        "Good reactivity and pH adjustment",
        "Fine particle size for easy handling",
        "Reduces soil plasticity",
        "Improves soil bearing capacity",
        "Environmentally responsible recycling",
      ]}
      applications={[
        "Soil stabilization for roads and embankments",
        "Agricultural lime substitute",
        "Mine reclamation",
        "Landfill cover",
        "Waste treatment",
        "Concrete additives",
        "Soil pH adjustment",
        "Dust control",
      ]}
      specifications={[
        { label: "Total Lime Content", value: "40-70%" },
        { label: "Particle Size", value: "Very fine" },
        { label: "Moisture", value: "Variable" },
        { label: "Packaging", value: "Bulk only" },
      ]}
      relatedProducts={[
        { name: "High Calcium Quicklime", link: "/products/high-calcium-quicklime" },
        { name: "Hydrated Lime", link: "/products/hydrated-lime" },
        { name: "High Calcium Limestone", link: "/products/high-calcium-limestone" },
      ]}
    />
  );
};

export default LimeKilnDust;
