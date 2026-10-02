import { ILlmApplication } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies ILlmApplication.description stays undefined when the source type has
 * no JSDoc.
 *
 * The description is optional: it must appear only when the author actually
 * documented the class or interface. Emitting an empty string (or any
 * placeholder) would pollute agent prompts with meaningless instructions, so
 * the generator must omit the property entirely when there is nothing to
 * describe.
 *
 * 1. Declare an interface with a method but no leading JSDoc comment.
 * 2. Call typia.llm.application<Interface>().
 * 3. Assert application.description is undefined while functions still exist.
 *
 * @evidence contracts/testing.md#behavioral-verification The undocumented interface still emits its single add function while its application description remains undefined.
 * @evidence contracts/testing.md#independent-expectations The handwritten ICalculator has one method and no leading JSDoc, giving independently expected one function and no description.
 * @evidence contracts/testing.md#distinguishing-cases Missing documentation is the negative twin of application_description; existing function generation distinguishes omission of description from omission of the entire application.
 * @evidence contracts/testing.md#execution-ownership test_llm_application_description_absent is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.application through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.application call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Missing documentation is the negative twin of application_description; existing function generation distinguishes omission of description from omission of the entire application. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_application_description_absent = (): void => {
  interface ICalculator {
    add(input: { a: number; b: number }): void;
  }

  const app: ILlmApplication = typia.llm.application<ICalculator>();

  TestEquality.equals(
    "description omitted without JSDoc",
    app.description,
    undefined,
  );
  TestEquality.equals("functions still generated", app.functions.length, 1);
};
