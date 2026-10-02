import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies tags.Probability stays inert outside typia.llm.evaluation.
 *
 * The tag constrains how an evaluation answer converts, not the value, so it
 * must add no runtime check to the validators and no keyword to JSON or LLM
 * schemas. A regression that turned it into a value constraint would reject
 * `false` for a thresholded boolean, or leak an unknown keyword into schemas
 * sent to LLM providers.
 *
 * 1. Declare a thresholded boolean and a gated literal member.
 * 2. Run `is`, `validate`, `json.schema`, and `llm.parameters` over it.
 * 3. Assert every value passes and no schema carries a probability keyword.
 *
 * @evidence contracts/testing.md#behavioral-verification Outside evaluation, tagged booleans/literals pass generated is/validate and native JSON/LLM schemas contain no probability spelling.
 * @evidence contracts/testing.md#independent-expectations Probability is an evaluation decision requirement rather than a value-validation or schema keyword. Both false/true values and escalate/reply literals are authored legal values independent of the generated validators.
 * @evidence contracts/testing.md#distinguishing-cases Two legal value combinations and two schema families contrast evaluation-only policy with general validation. The serialized-schema substring checks detect probability text leakage but do not certify every schema keyword.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_probability_tag_inert is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.is, typia.validate, typia.json.schema and typia.llm.parameters through the configured native typia plugin. This case does not create or decode an evaluation.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must keep Probability metadata inert when emitting general validators and JSON/LLM schemas from the tagged source. Handwritten utility schemas cannot expose an unwanted generated check or keyword in these public producers.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.is, typia.validate, typia.json.schema and typia.llm.parameters call sites share the suite's compiler configuration and host lifetime. This case does not test cache invalidation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Two legal value combinations and two schema families contrast evaluation-only policy with general validation. The serialized-schema substring checks detect probability text leakage but do not certify every schema keyword. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_probability_tag_inert = (): void => {
  for (const value of [
    { refund: false, action: "escalate" },
    { refund: true, action: "reply" },
  ] satisfies IDecision[]) {
    TestEquality.equals("is", typia.is<IDecision>(value), true);
    TestEquality.equals(
      "validate",
      typia.validate<IDecision>(value).success,
      true,
    );
  }
  TestEquality.equals(
    "json.schema",
    JSON.stringify(typia.json.schema<IDecision>()).includes("robability"),
    false,
  );
  TestEquality.equals(
    "llm.parameters",
    JSON.stringify(typia.llm.parameters<IDecision>()).includes("robability"),
    false,
  );
};

interface IDecision {
  /** Is a refund requested? */
  refund: boolean & tags.Probability<0.8>;

  /** What should happen next? */
  action: ("escalate" & tags.Probability<0.9>) | "reply";
}
