import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies a tool result is checked against the output type its method
 * declared.
 *
 * The registrar consulted `ILlmFunction.output` for its existence alone: a
 * method returning nothing was reported, a method returning the wrong shape was
 * not, so a value violating its own declared range reached the model as a
 * success while `@typia/mcp` and `@typia/vercel` both refused it (#2302).
 *
 * The two schema modes keep constraints in different places — a non-strict
 * schema as `minimum` and `format` keywords, a strict one as `@minimum 0` tags
 * in the description — and the inverter reads the tags back only when told the
 * schema is strict, so the registrar hands it the application's own config.
 * Every property below is documented, because a description is exactly what
 * makes the non-strict keywords vanish when that config is wrong.
 *
 * 1. Convert the same documented controller twice, once non-strict and once
 *    strict.
 * 2. Assert a conforming result is delivered unchanged.
 * 3. Assert a result violating `Minimum` is reported with its failing path, in
 *    both modes, and the same for `Format<"email">`.
 * 4. Assert a method that declares no output keeps its plain success.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (a strict controller reports the config it was built with; … conforming output accepted; … … violation is reported; … undeclared output stays a success). The case documents its purpose as: Verifies a tool result is checked against the output type its method declared.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The registrar consulted `ILlmFunction.output` for its existence alone: a method returning nothing was reported, a method returning the wrong shape was not, so a value violating its own declared range reached the model as a success while `@typia/mcp` and `@typia/vercel` both refused it (#2302). Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (a strict controller reports the config it was built with; … conforming output accepted; … … violation is reported; … undeclared output stays a success) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_tool_output_constraint_enforcement is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_langchain_tool_output_constraint_enforcement =
  async (): Promise<void> => {
    const strict: ILlmController = typia.llm.controller<
      ConstraintController,
      { strict: true }
    >("constraint", new ConstraintController());
    TestEquality.equals(
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
      const tools: DynamicStructuredTool[] = toLangChainTools({
        controllers: [controller],
      });
      const read: DynamicStructuredTool = tools.find((t) => t.name === "read")!;

      // POSITIVE: a conforming result passes through untouched.
      TestEquality.equals(
        `${mode} conforming output accepted`,
        await read.invoke({ variant: "valid" }),
        {
          success: true,
          data: { id: "u1", age: 20, email: "member@typia.io" },
        },
      );

      // NEGATIVE TWINS: each violation is reported with the path that failed.
      for (const [variant, path] of [
        ["minimum", '"path":"$input.age"'],
        ["format", '"path":"$input.email"'],
      ] as const) {
        const result = (await read.invoke({ variant })) as {
          success?: boolean;
          error?: string;
        };
        TestValidator.predicate(
          `${mode} ${variant} violation is reported`,
          result.success === false &&
            typeof result.error === "string" &&
            result.error.includes(path),
        );
      }

      // CONTROL: a method with no declared output keeps its plain success.
      const note: DynamicStructuredTool = tools.find((t) => t.name === "note")!;
      TestEquality.equals(
        `${mode} undeclared output stays a success`,
        await note.invoke({ text: "hello" }),
        { success: true },
      );
    }
  };

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

  /** Record a note and return nothing. */
  note(input: ConstraintController.INote): void {
    if (input.text.length === 0) throw new Error("empty note");
  }
}

namespace ConstraintController {
  export interface IInput {
    /** Which member to return. */
    variant: "valid" | "minimum" | "format";
  }
  export interface INote {
    /** What the note says. */
    text: string;
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
