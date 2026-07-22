import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

type Bool = Array<boolean> & tags.UniqueItems;
type Literal = Array<"a" | "b"> & tags.UniqueItems & tags.MinItems<2>;
type Enumeration = Array<1 | 2 | 3> & tags.UniqueItems;
type Bounded = Array<
  number & tags.Type<"uint32"> & tags.Minimum<0> & tags.Maximum<1>
> &
  tags.UniqueItems;
type Narrow = Array<number & tags.Type<"uint32"> & tags.Maximum<3>> &
  tags.UniqueItems &
  tags.MinItems<2>;
type Single = Array<true> & tags.UniqueItems;
type Nested = Array<Array<boolean> & tags.UniqueItems & tags.MaxItems<2>> &
  tags.UniqueItems;
type Exact = Array<boolean> &
  tags.UniqueItems &
  tags.MinItems<2> &
  tags.MaxItems<2>;
type Capped = Array<boolean> & tags.UniqueItems & tags.MaxItems<2>;
type Impossible = Array<boolean> & tags.UniqueItems & tags.MinItems<3>;
type Wide = Array<number & tags.Type<"uint32">> & tags.UniqueItems;

const DRAWS = 128;

/**
 * Verifies a `UniqueItems` array is drawn at a count its element domain can
 * reach.
 *
 * `_randomArray` picks the item count before anything is known about how many
 * distinct values the element can take, so every domain smaller than the drawn
 * count used to exhaust the retry budget and throw. `Array<boolean> &
 * UniqueItems` failed on two draws in three, which made a generator whose whole
 * job is producing a valid value flaky for a declaration that `[true, false]`
 * satisfies. #2032 gave that failure its message and #2304 widened two element
 * domains that had collapsed to one value; neither changed how the count is
 * chosen.
 *
 * What keeps the class sealed is that each row bounds the draw from both sides.
 * A floor above the domain must still fail, so "never throw" cannot pass; every
 * small domain must be reached in full, so a generator that gave up after one
 * element cannot; and a wide domain must keep varying its length, so a clamp
 * applied to every unique array cannot either.
 *
 * 1. Draw each small-domain declaration many times, requiring every value to
 *    satisfy its own type, no draw to exceed the domain, and some draw to reach
 *    all of it.
 * 2. Require a window whose floor exceeds the domain to throw every time, naming
 *    the domain.
 * 3. Require a wide domain to still produce several distinct lengths.
 */
export const test_random_unique_items_domain = (): void => {
  // POSITIVE: a domain smaller than the count the generator would like.
  produces("boolean", () => typia.random<Bool>(), typia.createIs<Bool>(), 2);
  produces(
    "literal union",
    () => typia.random<Literal>(),
    typia.createIs<Literal>(),
    2,
  );
  produces(
    "enumeration",
    () => typia.random<Enumeration>(),
    typia.createIs<Enumeration>(),
    3,
  );
  produces(
    "bounded integer",
    () => typia.random<Bounded>(),
    typia.createIs<Bounded>(),
    2,
  );
  produces(
    "narrow integer with a floor",
    () => typia.random<Narrow>(),
    typia.createIs<Narrow>(),
    4,
  );
  produces(
    "single-value domain",
    () => typia.random<Single>(),
    typia.createIs<Single>(),
    1,
  );
  // The inner array is one or two unique booleans, so the outer domain is
  // `[true]`, `[false]`, `[true, false]`, and `[false, true]`.
  produces(
    "arrays of a small domain",
    () => typia.random<Nested>(),
    typia.createIs<Nested>(),
    4,
  );

  // BOUNDARY: a window that ends exactly at the domain, and one inside it.
  produces(
    "window ending at the domain",
    () => typia.random<Exact>(),
    typia.createIs<Exact>(),
    2,
  );
  produces(
    "window inside the domain",
    () => typia.random<Capped>(),
    typia.createIs<Capped>(),
    2,
  );

  // NEGATIVE: the floor is above everything the domain can produce.
  for (let i = 0; i < 16; ++i) {
    let message: string | null = null;
    try {
      typia.random<Impossible>();
    } catch (error) {
      message = error instanceof Error ? error.message : String(error);
    }
    TestValidator.predicate(
      "a floor above the domain fails, naming the domain",
      message !== null && message.includes("domain"),
    );
  }

  // CONTROL: a wide domain must keep the length spread it always had. The rows
  // above bound a draw by its domain, which a domain of a hundred never
  // reaches, so this is the only row a uniform clamp would fail.
  const lengths: Set<number> = new Set();
  const isWide = typia.createIs<Wide>();
  for (let i = 0; i < DRAWS; ++i) {
    const value: Wide = typia.random<Wide>();
    TestValidator.predicate("a wide domain stays valid", isWide(value));
    lengths.add(value.length);
  }
  TestValidator.predicate(
    `a wide domain keeps varying its length (${[...lengths].sort((a, b) => a - b).join(",")})`,
    lengths.size >= 3,
  );
};

/**
 * Draws `name` many times and requires the result to stay inside its element
 * domain and to reach all of it.
 *
 * `domain` is both bounds at once: no draw may exceed it, because the elements
 * are distinct, and some draw must hit it, because every window here reaches at
 * least that far. Without the second half, a generator that gave up after one
 * element would satisfy every other assertion in this file.
 */
const produces = <T extends unknown[]>(
  name: string,
  random: () => T,
  is: (input: unknown) => boolean,
  domain: number,
): void => {
  let longest: number = 0;
  for (let i = 0; i < DRAWS; ++i) {
    const value: T = random();
    TestValidator.predicate(`${name} draws a valid value`, is(value));
    TestValidator.predicate(
      `${name} draws no more than its domain holds`,
      value.length <= domain,
    );
    longest = Math.max(longest, value.length);
  }
  TestValidator.predicate(
    `${name} reaches its whole domain (${longest} of ${domain})`,
    longest === domain,
  );
};
