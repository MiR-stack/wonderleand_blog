import Content from "../../components/cardContent/Content";

function Section({ title, subtitle, strong, children }) {
  return (
    <div className={`pt-3 pt-sm-5 `} style={{ paddingBottom: "100px" }}>
      <Content
        topDec={subtitle}
        title={{ text: title, strong: strong, size: "lg" }}
        classes="text-center mb-4"
      />
      {children}
    </div>
  );
}

export default Section;
