import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.plain.createClone, typia.compare.createEquals, typia.compare.equals is evaluated by the native host on the types declared in this case and the result is checked by 22 assertions (is accepts left b member; is accepts right b member; factory compares different b; direct compares different b; factory compares equal b; direct compares equal b). The case documents its purpose as: Verifies compare.equals preserves template-literal object-union membership.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The non-discriminable fallback introduced for samchon/typia#2225 once weakened a template-literal property to `typeof string`. Valid `b_*` values then resolved to the `a_*` member, so a difference in `b` disappeared even though is and clone selected the later member and preserved that property. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is accepts left b member; is accepts right b member; factory compares different b; direct compares different b; factory compares equal b; direct compares equal b) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_compare_equals_object_union_template_literal is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals("is accepts left b member", true, is(left));
  TestEquality.equals("is accepts right b member", true, is(right));
  TestEquality.equals<ITemplateUnion>(
    "clone preserves left b member",
    left,
    clone(left),
  );
  TestEquality.equals<ITemplateUnion>(
    "clone preserves right b member",
    right,
    clone(right),
  );
  TestEquality.equals(
    "factory compares different b",
    false,
    equals(left, right),
  );
  TestEquality.equals(
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
  TestEquality.equals(
    "factory compares equal b",
    true,
    equals(equalLeft, equalRight),
  );
  TestEquality.equals(
    "direct compares equal b",
    true,
    direct(equalLeft, equalRight),
  );
  TestEquality.equals(
    "a member compares declared properties",
    false,
    equals({ kind: "a_x", common: "left" }, { kind: "a_x", common: "right" }),
  );
  TestEquality.equals(
    "equal a members",
    true,
    equals({ kind: "a_x", common: "same" }, { kind: "a_x", common: "same" }),
  );
  TestEquality.equals(
    "a and b members differ",
    false,
    equals({ kind: "a_x", common: "same" }, { kind: "b_x", common: "same" }),
  );

  const invalidLeft = { kind: "c_x", common: "same" } as any;
  const invalidRight = { kind: "c_x", common: "same" } as any;
  TestEquality.equals(
    "is rejects invalid discriminator",
    false,
    is(invalidLeft),
  );
  TestEquality.equals(
    "factory rejects invalid discriminator",
    false,
    equals(invalidLeft, invalidRight),
  );
  TestEquality.equals(
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
  TestEquality.equals("nested is accepts left", true, nestedIs(nestedLeft));
  TestEquality.equals("nested is accepts right", true, nestedIs(nestedRight));
  TestEquality.equals(
    "nested clone preserves left",
    nestedLeft,
    nestedClone(nestedLeft),
  );
  TestEquality.equals(
    "nested clone preserves right",
    nestedRight,
    nestedClone(nestedRight),
  );
  TestEquality.equals(
    "nested factory compares different b",
    false,
    nestedEquals(nestedLeft, nestedRight),
  );
  TestEquality.equals(
    "nested direct compares different b",
    false,
    nestedDirect(nestedLeft, nestedRight),
  );
  TestEquality.equals(
    "nested factory compares equal b",
    true,
    nestedEquals({ value: equalLeft }, { value: equalRight }),
  );
  TestEquality.equals(
    "nested rejects invalid discriminator",
    false,
    nestedEquals({ value: invalidLeft }, { value: invalidRight }),
  );
};
