import { ILlmApplication } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies ILlmApplication.description merges a distinct @summary tag with the
 * body paragraph.
 *
 * When the author writes an explicit `@summary` that is not just the first line
 * of the body, the generator must join them the same way function descriptions
 * do — the summary (its trailing period trimmed) followed by a blank line and
 * the body. This pins the merge branch that a plain single-paragraph comment
 * never reaches, since there the summary is derived from the body and is
 * already its prefix.
 *
 * 1. Declare an interface whose JSDoc has a body paragraph and a separate
 *    `@summary` tag.
 * 2. Call typia.llm.application<Interface>().
 * 3. Assert application.description is "<summary>.\n\n<body>".
 *
 * @evidence contracts/testing.md#behavioral-verification The application description combines the explicit Animal record service summary and the separately authored body with the pinned punctuation and blank line.
 * @evidence contracts/testing.md#independent-expectations The complete expected description is handwritten from the distinct @summary and body text; it does not reuse emitted output.
 * @evidence contracts/testing.md#distinguishing-cases An explicit non-prefix summary reaches a merge branch not covered by implicit first-line summaries; the full string catches lost text, duplicated summaries and incorrect separators.
 * @evidence contracts/testing.md#execution-ownership test_llm_application_description_summary is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.application through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.application call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. An explicit non-prefix summary reaches a merge branch not covered by implicit first-line summaries; the full string catches lost text, duplicated summaries and incorrect separators. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_application_description_summary = (): void => {
  /**
   * Stores the selected animal variant into the database.
   *
   * @summary Animal record service
   */
  interface IAnimalService {
    create(input: { name: string }): void;
  }

  const app: ILlmApplication = typia.llm.application<IAnimalService>();

  TestEquality.equals(
    "summary and body are merged",
    app.description,
    "Animal record service.\n\nStores the selected animal variant into the database.",
  );
};
