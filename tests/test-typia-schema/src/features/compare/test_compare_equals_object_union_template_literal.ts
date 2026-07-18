import { TestValidator } from "@nestia/e2e";
import typia from "typia";

type ITemplateUnion =
  | { kind: `a_${string}`; common: string }
  | { kind: `b_${string}`; common: string; b?: string };
type INested = { value: ITemplateUnion };

/**
 * Verifies compare.equals preserves template-literal object-union membership.
 *
 * The non-discriminable fallback introduced for samchon/typia#2225 once
 * weakened a template-literal property to `typeof string`. Valid `b_*` values
 * then resolved to the `a_*` member, so a difference in `b` disappeared even
 * though is and clone selected the later member and preserved that property.
 *
 * 1. Prove is accepts two `b_*` witnesses and clone preserves their distinct `b`
 *    values.
 * 2. Exercise different and equal `b_*` values, `a_*` values, cross-member values,
 *    and invalid discriminators through factory and direct equals.
 * 3. Repeat the membership controls with the union nested in an object.
 */
export const test_compare_equals_object_union_template_literal = (): void => {
  const is = typia.createIs<ITemplateUnion>();
  const clone = typia.plain.createClone<ITemplateUnion>();
  const equals = typia.compare.createEquals<ITemplateUnion>();
  const direct = (x: ITemplateUnion, y: ITemplateUnion): boolean =>
    typia.compare.equals<ITemplateUnion>(x, y);

  const left = {
    kind: "b_x",
    common: "same",
    b: "left",
  } satisfies ITemplateUnion;
  const right = {
    kind: "b_x",
    common: "same",
    b: "right",
  } satisfies ITemplateUnion;
  TestValidator.equals("is accepts left b member", true, is(left));
  TestValidator.equals("is accepts right b member", true, is(right));
  TestValidator.equals<ITemplateUnion>(
    "clone preserves left b member",
    left,
    clone(left),
  );
  TestValidator.equals<ITemplateUnion>(
    "clone preserves right b member",
    right,
    clone(right),
  );
  TestValidator.equals(
    "factory compares different b",
    false,
    equals(left, right),
  );
  TestValidator.equals(
    "direct compares different b",
    false,
    direct(left, right),
  );

  const equalLeft = {
    kind: "b_x",
    common: "same",
    b: "same",
  } satisfies ITemplateUnion;
  const equalRight = { ...equalLeft } satisfies ITemplateUnion;
  TestValidator.equals(
    "factory compares equal b",
    true,
    equals(equalLeft, equalRight),
  );
  TestValidator.equals(
    "direct compares equal b",
    true,
    direct(equalLeft, equalRight),
  );
  TestValidator.equals(
    "a member compares declared properties",
    false,
    equals({ kind: "a_x", common: "left" }, { kind: "a_x", common: "right" }),
  );
  TestValidator.equals(
    "equal a members",
    true,
    equals({ kind: "a_x", common: "same" }, { kind: "a_x", common: "same" }),
  );
  TestValidator.equals(
    "a and b members differ",
    false,
    equals({ kind: "a_x", common: "same" }, { kind: "b_x", common: "same" }),
  );

  const invalidLeft = { kind: "c_x", common: "same" } as any;
  const invalidRight = { kind: "c_x", common: "same" } as any;
  TestValidator.equals(
    "is rejects invalid discriminator",
    false,
    is(invalidLeft),
  );
  TestValidator.equals(
    "factory rejects invalid discriminator",
    false,
    equals(invalidLeft, invalidRight),
  );
  TestValidator.equals(
    "direct rejects invalid discriminator",
    false,
    direct(invalidLeft, invalidRight),
  );

  const nestedIs = typia.createIs<INested>();
  const nestedClone = typia.plain.createClone<INested>();
  const nestedEquals = typia.compare.createEquals<INested>();
  const nestedDirect = (x: INested, y: INested): boolean =>
    typia.compare.equals<INested>(x, y);
  const nestedLeft: INested = { value: left };
  const nestedRight: INested = { value: right };
  TestValidator.equals("nested is accepts left", true, nestedIs(nestedLeft));
  TestValidator.equals("nested is accepts right", true, nestedIs(nestedRight));
  TestValidator.equals(
    "nested clone preserves left",
    nestedLeft,
    nestedClone(nestedLeft),
  );
  TestValidator.equals(
    "nested clone preserves right",
    nestedRight,
    nestedClone(nestedRight),
  );
  TestValidator.equals(
    "nested factory compares different b",
    false,
    nestedEquals(nestedLeft, nestedRight),
  );
  TestValidator.equals(
    "nested direct compares different b",
    false,
    nestedDirect(nestedLeft, nestedRight),
  );
  TestValidator.equals(
    "nested factory compares equal b",
    true,
    nestedEquals({ value: equalLeft }, { value: equalRight }),
  );
  TestValidator.equals(
    "nested rejects invalid discriminator",
    false,
    nestedEquals({ value: invalidLeft }, { value: invalidRight }),
  );
};
