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
