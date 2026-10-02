import { ILlmApplication } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IApplication {
  /** Create a member. */
  create(props: { input: { title: string } }): Promise<{
    /** How the member scored. */
    score: number & tags.Minimum<0> & tags.Maximum<100>;
  }>;
}

class Service implements IApplication {
  public async create(_props: { input: { title: string } }): Promise<{
    score: number & tags.Minimum<0> & tags.Maximum<100>;
  }> {
    return { score: 1 };
  }
}

/**
 * Verifies an LLM application reports the schema configuration it was built
 * with.
 *
 * `_llmApplicationFinalize` rebuilt `config` from
 * `LlmSchemaConverter.getConfig()`, the converter's defaults, so every
 * application and controller reported `strict: false` however its `Config`
 * generic read. That is not a cosmetic field: a strict schema carries its
 * constraints as `@minimum`-style description tags rather than as keywords, and
 * the inverter only reads them back when told the schema is strict.
 * `@typia/mcp` validates every tool result with the reported config, so a
 * strict controller accepted output that violated its own declared range
 * (#2293).
 *
 * The consequence assertion is what makes this test fail before the fix; the
 * reported flag alone could be satisfied by a constant.
 *
 * 1. Read the reported config from an application and a controller, strict and
 *    default.
 * 2. Require it to match the declared `Config`, with the `validate` hook
 *    unaffected.
 * 3. Invert each output schema with the reported config and require an
 *    out-of-range value to be rejected in both modes.
 *
 * @evidence contracts/testing.md#behavioral-verification Generated strict/default applications and controllers report their actual strict flag; hook presence is preserved, and LlmJson.validate with that reported config accepts score 50 and rejects 500.
 * @evidence contracts/testing.md#independent-expectations The Config generics and score Minimum<0>/Maximum<100> independently require the flags and opposite validation verdicts. The literal output witnesses keep the consequence check from passing merely because a constant strict flag was emitted.
 * @evidence contracts/testing.md#distinguishing-cases Strict/default producer variants, absent/present validation hooks and in-range/out-of-range outputs distinguish reporting from operational constraint restoration. The controller Service is constructed but its method is not invoked.
 * @evidence contracts/testing.md#execution-ownership test_llm_application_reported_config is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.application, typia.llm.controller through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.application, typia.llm.controller call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Strict/default producer variants, absent/present validation hooks and in-range/out-of-range outputs distinguish reporting from operational constraint restoration. The controller Service is constructed but its method is not invoked. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_application_reported_config = (): void => {
  const strict: ILlmApplication = typia.llm.application<
    IApplication,
    { strict: true }
  >();
  const loose: ILlmApplication = typia.llm.application<IApplication>();

  // POSITIVE: the declared configuration is what gets reported.
  TestEquality.equals(
    "strict application reports strict",
    strict.config.strict,
    true,
  );
  TestEquality.equals(
    "default application reports non-strict",
    loose.config.strict,
    false,
  );
  TestEquality.equals(
    "strict controller reports strict",
    typia.llm.controller<Service, { strict: true }>("service", new Service())
      .application.config.strict,
    true,
  );
  TestEquality.equals(
    "default controller reports non-strict",
    typia.llm.controller<Service, {}>("service", new Service()).application
      .config.strict,
    false,
  );

  // CONTROL: the runtime validate hook keeps its own meaning.
  TestEquality.equals(
    "no validate hook is reported as null",
    loose.config.validate,
    null,
  );
  TestEquality.equals(
    "a validate hook is reported",
    typia.llm.application<IApplication>({
      validate: {
        create: () => ({ success: true, data: { input: { title: "x" } } }),
      },
    }).config.validate !== null,
    true,
  );

  // CONSEQUENCE: inverting with the reported config must keep the constraints.
  for (const [label, app] of [
    ["strict", strict],
    ["default", loose],
  ] as const) {
    const func = app.functions.find((f) => f.name === "create")!;
    const validate = LlmJson.validate(func.output!, true, app.config);
    TestEquality.equals(
      `${label} output rejects a score above the maximum`,
      validate({ score: 500 }).success,
      false,
    );
    TestEquality.equals(
      `${label} output accepts a score inside the range`,
      validate({ score: 50 }).success,
      true,
    );
  }
};
