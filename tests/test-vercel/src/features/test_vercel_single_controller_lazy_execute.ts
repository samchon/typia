import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification Converts a single native Inspector controller, asserts zero state builds, inspect name/description, then executes once and checks one build and depth=42.
 * @evidence contracts/testing.md#independent-expectations The owned source closure increments an authored counter; Inspector JSDoc and its string interpolation establish the description and result independently of the adapter.
 * @evidence contracts/testing.md#distinguishing-cases Conversion versus first execution distinguishes deferred work ownership; this case proves one lazy build for one call, not a once-ever cache guarantee.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_single_controller_lazy_execute in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary Native reflection and direct-controller conversion must preserve Inspector's method description without invoking deferred state. The before/after counter and depth=42 result distinguish registration from execution rather than merely checking callback presence.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The suite reuses ttsc's native binary keyed by plugin source/dependencies and the same project compilation; changed plugin inputs invalidate the key. This invocation owns fresh fixture or harness objects and any mock response/counter state, opens no network host and awaits all execution before returning. No case-owned process or handle survives assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
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

    TestEquality.equals("conversion should not build deferred state", built, 0);
    TestEquality.equals(
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
    TestEquality.equals("first call builds the state once", built, 1);
    TestEquality.equals("tool returns the inspected result", result, {
      success: true,
      data: { answer: "depth=42" },
    });
  };
