import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the record boundary for untrusted evaluation answers.
 *
 * A custom prototype is not a response record, even when every required key is
 * an own property. Null-prototype dictionaries remain valid response records.
 *
 * 1. Answer boolean, choice, and score questions with valid plain records.
 * 2. Put a custom prototype at each answer-map layer in isolation.
 * 3. Assert decision-path failures and preserve null-prototype dictionaries.
 */
export const test_llm_evaluation_decode_rejects_nonrecords = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const plain = {
    urgent: { type: "boolean", probability: 0.8 },
    team: {
      type: "choice",
      choice: "billing",
      probabilities: { billing: 0.6, technical: 0.4 },
    },
    level: {
      type: "score",
      score: 0.4,
      probabilities: { "0": 0.6, "1": 0.4 },
    },
  };
  const inherited = <T extends object>(value: T): T =>
    Object.assign(Object.create({ inherited: true }), value);
  const dictionary = <T extends object>(value: T): T =>
    Object.assign(Object.create(null), value);
  const paths = (answers: unknown): string[] => {
    const result = evaluation.decode(answers);
    return result.success ? [] : result.errors.map((error) => error.path);
  };

  TestEquality.equals("plain records", paths(plain), []);
  TestEquality.equals("custom answer map", paths(inherited(plain)), ["$input"]);
  TestEquality.equals(
    "custom boolean answer",
    paths({ ...plain, urgent: inherited(plain.urgent) }),
    ["$input.urgent"],
  );
  TestEquality.equals(
    "custom choice answer",
    paths({ ...plain, team: inherited(plain.team) }),
    ["$input.team"],
  );
  TestEquality.equals(
    "custom score answer",
    paths({ ...plain, level: inherited(plain.level) }),
    ["$input.level"],
  );
  TestEquality.equals(
    "custom choice distribution",
    paths({
      ...plain,
      team: {
        ...plain.team,
        probabilities: inherited(plain.team.probabilities),
      },
    }),
    ["$input.team"],
  );
  TestEquality.equals(
    "custom score distribution",
    paths({
      ...plain,
      level: {
        ...plain.level,
        probabilities: inherited(plain.level.probabilities),
      },
    }),
    ["$input.level"],
  );
  TestEquality.equals(
    "null-prototype records",
    paths(
      dictionary({
        urgent: dictionary(plain.urgent),
        team: dictionary({
          ...plain.team,
          probabilities: dictionary(plain.team.probabilities),
        }),
        level: dictionary({
          ...plain.level,
          probabilities: dictionary(plain.level.probabilities),
        }),
      }),
    ),
    [],
  );
};

interface IDecision {
  /** Does the customer need urgent help? */
  urgent: boolean;

  /** Which team should handle this? */
  team: "billing" | "technical";

  /** How severe is it? */
  level: 0 | 1;
}
