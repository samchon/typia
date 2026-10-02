import { TestEquality } from "@typia/template/equality";
import typia, { ILlmController, IValidation } from "typia";

/**
 * Verifies typia.llm.controller carries the supplied hello validator into
 * controller.application.functions[0].validate with exact function identity.
 *
 * The controller wrapper is a distinct assembly path from
 * application_custom_validate. It uses a real local executor object but never
 * invokes hello or certifies validator return semantics.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller carries the supplied hello validator into controller.application.functions[0].validate with exact function identity.
 * @evidence contracts/testing.md#independent-expectations The callback is a locally authored function and is compared by identity; no generated value supplies the expected reference.
 * @evidence contracts/testing.md#distinguishing-cases The controller wrapper is a distinct assembly path from application_custom_validate. It uses a real local executor object but never invokes hello or certifies validator return semantics.
 * @evidence contracts/testing.md#execution-ownership test_llm_controller_custom_validate is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.controller through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.controller call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. The controller wrapper is a distinct assembly path from application_custom_validate. It uses a real local executor object but never invokes hello or certifies validator return semantics. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_controller_custom_validate = (): void => {
  interface IApplication {
    hello(): void;
  }
  const validate = (input: unknown): IValidation<unknown> => {
    return {
      success: true,
      data: input,
    };
  };
  const controller: ILlmController = typia.llm.controller<IApplication>(
    "app",
    {
      hello: () => {},
    },
    {
      validate: {
        hello: validate,
      },
    },
  );
  TestEquality.equals(
    "custom",
    controller.application.functions[0]?.validate,
    validate,
  );
};
