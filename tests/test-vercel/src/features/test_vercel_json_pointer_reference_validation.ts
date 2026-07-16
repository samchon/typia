import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

/**
 * Verifies Vercel advertises and enforces generated canonical local references.
 *
 * 1. Convert a recursive slash-key controller through the public adapter.
 * 2. Coerce numeric input strings and validate the referenced result.
 * 3. Reject a wrong referenced result through Vercel's failure branch.
 */
export const test_vercel_json_pointer_reference_validation =
  async (): Promise<void> => {
    const controller: ILlmController<PointerService> =
      typia.llm.controller<PointerService>("pointer", new PointerService());
    const tool: Tool = toVercelTools({ controllers: [controller] })["echo"]!;
    TestValidator.predicate("advertises a canonical slash reference", () =>
      JSON.stringify(controller.application).includes(
        '"$ref":"#/$defs/RecursiveA~1B"',
      ),
    );

    const raw = { value: "A/B", count: "42", children: [] };
    const tree: Recursive<"A/B"> = {
      value: "A/B",
      count: 42,
      children: [],
    };
    const valid = await execute(tool, raw, false);
    TestValidator.equals("valid referenced output succeeds", valid, {
      success: true,
      data: { result: tree },
    });

    const invalid = (await execute(tool, tree, true)) as {
      success?: boolean;
      error?: string;
    };
    TestValidator.predicate(
      "invalid referenced output fails",
      invalid.success === false && typeof invalid.error === "string",
    );
  };

type Recursive<T extends string> = {
  value: T;
  count: number;
  children: Recursive<T>[];
};

class PointerService {
  public echo(props: { input: Recursive<"A/B">; invalid: boolean }): {
    result: Recursive<"A/B">;
  } {
    return {
      result: props.invalid
        ? ({ value: "wrong", count: 0, children: [] } as any)
        : props.input,
    };
  }
}

const execute = (
  tool: Tool,
  input: unknown,
  invalid: boolean,
): Promise<unknown> =>
  tool.execute!(
    { input, invalid },
    {
      toolCallId: `pointer-${invalid ? "invalid" : "valid"}`,
      messages: [],
      abortSignal: undefined as any,
    },
  );
