import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Inspector } from "../structures/Inspector";

/**
 * Verifies a single controller can become LangChain tools without eager work.
 *
 * Mirrors the practical `createMcpServer(controller)` path: callers should not
 * have to wrap one controller in `{ controllers: [...] }`, and tool conversion
 * must not build state that the controller intentionally defers until
 * execution.
 *
 * 1. Convert one lazily-constructed `Inspector` controller directly.
 * 2. Assert conversion exposes the tool description without building state.
 * 3. Invoke the tool and assert the state builds exactly once.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (conversion should not build deferred state; single controller exposes one tool; tool description should come from JSDoc; first call builds the state once; tool returns the inspected result). The case documents its purpose as: Verifies a single controller can become LangChain tools without eager work.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Mirrors the practical `createMcpServer(controller)` path: callers should not have to wrap one controller in `{ controllers: [...] }`, and tool conversion must not build state that the controller intentionally defers until execution. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (conversion should not build deferred state; single controller exposes one tool; tool description should come from JSDoc; first call builds the state once; tool returns the inspected result) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_single_controller_lazy_execute is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_langchain_single_controller_lazy_execute =
  async (): Promise<void> => {
    let built: number = 0;
    const tools: DynamicStructuredTool[] = toLangChainTools(
      typia.llm.controller<Inspector>(
        "inspector",
        new Inspector(() => {
          ++built;
          return { value: 42 };
        }),
      ),
    );

    TestEquality.equals("conversion should not build deferred state", built, 0);
    TestEquality.equals("single controller exposes one tool", tools.length, 1);

    const inspect: DynamicStructuredTool | undefined = tools.find(
      (tool) => tool.name === "inspect",
    );
    if (inspect === undefined) throw new Error("Missing inspect tool");
    TestValidator.predicate("tool description should come from JSDoc", () =>
      inspect.description.includes("Inspect the deferred state"),
    );

    const result: unknown = await inspect.invoke({ query: "depth" });
    TestEquality.equals("first call builds the state once", built, 1);
    TestEquality.equals("tool returns the inspected result", result, {
      success: true,
      data: { answer: "depth=42" },
    });
  };
