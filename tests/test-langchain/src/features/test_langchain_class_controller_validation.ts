import {
  DynamicStructuredTool,
  ToolInputParsingException,
} from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies typia — not LangChain — rejects a class tool's invalid arguments.
 *
 * `toLangChainTools` validates arguments with typia and rejects invalid calls
 * with a `ToolInputParsingException` carrying `LlmJson.stringify` feedback. The
 * caller or agent must handle that rejection to use the feedback for
 * correction. LangChain's `StructuredTool.call` runs `@cfworker/json-schema`
 * against whatever `schema` a tool registers and throws before the tool body,
 * so registering a bare JSON Schema silently hands validation to LangChain and
 * reduces the feedback to its generic "Received tool input did not match
 * expected schema". Asserting only that `ToolInputParsingException` is thrown
 * cannot tell the two sources apart, so this pins the message instead: deleting
 * the registrar's typia validation must fail this test.
 *
 * 1. Build a class controller and convert it to LangChain tools.
 * 2. Invoke `add` with a non-numeric operand.
 * 3. Assert the throw carries typia's annotated feedback for `$input.x` and never
 *    LangChain's schema message.
 * 4. Assert valid arguments still execute.
 *
 * @evidence contracts/testing.md#behavioral-verification Invalid x rejects with ToolInputParsingException and registrar/path/number feedback instead of generic SDK schema text; valid operands still execute to value 15.
 * @evidence contracts/testing.md#independent-expectations The authored numeric declaration, invalid string and literal feedback fields define failure expectations; SDK class identity comes from the actual imported exception type.
 * @evidence contracts/testing.md#distinguishing-cases Invalid and valid inputs contrast rejection with execution in the same reflected tool.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_class_controller_validation through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary Invalid x rejects with ToolInputParsingException and registrar/path/number feedback instead of generic SDK schema text; valid operands still execute to value 15. The native-produced controller is registered as an actual DynamicStructuredTool and its public SDK surface is exercised; authored metadata alone cannot establish producer-to-SDK assembly.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Invalid and valid inputs contrast rejection with execution in the same reflected tool. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
 */
export const test_langchain_class_controller_validation =
  async (): Promise<void> => {
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());
    const tools: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
    });
    const addTool: DynamicStructuredTool | undefined = tools.find(
      (t) => t.name === "add",
    );
    if (addTool === undefined) throw new Error("Missing add tool");

    const error: unknown = await addTool
      .invoke({ x: "not a number", y: 5 })
      .then(() => undefined)
      .catch((exp: unknown) => exp);
    TestValidator.predicate(
      "invalid arguments throw ToolInputParsingException",
      () => error instanceof ToolInputParsingException,
    );

    const message: string = (error as Error).message;
    TestValidator.predicate(
      "feedback comes from typia, not LangChain's JSON Schema validation",
      () =>
        message.includes(
          "Received tool input did not match expected schema",
        ) === false,
    );
    TestValidator.predicate("feedback is titled by the registrar", () =>
      message.includes('Type errors in "add" arguments:'),
    );
    TestValidator.predicate(
      "feedback annotates the offending property with typia's expected type",
      () =>
        message.includes("// ❌") &&
        message.includes('"path":"$input.x"') &&
        message.includes('"expected":"number"'),
    );

    const valid: unknown = await addTool.invoke({ x: 10, y: 5 });
    TestEquality.equals("valid arguments execute", valid, {
      success: true,
      data: { value: 15 },
    });
  };
