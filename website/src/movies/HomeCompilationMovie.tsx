"use client";

import HomeCodeHighlight from "../components/home/HomeCodeHighlight";

const BEFORE_CODE = `import typia, { tags } from "typia";

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}

// just one line, with pure TypeScript type
const check: boolean = typia.is<IMember>(input);`;

const AFTER_CODE = `// compiled JavaScript — no schema overhead
((input) =>
  "object" === typeof input &&
  null !== input &&
  "string" === typeof input.id &&
  isFormatUuid(input.id) &&
  "string" === typeof input.email &&
  isFormatEmail(input.email) &&
  "number" === typeof input.age &&
  Number.isInteger(input.age) &&
  19 < input.age &&
  100 >= input.age)`;

const CodePanel = (props: {
  title: string;
  label: string;
  labelColor: string;
  code: string;
}) => (
  <div className="min-w-0 flex-1 overflow-hidden rounded-lg border border-[#c1d3eb] bg-[#0c1c32]">
    <div className="flex items-center gap-3 border-b border-b-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-5 py-3">
      <span
        className="rounded-sm px-3 py-[2.4px] text-[0.7rem] font-bold tracking-[0.5px] text-white uppercase"
        style={{ backgroundColor: props.labelColor }}
      >
        {props.label}
      </span>
      <p className="m-0 text-[0.875rem] leading-[1.43] font-medium text-[rgba(255,255,255,0.6)]">
        {props.title}
      </p>
    </div>
    <pre
      className="m-0 overflow-auto p-5 text-[0.72rem] leading-[1.7] text-[rgba(255,255,255,0.85)] [&::-webkit-scrollbar-thumb]:rounded-[3px] [&::-webkit-scrollbar-thumb]:bg-[rgba(255,255,255,0.15)] [&::-webkit-scrollbar]:h-[6px] md:text-[0.8rem]"
      style={{
        fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",
      }}
    >
      <code>
        <HomeCodeHighlight>{props.code}</HomeCodeHighlight>
      </code>
    </pre>
  </div>
);

const HomeCompilationMovie = () => (
  <section className="bg-white py-12 md:py-20">
    <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
      <div className="mb-12 text-center">
        <h3 className="m-0 mb-4 text-[1.6rem] leading-[1.167] font-bold text-[#0c1c32] md:text-[2.2rem]">
          AOT Compilation Magic
        </h3>
        <p className="m-0 mx-auto max-w-[650px] text-[1.05rem] leading-[1.5] font-normal text-[#4c5e76]">
          Write TypeScript types as you normally would. At compile time, typia
          analyzes the AST and generates dedicated, optimized validation code.
        </p>
      </div>
      <div className="flex flex-col items-stretch gap-6 md:flex-row">
        <CodePanel
          title="Your TypeScript Code"
          label="Input"
          labelColor="rgba(0,150,255,0.7)"
          code={BEFORE_CODE}
        />
        <div className="hidden items-center px-2 text-[2rem] text-[#c1d3eb] md:flex">
          →
        </div>
        <div className="flex justify-center text-[2rem] text-[#c1d3eb] md:hidden">
          ↓
        </div>
        <CodePanel
          title="Compiled Output"
          label="Output"
          labelColor="rgba(80,200,0,0.7)"
          code={AFTER_CODE}
        />
      </div>
    </div>
  </section>
);
export default HomeCompilationMovie;
