import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies a property probability comment applies to that decision property.
 *
 * An indexed access extracts a property's type, not its JSDoc. A generic
 * extraction therefore gets the ordinary boolean threshold unless its final
 * evaluation property declares its own probability requirement.
 *
 * 1. Evaluate a reusable interface whose property has `@probability`.
 * 2. Extract its boolean type through a generic indexed access.
 * 3. Check default and explicit thresholds on the resulting properties.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct property JSDoc sets the urgent threshold, but generic extraction receives the default unless the final property supplies its own requirement.
 * @evidence contracts/testing.md#independent-expectations TypeScript indexed access selects a value type rather than the originating property comment. At probability 0.6 the authored 0.8 comments independently require false while the extracted unannotated field uses the 0.5 default and becomes true.
 * @evidence contracts/testing.md#distinguishing-cases Direct source property, extracted unannotated property and extracted reannotated property are compared in complete literal data; explicit success guards prevent failure from bypassing conversion assertions.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_property_jsdoc_locality is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Direct source property, extracted unannotated property and extracted reannotated property are compared in complete literal data; explicit success guards prevent failure from bypassing conversion assertions. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_property_jsdoc_locality = (): void => {
  const direct = typia.llm.evaluation<ISource>();
  const extracted = typia.llm.evaluation<IExtracted>();
  const directResult = direct.decode({
    urgent: { type: "boolean", probability: 0.6 },
  });
  const extractedResult = extracted.decode({
    defaulted: { type: "boolean", probability: 0.6 },
    explicit: { type: "boolean", probability: 0.6 },
  });
  if (!directResult.success || !extractedResult.success)
    throw new Error("unexpected failure");
  TestEquality.equals("direct", directResult.data, { urgent: false });
  TestEquality.equals("extracted", extractedResult.data, {
    defaulted: true,
    explicit: false,
  });
};

interface ISource {
  /** Is it urgent? @probability 0.8 */
  urgent: boolean;
}

type Select<T, K extends keyof T> = T[K];

interface IExtracted {
  /** Is the ordinary threshold met? */
  defaulted: Select<ISource, "urgent">;

  /** Is the stricter threshold met? @probability 0.8 */
  explicit: Select<ISource, "urgent">;
}
