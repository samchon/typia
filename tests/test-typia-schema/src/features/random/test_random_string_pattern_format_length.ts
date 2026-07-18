import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies typia.random honors minLength/maxLength on a string leaf that also
 * carries a pattern or format.
 *
 * The generator's format and pattern branches used to drop the length bounds,
 * so a satisfiable constrained string was drawn at the wrong length and failed
 * its own validator: `Pattern<"^[0-9]+$"> & MinLength<10>`, the same pattern
 * with `MaxLength<3>`, and `Format<"email"> & MinLength<40>` all produced
 * `is`-rejected values. A genuinely unsatisfiable combination must be rejected
 * with a throw the way an impossible numeric range already is, never silently
 * produced. This round trip pins both directions.
 *
 * 1. Draw a large sample of each satisfiable pattern/format + length type.
 * 2. Require every draw to pass `is` of the same type and honor the bounds.
 * 3. Require an unsatisfiable pattern/format + length type to throw on draw.
 */
export const test_random_string_pattern_format_length = (): void => {
  // POSITIVE: every satisfiable combination round-trips through `is`.
  {
    type T = string & tags.Pattern<"^[0-9]+$"> & tags.MinLength<10>;
    const create = typia.createRandom<T>();
    roundTrip(
      "pattern & minLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string & tags.Pattern<"^[0-9]+$"> & tags.MaxLength<3>;
    const create = typia.createRandom<T>();
    roundTrip(
      "pattern & maxLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string &
      tags.Pattern<"^[0-9]+$"> &
      tags.MinLength<10> &
      tags.MaxLength<20>;
    const create = typia.createRandom<T>();
    roundTrip(
      "pattern & minLength & maxLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string & tags.Format<"email"> & tags.MinLength<40>;
    const create = typia.createRandom<T>();
    roundTrip(
      "email & minLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string &
      tags.Format<"email"> &
      tags.MinLength<40> &
      tags.MaxLength<64>;
    const create = typia.createRandom<T>();
    roundTrip(
      "email & minLength & maxLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    // A fixed-length format whose natural length already satisfies the bound.
    type T = string & tags.Format<"uuid"> & tags.MinLength<10>;
    const create = typia.createRandom<T>();
    roundTrip(
      "uuid & compatible minLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }

  // BOUNDARY: an exactly-pinned length window still round-trips.
  {
    type T = string &
      tags.Pattern<"^[0-9]+$"> &
      tags.MinLength<8> &
      tags.MaxLength<8>;
    const create = typia.createRandom<T>();
    roundTrip(
      "pattern exact length",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }

  // CONTROLS: format-only, pattern-only, and length-only stay correct.
  {
    type T = string & tags.Pattern<"^[0-9]+$">;
    const create = typia.createRandom<T>();
    roundTrip(
      "pattern only",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string & tags.Format<"email">;
    const create = typia.createRandom<T>();
    roundTrip(
      "email only",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string & tags.MinLength<10>;
    const create = typia.createRandom<T>();
    roundTrip(
      "minLength only",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }

  // NEGATIVE: genuinely unsatisfiable combinations throw on draw.
  assertThrows("email & impossible maxLength", () =>
    typia.random<string & tags.Format<"email"> & tags.MaxLength<3>>(),
  );
  assertThrows("fixed-length pattern & conflicting minLength", () =>
    typia.random<string & tags.Pattern<"^[0-9]{5}$"> & tags.MinLength<10>>(),
  );
  assertThrows("fixed-length format & conflicting maxLength", () =>
    typia.random<string & tags.Format<"uuid"> & tags.MaxLength<10>>(),
  );
};

const COUNT = 1_000;

const roundTrip = (
  title: string,
  is: (input: unknown) => boolean,
  ...draws: Array<() => unknown>
): void => {
  let failures: number = 0;
  let first: string | null = null;
  for (let i = 0; i < COUNT; ++i) {
    const value: unknown = draws[i % draws.length]!();
    if (is(value) === false) {
      ++failures;
      if (first === null) first = String(value);
    }
  }
  TestValidator.equals(`${title} (first invalid: ${first})`, failures, 0);
};

const assertThrows = (title: string, closure: () => unknown): void => {
  let thrown: boolean = false;
  try {
    closure();
  } catch {
    thrown = true;
  }
  TestValidator.equals(title, thrown, true);
};
