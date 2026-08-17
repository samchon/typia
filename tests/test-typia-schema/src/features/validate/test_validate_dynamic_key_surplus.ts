import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies a key outside every declared key type stays a surplus property while
 * a key inside one but outside its tag is rejected.
 *
 * Both failures used to leave the dynamic-key check through one accepting tail,
 * so making that tail reject (#2347) collapsed them together. They are not the
 * same failure. A key outside a template literal signature is declared nowhere,
 * which is what a surplus property is: `is` accepts it as it accepts any
 * surplus property, and `equals` reports it as one, with `expected` of
 * `"undefined"`. The same key against a `Pattern` tag on a `string` signature
 * _is_ declared -- every string is -- and only the tag broke, so both spellings
 * reject it. Rejecting the first alongside the second broke the
 * `DynamicTemplate`, `DynamicUnion`, and `DynamicComposite` matrices, whose
 * surplus cases read that `expected`.
 *
 * The two declarations below run the same predicate against the key, so nothing
 * but where the constraint sits can explain a difference in their answers.
 *
 * 1. Require the template spelling to accept an outside key under `is` and to
 *    report it as surplus, not as a bad key, under `validateEquals`.
 * 2. Require the tag spelling to reject the same key under both, naming the key
 *    type it declared.
 * 3. Require several template signatures on one object to keep answering the same
 *    way, since that is the shape the generated matrices cover.
 */
export const test_validate_dynamic_key_surplus = (): void => {
  interface ITemplateKey {
    [key: `prefix_${string}`]: string;
  }
  interface IPatternKey {
    [key: string & tags.Pattern<"^prefix_">]: string;
  }

  //----
  // THE KEY TYPE ITSELF: NOTHING DECLARES `wrong`, SO IT IS SURPLUS
  //----
  TestValidator.equals(
    "a key outside the template is surplus, not a violation",
    [
      typia.is<ITemplateKey>({ prefix_a: "x", wrong: "y" }),
      typia.equals<ITemplateKey>({ prefix_a: "x", wrong: "y" }),
      typia.is<ITemplateKey>({ prefix_a: 1 }),
    ],
    [true, false, false],
  );

  const surplus = typia.validateEquals<ITemplateKey>({
    prefix_a: "x",
    wrong: "y",
  });
  TestValidator.equals("the surplus key is reported", surplus.success, false);
  if (surplus.success === false)
    TestValidator.equals(
      "a surplus key keeps the surplus report",
      [
        surplus.errors[0]?.path ?? null,
        surplus.errors[0]?.expected ?? null,
        surplus.errors[0]?.value ?? null,
      ],
      ["$input.wrong", "undefined", "y"],
    );

  //----
  // THE SAME PREDICATE AS A TAG: THE KEY IS DECLARED, SO IT IS REJECTED
  //----
  TestValidator.equals(
    "the same predicate as a tag rejects instead",
    [
      typia.is<IPatternKey>({ prefix_a: "x", wrong: "y" }),
      typia.equals<IPatternKey>({ prefix_a: "x", wrong: "y" }),
      typia.is<IPatternKey>({ prefix_a: "x" }),
    ],
    [false, false, true],
  );

  const rejected = typia.validate<IPatternKey>({ prefix_a: "x", wrong: "y" });
  TestValidator.equals("the bad key is reported", rejected.success, false);
  if (rejected.success === false)
    TestValidator.equals(
      "a bad key names the type it had to satisfy",
      [
        rejected.errors[0]?.path ?? null,
        rejected.errors[0]?.expected ?? null,
        (rejected.errors[0]?.description ?? "").includes("The key `wrong`"),
      ],
      ["$input.wrong", '(string & Pattern<"^prefix_">)', true],
    );

  //----
  // THE MATRIX SHAPE: SEVERAL TEMPLATES, STILL SURPLUS
  //----
  // `DynamicTemplate` and its siblings declare more than one template signature,
  // and their surplus-property cases are what a rejecting tail broke. One
  // signature answering no must not turn into the object answering no.
  interface IManyTemplateKeys {
    [key: `prefix_${string}`]: string;
    [key: `${string}_postfix`]: string;
    [key: `value_${number}`]: string;
  }
  const many = typia.validateEquals<IManyTemplateKeys>({
    prefix_a: "x",
    b_postfix: "y",
    value_1: "z",
    wrong: "w",
  });
  TestValidator.equals(
    "many templates still report surplus",
    [
      typia.is<IManyTemplateKeys>({
        prefix_a: "x",
        b_postfix: "y",
        value_1: "z",
        wrong: "w",
      }),
      many.success,
      many.success === false ? (many.errors[0]?.expected ?? null) : null,
    ],
    [true, false, "undefined"],
  );
};
