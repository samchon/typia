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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.evaluation is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (plain records; custom answer map; custom boolean answer; custom choice answer; custom score answer; custom choice distribution). The case documents its purpose as: Verifies the record boundary for untrusted evaluation answers.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: A custom prototype is not a response record, even when every required key is an own property. Null-prototype dictionaries remain valid response records. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (plain records; custom answer map; custom boolean answer; custom choice answer; custom score answer; custom choice distribution) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_evaluation_decode_rejects_nonrecords is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
