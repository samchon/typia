import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

/**
 * Verifies Vercel advertises and enforces generated canonical local references.
 *
 * 1. Convert a recursive slash-key controller through the public adapter.
 * 2. Coerce numeric input strings and validate the referenced result.
 * 3. Reject a wrong referenced result through Vercel's failure branch.
 *
 * @evidence contracts/testing.md#behavioral-verification Converts a native recursive slash-key controller, checks its canonical local reference, coerces count string42 and accepts the valid tree while rejecting the wrong returned discriminator.
 * @evidence contracts/testing.md#independent-expectations The declared Recursive<A/B> literal and numeric count establish the result; JSON Pointer slash escaping requires A~1B, while the failure branch is verified without deriving expectations from another producer.
 * @evidence contracts/testing.md#distinguishing-cases The valid empty-child tree and wrong one-axis output discriminator exercise referenced validation; other output-schema cases cover nested paths and container-shape failures.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_json_pointer_reference_validation in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The actual native producer emits controller or structured-output metadata consumed by the public Vercel adapter. This retains a producer-to-adapter assembly check that handwritten metadata alone would not exercise.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each entry creates its own controller, seeds and mock model or callback counters. Awaited tool/SDK Promises expose failures to DynamicExecutor; this case opens no server, live-provider session or separate process.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
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
    TestEquality.equals("valid referenced output succeeds", valid, {
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
