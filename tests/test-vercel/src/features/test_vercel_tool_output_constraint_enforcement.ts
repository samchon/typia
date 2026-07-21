import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia, { tags } from "typia";

/**
 * Verifies tool output constraints are enforced in both schema modes.
 *
 * `toVercelTools` validates a declared result by inverting its LLM schema, and
 * the two modes keep constraints in different places: a non-strict schema keeps
 * `minimum` and `format` as keywords, while a strict one moves them into the
 * description as `@minimum 0` tags. The inverter only reads those tags back
 * when told the schema is strict, so the registrar has to hand it the
 * application's own config — and every property here is documented, because a
 * description is exactly what used to make the non-strict keywords disappear.
 *
 * The strict controller is converted exactly as typia emits it. It used to need
 * its `config.strict` corrected by hand, because the emitted application
 * reported `strict: false` whatever the `Config` generic said while shifting
 * the constraints into the description (issue #2293). With the reported config
 * truthful, that correction would hide the very regression this case exists to
 * catch.
 *
 * 1. Convert the same documented controller twice, once non-strict and once
 *    strict.
 * 2. Assert a conforming result uses the typed success branch.
 * 3. Assert a result violating `Minimum` uses the failure branch in both modes.
 * 4. Assert the same for a result violating `Format<"email">`.
 */
export const test_vercel_tool_output_constraint_enforcement =
  async (): Promise<void> => {
    const strict: ILlmController = typia.llm.controller<
      ConstraintController,
      { strict: true }
    >("constraint", new ConstraintController());
    TestValidator.equals(
      "a strict controller reports the config it was built with",
      strict.application.config.strict,
      true,
    );

    const controllers: [string, ILlmController][] = [
      [
        "non-strict",
        typia.llm.controller<ConstraintController>(
          "constraint",
          new ConstraintController(),
        ),
      ],
      ["strict", strict],
    ];
    for (const [mode, controller] of controllers) {
      const tools: Record<string, Tool> = toVercelTools(controller);
      const read: Tool = tools["read"]!;

      const valid: unknown = await execute(read, "valid");
      TestValidator.equals(`${mode} conforming output accepted`, valid, {
        success: true,
        data: {
          id: "u1",
          age: 20,
          email: "member@typia.io",
        },
      });

      for (const [variant, path] of [
        ["minimum", '"path":"$input.age"'],
        ["format", '"path":"$input.email"'],
      ] as const) {
        const result = (await execute(read, variant)) as {
          success?: boolean;
          error?: string;
        };
        TestValidator.predicate(
          `${mode} ${variant} violation uses the failure branch`,
          result.success === false &&
            typeof result.error === "string" &&
            result.error.includes(path),
        );
      }
    }
  };

const execute = (tool: Tool, variant: string): Promise<unknown> =>
  tool.execute!(
    { variant },
    {
      toolCallId: `test-constraint-${variant}`,
      messages: [],
      abortSignal: undefined as any,
    },
  );

class ConstraintController {
  /** Return a member selected by the test variant. */
  read(input: ConstraintController.IInput): ConstraintController.IMember {
    const valid: ConstraintController.IMember = {
      id: "u1",
      age: 20,
      email: "member@typia.io",
    };
    switch (input.variant) {
      case "valid":
        return valid;
      case "minimum":
        return { ...valid, age: -5 };
      case "format":
        return { ...valid, email: "not-an-email" };
    }
  }
}

namespace ConstraintController {
  export interface IInput {
    /** Which member to return. */
    variant: "valid" | "minimum" | "format";
  }
  export interface IMember {
    /** How the member is identified. */
    id: string;
    /** How old the member is. */
    age: number & tags.Minimum<0>;
    /** Where to reach the member. */
    email: string & tags.Format<"email">;
  }
}
