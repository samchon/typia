import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies type-level probability requirements survive generic indexed access.
 *
 * Unlike property JSDoc, a `tags.Probability` intersection is part of the
 * selected value type. Boolean thresholds and individual string/number literal
 * requirements must reach the decoder, including literals inside an array set.
 *
 * 1. Tag boolean, choice, score, and set member types in a source interface.
 * 2. Select all four through generic indexed-access aliases.
 * 3. Decode values at and below their inherited requirements.
 *
 * @evidence contracts/testing.md#behavioral-verification Probability-tagged boolean, choice, score and set leaf types survive generic indexed access; at-minimum data passes, below boolean/set thresholds convert false/excluded, and below choice/score gates fail on their paths.
 * @evidence contracts/testing.md#independent-expectations Type-level intersection requirements are part of the selected TypeScript value types. Literal at/below probabilities, complete expected decisions and failure paths are authored independently of the native metadata reader.
 * @evidence contracts/testing.md#distinguishing-cases Four question families pass through Select<T,K>; at/below distinctions separate inclusion thresholds from acceptance minimums. Property-comment extraction has a different owner in property_jsdoc_locality.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_probability_tag_indexed_access is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Four question families pass through Select<T,K>; at/below distinctions separate inclusion thresholds from acceptance minimums. Property-comment extraction has a different owner in property_jsdoc_locality. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_probability_tag_indexed_access = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const base = {
    urgent: { type: "boolean", probability: 0.8 },
    action: {
      type: "choice",
      choice: "escalate",
      probabilities: { escalate: 0.6, reply: 0.4 },
    },
    severity: {
      type: "score",
      score: 0.4,
      probabilities: { "0": 0.6, "1": 0.4 },
    },
    "channels.email": { type: "boolean", probability: 0.8 },
    "channels.phone": { type: "boolean", probability: 0.5 },
  };
  const at = evaluation.decode(base);
  TestEquality.equals("at every boundary", at.success ? at.data : at.errors, {
    urgent: true,
    action: "escalate",
    severity: 0,
    channels: ["email", "phone"],
  });
  const belowBoolean = evaluation.decode({
    ...base,
    urgent: { type: "boolean", probability: 0.79 },
    "channels.email": { type: "boolean", probability: 0.79 },
  });
  TestEquality.equals(
    "boolean and set below thresholds",
    belowBoolean.success ? belowBoolean.data : belowBoolean.errors,
    { urgent: false, action: "escalate", severity: 0, channels: ["phone"] },
  );
  const belowChoice = evaluation.decode({
    ...base,
    action: {
      ...base.action,
      probabilities: { escalate: 0.55, reply: 0.45 },
    },
  });
  TestEquality.equals(
    "choice below minimum",
    belowChoice.success ? [] : belowChoice.errors.map((error) => error.path),
    ["$input.action"],
  );
  const belowScore = evaluation.decode({
    ...base,
    severity: {
      ...base.severity,
      score: 0.45,
      probabilities: { "0": 0.55, "1": 0.45 },
    },
  });
  TestEquality.equals(
    "score below minimum",
    belowScore.success ? [] : belowScore.errors.map((error) => error.path),
    ["$input.severity"],
  );
};

interface ISource {
  urgent: boolean & tags.Probability<0.8>;
  action:
    | ("escalate" & tags.Probability<0.6>)
    | ("reply" & tags.Probability<0>);
  severity: (0 & tags.Probability<0.6>) | (1 & tags.Probability<0>);
  channels: Array<
    ("email" & tags.Probability<0.8>) | ("phone" & tags.Probability<0.5>)
  >;
}

type Select<T, K extends keyof T> = T[K];

interface IDecision {
  /** Is it urgent? */
  urgent: Select<ISource, "urgent">;

  /** Which action? */
  action: Select<ISource, "action">;

  /** How severe? */
  severity: Select<ISource, "severity">;

  /** Which channels? */
  channels: Select<ISource, "channels">;
}
