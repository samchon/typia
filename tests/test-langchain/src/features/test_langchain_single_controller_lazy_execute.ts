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
 * @evidence contracts/testing.md#behavioral-verification Converting a reflected Inspector leaves its deferred counter zero, advertises one documented tool and builds it once on first invoke, returning depth=42.
 * @evidence contracts/testing.md#independent-expectations The authored Inspector closure and counter establish deferred state expectations independently of generated metadata.
 * @evidence contracts/testing.md#distinguishing-cases Conversion versus first invoke isolates lazy behavior; repeat invocation and concurrent construction are outside this case.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_single_controller_lazy_execute through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary Converting a reflected Inspector leaves its deferred counter zero, advertises one documented tool and builds it once on first invoke, returning depth=42. The native-produced controller is registered as an actual DynamicStructuredTool and its public SDK surface is exercised; authored metadata alone cannot establish producer-to-SDK assembly.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Conversion versus first invoke isolates lazy behavior; repeat invocation and concurrent construction are outside this case. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
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
