import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation decode rejects malformed answer values.
 *
 * The AI SDK `EvaluationModelV4` answer spec bounds every value: P(true) is in
 * `[0, 1]`, a choice is one declared maximum-probability option, a score is the
 * distribution's fractional weighted mean in `[0, levels - 1]`, and an optional
 * distribution contains every declared option or level and sums to one. Each
 * malformed value must fail on its own decision path, while the well-formed
 * neighbor in the same map still converts. A changing getter must not replace a
 * checked probability and bypass an enum member's minimum.
 *
 * 1. Build one answer map per malformed case, next to a valid control.
 * 2. Decode each map.
 * 3. Assert exactly the malformed path fails.
 * 4. Prove an accessor cannot switch values between checking and conversion.
 *
 * @evidence contracts/testing.md#behavioral-verification A valid three-family answer map decodes successfully; each malformed boolean/choice/score patch reports only its authored failing path. A changing distribution getter cannot bypass a member minimum and is read once.
 * @evidence contracts/testing.md#independent-expectations The public evaluation answer bounds, complete normalized distributions, selected maximum and weighted-score contract determine the table verdicts. Literal valid data and paths are authored independently; the getter counter makes snapshot behavior observable.
 * @evidence contracts/testing.md#distinguishing-cases Wrong kind, nonfinite/out-of-range values, foreign/missing distribution entries, wrong total/maximum/mean and changing getter remain distinct while untouched valid neighbors must not fail.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_decode_rejects_malformed_answers is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Wrong kind, nonfinite/out-of-range values, foreign/missing distribution entries, wrong total/maximum/mean and changing getter remain distinct while untouched valid neighbors must not fail. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_decode_rejects_malformed_answers =
  (): void => {
    const evaluation = typia.llm.evaluation<IDecision>();
    const valid = {
      urgent: { type: "boolean", probability: 0.5 },
      team: {
        type: "choice",
        choice: "billing",
        probabilities: { billing: 0.6, technical: 0.4 },
      },
      level: {
        type: "score",
        score: 1.1,
        probabilities: { "0": 0.2, "1": 0.5, "2": 0.3 },
      },
    };
    const cases: Array<[string, Record<string, unknown>, string]> = [
      [
        "boolean over one",
        { urgent: { type: "boolean", probability: 1.01 } },
        "$input.urgent",
      ],
      [
        "boolean negative",
        { urgent: { type: "noul", noul: -0.01 } },
        "$input.urgent",
      ],
      [
        "boolean NaN",
        { urgent: { type: "boolean", probability: NaN } },
        "$input.urgent",
      ],
      [
        "boolean wrong type",
        { urgent: { type: "choice", choice: "billing" } },
        "$input.urgent",
      ],
      ["boolean scalar", { urgent: true }, "$input.urgent"],
      [
        "choice undeclared",
        { team: { type: "choice", choice: "sales" } },
        "$input.team",
      ],
      [
        "choice wrong type",
        { team: { type: "score", score: 0 } },
        "$input.team",
      ],
      [
        "choice foreign probability",
        {
          team: {
            type: "choice",
            choice: "billing",
            probabilities: { sales: 1 },
          },
        },
        "$input.team",
      ],
      [
        "choice probability over one",
        {
          team: {
            type: "choice",
            choice: "billing",
            probabilities: { billing: 2 },
          },
        },
        "$input.team",
      ],
      [
        "choice partial distribution",
        {
          team: {
            type: "choice",
            choice: "billing",
            probabilities: { billing: 1 },
          },
        },
        "$input.team",
      ],
      [
        "choice distribution does not sum to one",
        {
          team: {
            type: "choice",
            choice: "billing",
            probabilities: { billing: 0.4, technical: 0.4 },
          },
        },
        "$input.team",
      ],
      [
        "choice is not a maximum",
        {
          team: {
            type: "choice",
            choice: "billing",
            probabilities: { billing: 0.4, technical: 0.6 },
          },
        },
        "$input.team",
      ],
      [
        "score over last",
        { level: { type: "score", score: 2.01 } },
        "$input.level",
      ],
      [
        "score negative",
        { level: { type: "score", score: -0.1 } },
        "$input.level",
      ],
      [
        "score infinite",
        { level: { type: "score", score: Infinity } },
        "$input.level",
      ],
      [
        "score foreign index",
        { level: { type: "score", score: 1, probabilities: { "3": 1 } } },
        "$input.level",
      ],
      [
        "score partial distribution",
        {
          level: {
            type: "score",
            score: 0,
            probabilities: { "0": 1, "1": 0 },
          },
        },
        "$input.level",
      ],
      [
        "score distribution does not sum to one",
        {
          level: {
            type: "score",
            score: 1,
            probabilities: { "0": 0.2, "1": 0.2, "2": 0.2 },
          },
        },
        "$input.level",
      ],
      [
        "score disagrees with distribution",
        {
          level: {
            type: "score",
            score: 0,
            probabilities: { "0": 0, "1": 0, "2": 1 },
          },
        },
        "$input.level",
      ],
    ];

    TestEquality.equals("control", evaluation.decode(valid).success, true);
    for (const [title, patch, path] of cases) {
      const result: IValidation<IDecision> = evaluation.decode({
        ...valid,
        ...patch,
      });
      TestEquality.equals(
        title,
        result.success ? [] : result.errors.map((e) => e.path),
        [path],
      );
    }

    let reads = 0;
    const changing = { technical: 0.3, sales: 0.3 } as Record<string, unknown>;
    Object.defineProperty(changing, "billing", {
      enumerable: true,
      get: () => (++reads === 1 ? 0.4 : "1"),
    });
    const gated = typia.llm.evaluation<IGatedDecision>();
    TestEquality.equals(
      "changing distribution getter cannot bypass member minimum",
      gated.decode({
        team: {
          type: "choice",
          choice: "billing",
          probabilities: changing,
        },
      }).success,
      false,
    );
    TestEquality.equals("probability read once", reads, 1);
  };

interface IDecision {
  /** Is it urgent? */
  urgent: boolean;

  /** Which team? */
  team: "billing" | "technical";

  /** How severe? */
  level: 0 | 1 | 2;
}

enum GatedTeam {
  /** @probability 0.5 */
  billing = "billing",
  /** @probability 0 */
  technical = "technical",
  /** @probability 0 */
  sales = "sales",
}

interface IGatedDecision {
  /** Which team? */
  team: GatedTeam;
}
