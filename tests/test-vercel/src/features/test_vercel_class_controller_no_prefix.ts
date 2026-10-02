import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies vercel class controller no prefix against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts should have 4 tools,
 * should have add, should have subtract, should have multiply, should have
 * divide.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Converts the native Calculator controller with prefix:false and checks four tool names, including each arithmetic method.
 * @evidence contracts/testing.md#independent-expectations The explicit false option promises original method names; four required names plus count4 exclude an added prefix or lost method.
 * @evidence contracts/testing.md#distinguishing-cases This owns the explicit-false option; class_controller_register covers omitted-option default behavior and class_controller_duplicate_error covers a false-option collision.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_class_controller_no_prefix in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary Native class method names must survive explicit prefix:false conversion unchanged. class_controller_register owns the omitted-option default and prefixed_tool_name_namespace owns prefixed acceptance and collisions.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The suite reuses ttsc's native binary keyed by plugin source/dependencies and the same project compilation; changed plugin inputs invalidate the key. This invocation owns fresh fixture or harness objects and any mock response/counter state, opens no network host and awaits all execution before returning. No case-owned process or handle survives assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_class_controller_no_prefix =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools without prefix
    const tools: Record<string, Tool> = toVercelTools({
      controllers: [controller],
      prefix: false,
    });

    // 3. Verify all tools are registered without prefix
    const toolNames: string[] = Object.keys(tools).sort();
    TestEquality.equals("should have 4 tools", toolNames.length, 4);
    TestValidator.predicate("should have add", () => toolNames.includes("add"));
    TestValidator.predicate("should have subtract", () =>
      toolNames.includes("subtract"),
    );
    TestValidator.predicate("should have multiply", () =>
      toolNames.includes("multiply"),
    );
    TestValidator.predicate("should have divide", () =>
      toolNames.includes("divide"),
    );
  };
