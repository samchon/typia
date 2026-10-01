import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies typia.llm.evaluation includes set members at their thresholds.
 *
 * A literal-set array asks one independent boolean per member, so each member
 * is included iff its P(true) reaches its own threshold: the member's
 * `tags.Probability<N>` first, then the property's `@probability`, then `0.5`.
 * Inclusion follows the order the member questions are emitted in, typia's
 * canonical member order, never the key order of the answer map.
 *
 * 1. Declare a set with one tagged member under a property default, and a plain
 *    set.
 * 2. Validate probabilities around each threshold.
 * 3. Assert the included members.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.evaluation is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (below both; at both; only default). The case documents its purpose as: Verifies typia.llm.evaluation includes set members at their thresholds.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: A literal-set array asks one independent boolean per member, so each member is included iff its P(true) reaches its own threshold: the member's `tags.Probability<N>` first, then the property's `@probability`, then `0.5`. Inclusion follows the order the member questions are emitted in, typia's canonical member order, never the key order of the answer map. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (below both; at both; only default) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_evaluation_set_threshold is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_evaluation_set_threshold = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const run = (p: { card: number; loan: number; plain: number }) => {
    const result = evaluation.decode({
      "products.loan": { type: "boolean", probability: p.loan },
      "products.card": { type: "boolean", probability: p.card },
      "channels.email": { type: "boolean", probability: p.plain },
      "channels.phone": { type: "boolean", probability: 1 - p.plain },
    });
    if (result.success === false) throw new Error("unexpected failure");
    return result.data;
  };

  TestEquality.equals(
    "below both",
    run({ card: 0.89, loan: 0.69, plain: 0.49 }),
    {
      products: [],
      channels: ["phone"],
    },
  );
  TestEquality.equals("at both", run({ card: 0.9, loan: 0.7, plain: 0.5 }), {
    products: ["card", "loan"],
    channels: ["email", "phone"],
  });
  TestEquality.equals("only default", run({ card: 0.8, loan: 0.8, plain: 1 }), {
    products: ["loan"],
    channels: ["email"],
  });
};

interface IDecision {
  /**
   * Which products does the customer mention?
   *
   * @probability 0.7
   */
  products: Array<("card" & tags.Probability<0.9>) | "loan">;

  /** Which channels does the customer accept? */
  channels: Array<"email" | "phone">;
}
