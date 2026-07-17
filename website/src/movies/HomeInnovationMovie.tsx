"use client";

const ComparisonColumn = (props: {
  label: string;
  labelColor: string;
  items: { icon: string; text: string }[];
  borderColor: string;
}) => (
  <div
    className="h-full overflow-hidden rounded-lg border bg-[#ffffff]"
    style={{ borderColor: props.borderColor }}
  >
    <div
      className="border-b px-6 py-3"
      style={{
        backgroundColor: `${props.borderColor}15`,
        borderBottomColor: props.borderColor,
      }}
    >
      <p
        className="text-[0.95rem] leading-[1.5] font-bold"
        style={{ color: props.labelColor }}
      >
        {props.label}
      </p>
    </div>
    <ul className="m-0 list-none p-6">
      {props.items.map((item, i) => (
        <li
          key={i}
          className={`flex items-start gap-3 ${
            i < props.items.length - 1 ? "mb-5" : "mb-0"
          }`}
        >
          <span className="text-[1.1rem] leading-[1.6]">{item.icon}</span>
          <p className="text-[0.9rem] leading-[1.6] text-[#4c5e76]">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const HomeInnovationMovie = () => (
  <section className="bg-[#ffffff] py-12 md:py-20">
    <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
      <div className="mb-12 text-center">
        <h3 className="mb-4 text-[1.6rem] leading-[1.167] font-bold text-[#0c1c32] md:text-[2.2rem]">
          Why AOT Compilation?
        </h3>
        <p className="mx-auto max-w-[700px] text-[1.05rem] leading-[1.5] text-[#4c5e76]">
          Traditional validators parse schemas at runtime. Typia generates
          dedicated validation code at compile time — the difference is measured
          in orders of magnitude.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ComparisonColumn
          label="Traditional Approach"
          labelColor="#c0392b"
          borderColor="#f0c4bf"
          items={[
            {
              icon: "✕",
              text: "Define a separate schema object (Zod, io-ts, class-validator decorators)",
            },
            {
              icon: "✕",
              text: "Schema is parsed and interpreted at every function call — runtime overhead",
            },
            {
              icon: "✕",
              text: "TypeScript type and schema easily drift apart — double maintenance",
            },
            {
              icon: "✕",
              text: "Complex union types and nested objects require verbose, manual handling",
            },
          ]}
        />
        <ComparisonColumn
          label="Typia — AOT Compilation"
          labelColor="#1e8449"
          borderColor="#c7e3d2"
          items={[
            {
              icon: "✓",
              text: "Write pure TypeScript types — no schema DSL, no decorators, no duplication",
            },
            {
              icon: "✓",
              text: "Compiler analyzes the type AST and emits optimized native code — zero runtime parsing",
            },
            {
              icon: "✓",
              text: "Type and validator are always in sync — single source of truth",
            },
            {
              icon: "✓",
              text: "Full support for unions, intersections, recursion, template literals, and tagged types",
            },
          ]}
        />
      </div>
    </div>
  </section>
);
export default HomeInnovationMovie;
