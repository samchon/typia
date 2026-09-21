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
