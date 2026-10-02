import { TestValidator } from "@nestia/e2e";
import { ILlmApplication } from "@typia/interface";
import typia from "typia";

/**
 * Verifies typia.llm.application accepts dotted JSDoc parameter names.
 *
 * TypeScript-Go parses `@param input.value` as a qualified name. The native
 * metadata reader must preserve that text without calling `Node.Text()` on the
 * qualified-name node, otherwise controller documentation from Nestia-style
 * inputs can abort the transform before an application schema is emitted.
 *
 * 1. Declare a controller method with `@param input.value` documentation.
 * 2. Generate the LLM application schema for that controller.
 * 3. Assert the function exists and its single object parameter was inlined, so
 *    the parameter schema's `properties` carry the object's own keys (`value`),
 *    exactly as published typia emits.
 *
 * @evidence contracts/testing.md#behavioral-verification A method documented with @param input.value successfully produces the accept function and its inlined value parameter schema.
 * @evidence contracts/testing.md#independent-expectations accept and value are authored method/property names; requiring them is independent of the metadata reader that handles the qualified JSDoc name.
 * @evidence contracts/testing.md#distinguishing-cases The dotted parameter-name node is the regression boundary. This pins successful source parsing and parameter presence, not the exact propagated parameter description or an external framework.
 * @evidence contracts/testing.md#execution-ownership test_llm_application_qualified_param is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.application through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.application call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. The dotted parameter-name node is the regression boundary. This pins successful source parsing and parameter presence, not the exact propagated parameter description or an external framework. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_application_qualified_param = (): void => {
  interface IRequest {
    value: string;
  }
  interface IController {
    /**
     * Accept a nested request value.
     *
     * @param input.value Nested value documentation
     */
    accept(input: IRequest): void;
  }

  const app: ILlmApplication = typia.llm.application<IController>();
  const func = app.functions.find((f) => f.name === "accept");

  TestValidator.predicate("function exists", () => func !== undefined);
  TestValidator.predicate(
    "parameter schema exists",
    () => func?.parameters.properties.value !== undefined,
  );
};
