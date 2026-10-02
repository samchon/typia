import { TestValidator } from "@nestia/e2e";
import { ILlmApplication } from "@typia/interface";
import typia from "typia";

/**
 * Verifies typia.llm.application reflects the source type's JSDoc as
 * ILlmApplication.description.
 *
 * The application-level description is distinct from each function's
 * description: it comes from the JSDoc comment on the class or interface passed
 * as the generic argument, not from any method. Consumers such as the MCP
 * integration surface it as a whole-toolset instruction, so a regression that
 * dropped it would leave agents without the collection-level guidance the
 * author wrote. The summary line and the body paragraph are concatenated the
 * same way function descriptions are.
 *
 * 1. Declare an interface with a JSDoc summary and body, plus one method.
 * 2. Call typia.llm.application<Interface>().
 * 3. Assert application.description carries both the summary and the body.
 *
 * @evidence contracts/testing.md#behavioral-verification The generated application description includes both the source interface summary and its body, independently of the add method documentation.
 * @evidence contracts/testing.md#independent-expectations The expected summary and body are literal text authored on ICalculator; neither comes from the emitted description.
 * @evidence contracts/testing.md#distinguishing-cases Interface-level summary/body propagation is distinct from method descriptions and from the no-JSDoc and explicit-summary sibling cases.
 * @evidence contracts/testing.md#execution-ownership test_llm_application_description is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.application through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.application call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Interface-level summary/body propagation is distinct from method descriptions and from the no-JSDoc and explicit-summary sibling cases. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_application_description = (): void => {
  /**
   * Calculator application.
   *
   * Provides arithmetic operations that an LLM agent can invoke.
   */
  interface ICalculator {
    /**
     * Add two numbers.
     *
     * @param input Operands to sum
     */
    add(input: { a: number; b: number }): void;
  }

  const app: ILlmApplication = typia.llm.application<ICalculator>();

  TestValidator.predicate(
    "application description carries the summary",
    () =>
      app.description !== undefined &&
      app.description.includes("Calculator application"),
  );
  TestValidator.predicate(
    "application description carries the body",
    () =>
      app.description !== undefined &&
      app.description.includes(
        "Provides arithmetic operations that an LLM agent can invoke.",
      ),
  );
};
