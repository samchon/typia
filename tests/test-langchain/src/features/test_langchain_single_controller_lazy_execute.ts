import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { toLangChainTools } from "@typia/langchain";
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

    TestValidator.equals(
      "conversion should not build deferred state",
      built,
      0,
    );
    TestValidator.equals("single controller exposes one tool", tools.length, 1);

    const inspect: DynamicStructuredTool | undefined = tools.find(
      (tool) => tool.name === "inspect",
    );
    if (inspect === undefined) throw new Error("Missing inspect tool");
    TestValidator.predicate("tool description should come from JSDoc", () =>
      inspect.description.includes("Inspect the deferred state"),
    );

    const result: unknown = await inspect.invoke({ query: "depth" });
    TestValidator.equals("first call builds the state once", built, 1);
    TestValidator.equals("tool returns the inspected result", result, {
      success: true,
      data: { answer: "depth=42" },
    });
  };
