import { TagBase } from "./TagBase";

/**
 * Probability requirement for an LLM evaluation decision.
 *
 * `Probability<N>` attaches a probability requirement to a decision that
 * `typia.llm.evaluation<T>()` asks an evaluation model to make. `N` must be in
 * `[0, 1]`:
 *
 * - On a `boolean` property, it is the decision threshold: the value becomes
 *   `true` only when the model's P(true) is at least `N`. Without the tag the
 *   threshold is `0.5`.
 * - On every member of a literal union, it is that member's acceptance minimum:
 *   `decode()` fails when the model selects the member with a probability below
 *   `N`, instead of falling back to a less likely member.
 * - On every member of a literal union used as an array element, where every
 *   member is its own yes/no decision, it is that member's inclusion threshold,
 *   as on a `boolean`.
 *
 * TypeScript enum members cannot carry type tags, so write `@probability N` in
 * the member's JSDoc comment instead. Once one member has a probability
 * requirement, every member must have one. The same comment tag on a property
 * sets the boolean threshold, or supplies the default for every member that
 * carries none: a minimum for a choice or score, a threshold for an array set.
 *
 * The tag carries metadata only. It adds no runtime check to `typia.is()` or
 * `typia.validate()` and no JSON Schema keyword, because it constrains how an
 * evaluation answer is converted, not the value itself.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface ITicketTriage {
 *     // true only when P(true) >= 0.8
 *     refund: boolean & Probability<0.8>;
 *   }
 *
 * @template Value The probability requirement, in `[0, 1]`
 */
export type Probability<Value extends number> = TagBase<{
  target: "boolean" | "string" | "number";
  kind: "probability";
  value: Value;
  exclusive: true;
}>;
