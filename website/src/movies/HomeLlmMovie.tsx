"use client";

import HomeCodeHighlight from "../components/home/HomeCodeHighlight";

const LLM_CODE = `import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

class ShoppingOrderController {
  /** some description comment for AI */
  create(input: IShoppingOrderCreate): void;
}

// Generate application
const app = typia.llm.application<ShoppingOrderController>();
const func = app.functions[0];

// Lenient parse + validation feedback
const data = func.parse(llmOutput);
const result = func.validate(data);
if (result.success === false)
  const feedback = LlmJson.stringify(result);`;

const callouts = [
  {
    icon: "✅",
    title: "Validation Feedback",
    desc: "Validate LLM output with typia.validate, then feed IValidation.IFailure back to the LLM for self-correction",
  },
  {
    icon: "🔧",
    title: "Lenient JSON Parsing",
    desc: "Recover from malformed JSON that LLMs frequently produce — broken quotes, trailing commas, missing brackets",
  },
  {
    icon: "🔄",
    title: "Type Coercion",
    desc: 'Automatically cast LLM string responses to proper TypeScript types — "1" becomes number 1',
  },
  {
    icon: "📐",
    title: "Schema Generation",
    desc: "Generate function calling schemas directly from pure TypeScript types. No manual schema writing needed",
  },
];

const HomeLlmMovie = () => (
  <section className="bg-[#e5eefa] py-12 md:py-20">
    <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
      <div className="mb-12 text-center">
        <h3 className="mb-4 text-[1.6rem] leading-[1.167] font-bold text-[#0c1c32] md:text-[2.2rem]">
          LLM Function Calling Harness
        </h3>
        <p className="mx-auto max-w-[700px] text-[1.05rem] leading-[1.5] text-[#4c5e76]">
          Schema generation + lenient parsing + type coercion + validation
          feedback.
          <br />
          The deterministic harness that turns 6.75% LLM accuracy into 100%.
        </p>
      </div>
      <div className="grid items-stretch gap-8 md:grid-cols-12">
        {/* min-w-0: a grid item defaults to min-width:auto, so the long code
            lines in the <pre> below would set the track's floor and push the
            whole section past the viewport on narrow screens. MUI's <Grid>
            capped this with flex-basis/max-width; CSS grid needs it said. */}
        <div className="min-w-0 md:col-span-7">
          <div className="h-full overflow-hidden rounded-lg border border-[#0f376c] bg-[#0c1c32]">
            <div className="flex items-center gap-3 border-b border-b-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-5 py-3">
              <span className="rounded px-3 py-[2.4px] text-[0.7rem] font-bold tracking-[0.5px] text-white uppercase bg-[rgba(180,0,255,0.6)]">
                AI
              </span>
              <p className="text-sm leading-[1.43] font-medium text-[rgba(255,255,255,0.6)]">
                LLM Integration
              </p>
            </div>
            <pre
              className="m-0 overflow-auto p-5 text-[0.72rem] leading-[1.7] text-[rgba(255,255,255,0.85)] md:text-[0.8rem] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-thumb]:rounded-[3px] [&::-webkit-scrollbar-thumb]:bg-[rgba(255,255,255,0.15)]"
              style={{
                fontFamily:
                  "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",
              }}
            >
              <code>
                <HomeCodeHighlight>{LLM_CODE}</HomeCodeHighlight>
              </code>
            </pre>
          </div>
        </div>
        <div className="min-w-0 md:col-span-5">
          <div className="flex h-full flex-col justify-center gap-5">
            {callouts.map((c) => (
              <div
                key={c.title}
                className="flex gap-4 rounded-lg border border-[#c1d3eb] bg-[#f6f9fd] p-4"
              >
                <span className="text-[1.4rem] leading-[1.5]">{c.icon}</span>
                <div>
                  <p className="mb-[2.4px] text-[0.9rem] leading-[1.5] font-bold text-[#0c1c32]">
                    {c.title}
                  </p>
                  <p className="text-[0.82rem] leading-[1.5] text-[#4c5e76]">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default HomeLlmMovie;
