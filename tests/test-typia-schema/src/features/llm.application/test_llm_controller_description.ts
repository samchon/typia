import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import typia from "typia";

/**
 * Verifies typia.llm.controller propagates the class JSDoc as
 * controller.application.description.
 *
 * A controller wraps an ILlmApplication, so the application-level description
 * must survive the extra layer and be readable from a class source (not only an
 * interface). This is the shape MCP-style integrations consume, where the
 * whole-toolset description doubles as the server instruction; a regression
 * that only wired interfaces would silently drop the description for
 * class-based controllers.
 *
 * 1. Declare a class with a JSDoc summary/body and one method.
 * 2. Call typia.llm.controller<Class>(name, instance).
 * 3. Assert controller.application.description carries the summary and body.
 *
 * @evidence contracts/testing.md#behavioral-verification A controller generated from the Calculator class retains both class-level JSDoc paragraphs in controller.application.description.
 * @evidence contracts/testing.md#independent-expectations Calculator controller and Exposes arithmetic tools text are literal source documentation, independently expected at the application field.
 * @evidence contracts/testing.md#distinguishing-cases Class source and controller wrapping complement interface-only application_description. Both paragraphs are required; the arithmetic method is not invoked and no MCP transport is exercised.
 * @evidence contracts/testing.md#execution-ownership test_llm_controller_description is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.controller through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.controller call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Class source and controller wrapping complement interface-only application_description. Both paragraphs are required; the arithmetic method is not invoked and no MCP transport is exercised. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_controller_description = (): void => {
  /**
   * Calculator controller.
   *
   * Exposes arithmetic tools that an LLM agent can invoke.
   */
  class Calculator {
    public add(input: { a: number; b: number }): void {
      input.a + input.b;
    }
  }

  const controller: ILlmController = typia.llm.controller<Calculator>(
    "calculator",
    new Calculator(),
  );

  TestValidator.predicate(
    "controller application description carries the summary",
    () =>
      controller.application.description !== undefined &&
      controller.application.description.includes("Calculator controller"),
  );
  TestValidator.predicate(
    "controller application description carries the body",
    () =>
      controller.application.description !== undefined &&
      controller.application.description.includes(
        "Exposes arithmetic tools that an LLM agent can invoke.",
      ),
  );
};
