import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

class AnotherCalculator {
  /** Another add function that will conflict. */
  add(p: { a: number; b: number }): { value: number } {
    return { value: p.a + p.b };
  }
}

/**
 * Verifies native class controllers reject a shared unprefixed tool name.
 *
 * Distinct class types both expose add. Their native application metadata must
 * preserve that name so the adapter detects the collision before registration.
 *
 * 1. Reflect Calculator and AnotherCalculator as separate controllers.
 * 2. Convert both without prefixes and assert the duplicate-name diagnostic.
 *
 * @evidence contracts/testing.md#behavioral-verification Constructs two native class controllers and checks that unprefixed add collision throws with the Duplicate tool name diagnostic.
 * @evidence contracts/testing.md#independent-expectations Calculator and AnotherCalculator each declare add, so prefix:false must not silently overwrite either tool.
 * @evidence contracts/testing.md#distinguishing-cases The colliding pair is the negative naming case; class_controller_no_prefix owns the noncolliding explicit-false population, and prefixed_tool_name_namespace owns positive distinct controller names.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_class_controller_duplicate_error in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary Two independently reflected classes must retain their shared add method name across native metadata production and adapter conversion; this pins an unprefixed collision, while prefixed_tool_name_namespace owns collisions after prefixing and distinct-name acceptance.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Both controller instances are local to this invocation, so their name map cannot be populated by another case. The suite reuses ttsc's content-keyed native artifact; source or plugin dependency changes invalidate its key. No case-owned process or host remains after return or a thrown assertion.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_class_controller_duplicate_error =
  async (): Promise<void> => {
    // 1. Create two controllers with same function names (when prefix is false)
    const controller1: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calc1", new Calculator());

    const controller2: ILlmController<AnotherCalculator> =
      typia.llm.controller<AnotherCalculator>("calc2", new AnotherCalculator());

    // 2. Should throw due to duplicate name when prefix is false
    let threw: boolean = false;
    let errorMessage: string = "";
    try {
      toVercelTools({
        controllers: [controller1, controller2],
        prefix: false, // This will cause "add" to conflict
      });
    } catch (e) {
      threw = true;
      errorMessage = (e as Error).message;
    }

    if (!threw) {
      throw new Error("Expected duplicate tool name error");
    }
    if (!errorMessage.includes("Duplicate tool name")) {
      throw new Error(
        `Expected error message to include "Duplicate tool name", got: ${errorMessage}`,
      );
    }
  };
