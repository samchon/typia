import { TestEquality } from "@typia/template/equality";
import typia from "typia";

type IOptional = { a?: number } | { b?: string };
type IShared = { a?: number; c?: boolean } | { b?: string; c?: boolean };
type INested = { wrap: { a?: number } | { b?: string } };

/**
 * Verifies compare.equals resolves a non-discriminable object union to one
 * member before comparing.
 *
 * A union whose distinguishing keys are all optional has no required
 * discriminant, so UnionPredicator yields no specialization and `equals` used
 * to fall back to a flat OR of the member comparators. The wrong member's
 * comparator then matched on absent keys comparing `undefined === undefined`
 * while the keys that actually differ were not declared by that member, so
 * `equals({ a: 1 }, { a: 2 })` and even `equals({ a: 1 }, {})` were `true`
 * (samchon/typia#2225). Each operand must instead resolve to the first member
 * it matches — the resolution `plain.clone` already uses — so that operands
 * landing on different members are unequal and the shared member decides the
 * rest.
 *
 * 1. Compare distinct references that differ under the resolved member, including
 *    a populated object against `{}`.
 * 2. Compare distinct references that agree, and operands the type rejects.
 * 3. Assert `equals` agrees with `plain.clone` over every ordered pair of samples:
 *    two values are equal exactly when they clone to the same member with the
 *    same declared payload.
 */
export const test_compare_equals_object_union_non_discriminable = (): void => {
  const equals = typia.compare.createEquals<IOptional>();
  const clone = typia.plain.createClone<IOptional>();
  const is = typia.createIs<IOptional>();

  TestEquality.equals(
    "distinct values of the first member",
    false,
    equals({ a: 1 }, { a: 2 }),
  );
  TestEquality.equals(
    "populated object against empty object",
    false,
    equals({ a: 1 }, {}),
  );
  TestEquality.equals(
    "empty object against populated object",
    false,
    equals({}, { a: 1 }),
  );
  TestEquality.equals(
    "values of different members",
    false,
    equals({ a: 1 }, { b: "p" }),
  );
  TestEquality.equals(
    "identical values of distinct reference",
    true,
    equals({ a: 1 }, { a: 1 }),
  );
  TestEquality.equals("two empty objects", true, equals({}, {}));
  TestEquality.equals(
    "an operand the union rejects",
    false,
    equals({ a: "x", b: 1 } as any, { a: "x", b: 1 } as any),
  );

  // `equals` must agree with the member `clone` resolves to: two values are
  // equal exactly when they clone to the same member with the same payload.
  // `shape` keeps a declared-but-absent key visible, which plain JSON drops, so
  // members declaring different keys never look alike.
  const shape = (value: unknown): string =>
    JSON.stringify(value, (_key, inner) =>
      inner === undefined ? null : inner,
    );
  const samples: IOptional[] = [
    {},
    { a: 1 },
    { a: 2 },
    { b: "p" },
    { b: "q" },
    { a: 1, b: "p" } as IOptional,
    { a: "x" } as any,
    { a: "x", b: 1 } as any,
  ];
  for (const x of samples)
    for (const y of samples) {
      const left = JSON.parse(JSON.stringify(x));
      const right = JSON.parse(JSON.stringify(y));
      const title = `${JSON.stringify(x)} vs ${JSON.stringify(y)}`;
      if (is(left) === false || is(right) === false)
        TestEquality.equals(
          `rejected operand is equal to nothing: ${title}`,
          false,
          equals(left, right),
        );
      else
        TestEquality.equals(
          `equals agrees with clone: ${title}`,
          shape(clone(left)) === shape(clone(right)),
          equals(left, right),
        );
    }

  // A key both members share still compares within one resolved member.
  const shared = typia.compare.createEquals<IShared>();
  TestEquality.equals(
    "shared key differs",
    false,
    shared({ c: true }, { c: false }),
  );
  TestEquality.equals(
    "shared key with member payload",
    false,
    shared({ a: 1, c: true }, { a: 2, c: true }),
  );
  TestEquality.equals(
    "shared key identical",
    true,
    shared({ a: 1, c: true }, { a: 1, c: true }),
  );

  // The same resolution applies to a nested union property.
  const nested = typia.compare.createEquals<INested>();
  TestEquality.equals(
    "nested union differs",
    false,
    nested({ wrap: { a: 1 } }, { wrap: { a: 2 } }),
  );
  TestEquality.equals(
    "nested union populated against empty",
    false,
    nested({ wrap: { a: 1 } }, { wrap: {} }),
  );
  TestEquality.equals(
    "nested union identical",
    true,
    nested({ wrap: { a: 1 } }, { wrap: { a: 1 } }),
  );
};
