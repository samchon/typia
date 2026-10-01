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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.application, typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (strict application reports strict; default application reports non-strict; strict controller reports strict; default controller reports non-strict; no validate hook is reported as null; a validate hook is reported). The case documents its purpose as: Verifies an LLM application reports the schema configuration it was built with.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: `_llmApplicationFinalize` rebuilt `config` from `LlmSchemaConverter.getConfig()`, the converter's defaults, so every application and controller reported `strict: false` however its `Config` generic read. That is not a cosmetic field: a strict schema carries its constraints as `@minimum`-style description tags rather than as keywords, and the inverter only reads them back when told the schema is strict. `@typia/mcp` validates every tool result with the reported config, so a strict controller accepted output that violated its own declared range (#2293). Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (strict application reports strict; default application reports non-strict; strict controller reports strict; default controller reports non-strict; no validate hook is reported as null; a validate hook is reported) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application_reported_config is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
