import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies vercel class controller register against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts should have 4 tools,
 * should have add, should have subtract, should have multiply, should have
 * divide, tool should have description.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Converts a native Calculator controller with omitted prefix, checks all four names and checks add description, inputSchema and executable callback.
 * @evidence contracts/testing.md#independent-expectations The declared four Calculator methods establish name/count expectations; SDK-facing required properties must exist, but this case does not certify schema contents or every description string.
 * @evidence contracts/testing.md#distinguishing-cases The default-option population differs from explicit prefix:false; execution and invalid-input behavior belong to class_controller_execute and class_controller_validation.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_class_controller_register in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The native Calculator application must populate all four default-named SDK tools with a description, schema carrier and executable callback. This checks registration assembly; execute/validation siblings own callback behavior.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The suite reuses ttsc's native binary keyed by plugin source/dependencies and the same project compilation; changed plugin inputs invalidate the key. This invocation owns fresh fixture or harness objects and any mock response/counter state, opens no network host and awaits all execution before returning. No case-owned process or handle survives assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_class_controller_register =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools: Record<string, Tool> = toVercelTools({
      controllers: [controller],
    });

    // 3. Verify all tools are registered without prefix (default)
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

    // 4. Verify tool structure
    const addTool: Tool = tools["add"]!;
    TestValidator.predicate(
      "tool should have description",
      () => addTool.description !== undefined,
    );
    TestValidator.predicate(
      "tool should have inputSchema",
      () => addTool.inputSchema !== undefined,
    );
    TestValidator.predicate(
      "tool should have execute function",
      () => typeof addTool.execute === "function",
    );
  };
