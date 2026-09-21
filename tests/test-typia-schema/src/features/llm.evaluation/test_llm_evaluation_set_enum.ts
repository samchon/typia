import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation treats an array of a string enum as a set.
 *
 * A set's elements may be a string enum, whose members carry what a literal
 * union cannot: a JSDoc description, forwarded into that member's own boolean
 * question, and an `@probability` comment, which is the member's inclusion
 * threshold rather than a choice minimum. The literal-set tests cannot reach
 * either source.
 *
 * 1. Declare an array of an enum whose members have distinct thresholds and one
 *    documented description.
 * 2. Assert each member question carries its description.
 * 3. Validate probabilities around the member threshold and the 0.5 default.
 */
export const test_llm_evaluation_set_enum = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  TestEquality.equals("questions", evaluation.questions, {
    "channels.email": {
      type: "boolean",
      instructions:
        'Which channels does the customer accept?\n\nDoes the option "email" apply?\nReply by email',
    },
    "channels.phone": {
      type: "boolean",
      instructions:
        'Which channels does the customer accept?\n\nDoes the option "phone" apply?',
    },
  });

  const run = (email: number, phone: number) => {
    const result = evaluation.decode({
      "channels.email": { type: "boolean", probability: email },
      "channels.phone": { type: "boolean", probability: phone },
    });
    if (result.success === false) throw new Error("unexpected failure");
    return result.data.channels;
  };
  TestEquality.equals("below", run(0.79, 0.49), []);
  TestEquality.equals("at", run(0.8, 0.5), [Channel.email, Channel.phone]);
};

enum Channel {
  /**
   * Reply by email
   *
   * @probability 0.8
   */
  email = "email",
  /** @probability 0.5 */
  phone = "phone",
}

interface IDecision {
  /** Which channels does the customer accept? */
  channels: Channel[];
}
