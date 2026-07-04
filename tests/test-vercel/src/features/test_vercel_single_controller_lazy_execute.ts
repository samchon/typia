import { TestValidator } from "@nestia/e2e";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Inspector } from "../structures/Inspector";

/**
 * Verifies a single controller can become Vercel tools without eager work.
 *
 * Mirrors the practical `createMcpServer(controller)` path: callers should not
 * have to wrap one controller in `{ controllers: [...] }`, and tool conversion
 * must not build state that the controller intentionally defers until
 * execution.
 *
 * 1. Convert one lazily-constructed `Inspector` controller directly.
 * 2. Assert conversion exposes the tool description without building state.
 * 3. Execute the tool and assert the state builds exactly once.
 */
export const test_vercel_single_controller_lazy_execute =
  async (): Promise<void> => {
    let built: number = 0;
    const tools: Record<string, Tool> = toVercelTools(
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
    TestValidator.equals(
      "single controller exposes one tool",
      Object.keys(tools),
      ["inspect"],
    );

    const inspect: Tool = tools["inspect"]!;
    TestValidator.predicate(
      "tool description should come from JSDoc",
      () =>
        inspect.description?.includes("Inspect the deferred state") === true,
    );

    const result: unknown = await inspect.execute!(
      { query: "depth" },
      { toolCallId: "test-1", messages: [], abortSignal: undefined as any },
    );
    TestValidator.equals("first call builds the state once", built, 1);
    TestValidator.equals("tool returns the inspected result", result, {
      success: true,
      data: { answer: "depth=42" },
    });
  };
