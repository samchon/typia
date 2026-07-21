import { TestValidator } from "@nestia/e2e";
import { ILlmApplication } from "@typia/interface";
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
 */
export const test_llm_application_reported_config = (): void => {
  const strict: ILlmApplication = typia.llm.application<
    IApplication,
    { strict: true }
  >();
  const loose: ILlmApplication = typia.llm.application<IApplication>();

  // POSITIVE: the declared configuration is what gets reported.
  TestValidator.equals(
    "strict application reports strict",
    strict.config.strict,
    true,
  );
  TestValidator.equals(
    "default application reports non-strict",
    loose.config.strict,
    false,
  );
  TestValidator.equals(
    "strict controller reports strict",
    typia.llm.controller<Service, { strict: true }>("service", new Service())
      .application.config.strict,
    true,
  );
  TestValidator.equals(
    "default controller reports non-strict",
    typia.llm.controller<Service, {}>("service", new Service()).application
      .config.strict,
    false,
  );

  // CONTROL: the runtime validate hook keeps its own meaning.
  TestValidator.equals(
    "no validate hook is reported as null",
    loose.config.validate,
    null,
  );
  TestValidator.equals(
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
    TestValidator.equals(
      `${label} output rejects a score above the maximum`,
      validate({ score: 500 }).success,
      false,
    );
    TestValidator.equals(
      `${label} output accepts a score inside the range`,
      validate({ score: 50 }).success,
      true,
    );
  }
};
