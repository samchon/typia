"use client";

import HomeCodeBlock from "../components/home/HomeCodeBlock";

interface FeatureCardProps {
  icon: string;
  title: string;
  code: HomeCodeBlock.IProps;
  metric?: string;
  metricNote?: string;
  description: string;
  href: string;
}

const features: FeatureCardProps[] = [
  {
    icon: "/favicon/android-chrome-512x512.png",
    title: "Super-fast Validation",
    code: { method: "validate", argument: true },
    metric: "20,000x faster",
    metricNote: "than class-validator",
    description:
      "AOT-compiled runtime validators outperform class-validator by 20,000x. Supports complex union types, recursive structures, and the most detailed error reporting.",
    href: "/docs/validators/validate",
  },
  {
    icon: "/images/home/json.png",
    title: "JSON Serialization",
    code: { namespace: "json", method: "stringify", argument: true },
    metric: "200x faster",
    metricNote: "than class-transformer",
    description:
      "Type-safe JSON stringify 200x faster than class-transformer. JSON schema generation for OpenAPI is also supported.",
    href: "/docs/json/stringify",
  },
  {
    icon: "/images/home/openai.svg",
    title: "AI Function Calling Harness",
    code: {
      namespace: "llm",
      method: "application",
      template: "App",
      argument: false,
    },
    metric: "6.75% → 100%",
    metricNote: "in qwen3-coder-next",
    description:
      "The complete function calling harness: schema generation, lenient JSON parsing, type coercion, and validation feedback. One TypeScript type drives everything.",
    href: "/docs/llm/application",
  },
  {
    icon: "/images/home/protobuf.png",
    title: "Protocol Buffers",
    code: { namespace: "protobuf", method: "encode", argument: true },
    metric: "Full Spec",
    metricNote: "only one in TypeScript",
    description:
      "The only TypeScript library supporting the full Protocol Buffer spec. No .proto files needed — just use your TypeScript types.",
    href: "/docs/protobuf/encode",
  },
  {
    icon: "/images/home/random.png",
    title: "Random Generator",
    code: { method: "random", argument: false },
    metric: "Universal",
    metricNote: "with constraint tags",
    description:
      "Generate mock data that perfectly conforms to your TypeScript types. Respects constraints, formats, and custom tags.",
    href: "/docs/random",
  },
];

/**
 * The card is its own grid child, so it stretches to the row height the way
 * `<Grid item>` + `height: "100%"` did. `rounded-sm` is 4px in Tailwind 4 --
 * the value MUI's Card took from the untouched `shape.borderRadius`, not the
 * 8px the other sections set explicitly via `borderRadius: 2`.
 */
const FeatureCard = (props: FeatureCardProps) => (
  <div className="h-full overflow-hidden rounded-sm border border-[#c1d3eb] bg-white transition-all duration-200 ease-[ease] hover:border-[#184e95] hover:bg-[#f6f9fd]">
    <a
      href={props.href}
      className="flex h-full w-full flex-col items-start text-inherit no-underline"
    >
      <div className="w-full p-6">
        <img
          src={props.icon}
          alt={props.title}
          className="mb-4 h-18 w-18 object-contain"
        />
        <h6 className="mb-1 text-[1.05rem] leading-[1.6] font-bold tracking-[0.0075em] text-[#0c1c32]">
          {props.title}
        </h6>
        <p className="mb-2 text-[0.82rem] leading-[1.5] font-normal tracking-[0.00938em] [font-family:'Fira_Code','JetBrains_Mono',monospace]">
          <HomeCodeBlock {...props.code} />
        </p>
        {props.metric && (
          <p className="mb-3 text-[0.85rem] leading-[1.5] font-normal tracking-[0.00938em]">
            <span style={{ color: "#184e95", fontWeight: 600 }}>
              {props.metric}
            </span>
            {props.metricNote && (
              <span style={{ color: "#4c5e76", fontWeight: 400 }}>
                {" "}
                ({props.metricNote})
              </span>
            )}
          </p>
        )}
        <p className="text-[0.88rem] leading-[1.65] font-normal tracking-[0.01071em] text-[#4c5e76]">
          {props.description}
        </p>
      </div>
    </a>
  </div>
);

const HomeStrengthMovie = () => (
  <section className="bg-[#e5eefa] py-12 md:py-20">
    <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
      <div className="mb-12 text-center">
        <h3 className="mb-4 text-[1.6rem] leading-[1.167] font-bold tracking-[0] text-[#0c1c32] md:text-[2.2rem]">
          Key Features
        </h3>
        <p className="mx-auto max-w-[600px] text-[1.05rem] leading-[1.5] font-normal tracking-[0.00938em] text-[#4c5e76]">
          One library. Pure TypeScript types. Every runtime feature you need.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </div>
  </section>
);
export default HomeStrengthMovie;
