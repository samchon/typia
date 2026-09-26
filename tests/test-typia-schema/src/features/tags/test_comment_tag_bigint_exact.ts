import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies bigint tags past 2^53 hold the integer they state.
 *
 * A bigint comment tag read its value through a double, so `@minimum
 * 9007199254740993` was enforced as 9007199254740992, and `random` drew from
 * the rounded value while the exact `@multipleOf` check rejected it. `random`
 * also checked a bigint `multipleOf` against the double's shortest decimal
 * text, so it gave up on `MultipleOf<18014398509481984n>` although 3 * 2^54
 * satisfies it (#2457). A tag value a double represents exactly is now held
 * exactly, however it is spelled, and `random` draws on integers.
 *
 * 1. Accept each stated bound and reject the integer past it.
 * 2. Require every generated value to satisfy its own validator, for comment and
 *    type tags alike.
 */
export const test_comment_tag_bigint_exact = (): void => {
  const bound: bigint = BigInt("18014398509481984");
  const huge: bigint = BigInt("1152921504606846976");
  const valid: IValue = {
    pinned: bound,
    exponent: huge,
    tripled: BigInt(3) * bound,
    tagged: BigInt(3) * bound,
  };
  TestValidator.predicate("stated values", () => typia.is<IValue>(valid));
  for (const [title, next] of [
    ["pinned below", { ...valid, pinned: bound - BigInt(1) }],
    ["pinned above", { ...valid, pinned: bound + BigInt(1) }],
    ["exponent spelling", { ...valid, exponent: huge + BigInt(1) }],
    [
      "comment multipleOf",
      { ...valid, tripled: BigInt(3) * bound + BigInt(1) },
    ],
    ["type multipleOf", { ...valid, tagged: BigInt(3) * bound + BigInt(1) }],
  ] as const)
    TestValidator.predicate(title, () => typia.is<IValue>(next) === false);

  for (let i: number = 0; i < 100; ++i) {
    const generated: IValue = typia.random<IValue>();
    TestValidator.predicate("random satisfies is", () =>
      typia.is<IValue>(generated),
    );
  }
};

interface IValue {
  /**
   * @minimum 18014398509481984
   * @maximum 18014398509481984
   */
  pinned: bigint;

  /**
   * 2^60, whose double spells 1152921504606847000.
   *
   * @minimum 1.152921504606846976e18
   * @multipleOf 1.152921504606846976e18
   * @maximum 1.152921504606846976e18
   */
  exponent: bigint;

  /**
   * @minimum 50000000000000000
   * @maximum 60000000000000000
   * @multipleOf 18014398509481984
   */
  tripled: bigint;

  tagged: bigint &
    tags.MultipleOf<18014398509481984n> &
    tags.Minimum<50000000000000000n> &
    tags.Maximum<60000000000000000n>;
}
