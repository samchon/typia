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
 * The `idn-hostname`/`idn-email` cases below cover a narrower regression of the
 * same class (issue #2215): the length path delegated to the laxer non-idn
 * generators, which emit a one-character TLD (and, for the hostname, a dotless
 * single label), but the idn checkers require a dot plus a `>=2`-character TLD,
 * so every length-tagged draw failed the type's own `is`.
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
    // A short window near the email minimum exercises the shrink path.
    type T = string &
      tags.Format<"email"> &
      tags.MinLength<5> &
      tags.MaxLength<9>;
    const create = typia.createRandom<T>();
    roundTrip(
      "email & short window",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    // A minLength beyond a single 63-char label exercises multi-label building.
    type T = string & tags.Format<"hostname"> & tags.MinLength<80>;
    const create = typia.createRandom<T>();
    roundTrip(
      "hostname & multi-label minLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string &
      tags.Format<"url"> &
      tags.MinLength<40> &
      tags.MaxLength<60>;
    const create = typia.createRandom<T>();
    roundTrip(
      "url & length window",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string &
      tags.Format<"password"> &
      tags.MinLength<40> &
      tags.MaxLength<50>;
    const create = typia.createRandom<T>();
    roundTrip(
      "password & length window",
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

  // IDN formats (issue #2215): the length path must yield a value the stricter
  // idn checker accepts at every draw. idn-hostname shares hostname's structure
  // since #2317, so a single label of one or more characters is valid — the
  // short cases below pin that the generator realizes them instead of throwing
  // (issue #2319).
  {
    // A single label at lengths 1..3, valid since #2317, which the generator
    // used to refuse because it reserved a `.<2-char TLD>` suffix.
    type T = string & tags.Format<"idn-hostname"> & tags.MaxLength<3>;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-hostname & short single label",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string &
      tags.Format<"idn-hostname"> &
      tags.MinLength<1> &
      tags.MaxLength<1>;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-hostname single character",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string & tags.Format<"idn-hostname"> & tags.MinLength<40>;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-hostname & minLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string &
      tags.Format<"idn-hostname"> &
      tags.MinLength<40> &
      tags.MaxLength<64>;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-hostname & minLength & maxLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    // A minLength beyond a single 63-char label exercises multi-label building.
    type T = string & tags.Format<"idn-hostname"> & tags.MinLength<80>;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-hostname & multi-label minLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    // A short window forces the short path; a single label fills it.
    type T = string &
      tags.Format<"idn-hostname"> &
      tags.MinLength<4> &
      tags.MaxLength<8>;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-hostname & short window",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string & tags.Format<"idn-email"> & tags.MinLength<40>;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-email & minLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string &
      tags.Format<"idn-email"> &
      tags.MinLength<40> &
      tags.MaxLength<64>;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-email & minLength & maxLength",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    // A short window near the idn-email minimum (`x@x.yy`) forces the short path.
    type T = string &
      tags.Format<"idn-email"> &
      tags.MinLength<6> &
      tags.MaxLength<9>;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-email & short window",
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
  {
    type T = string &
      tags.Format<"idn-hostname"> &
      tags.MinLength<12> &
      tags.MaxLength<12>;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-hostname exact length",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string &
      tags.Format<"idn-email"> &
      tags.MinLength<12> &
      tags.MaxLength<12>;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-email exact length",
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
    // Unconstrained idn formats already passed; pin that they still do.
    type T = string & tags.Format<"idn-hostname">;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-hostname only",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    type T = string & tags.Format<"idn-email">;
    const create = typia.createRandom<T>();
    roundTrip(
      "idn-email only",
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
  // Below the idn-email minimum (`x@x.yy` = 6) there is no matching value to
  // emit, so the draw must throw rather than yield a `is`-rejected string.
  assertThrows("idn-email & impossible maxLength", () =>
    typia.random<string & tags.Format<"idn-email"> & tags.MaxLength<5>>(),
  );
  // idn-hostname now accepts a single label of any length, so the only
  // unsatisfiable window is the empty one: `MaxLength<0>` admits no value.
  assertThrows("idn-hostname & impossible maxLength", () =>
    typia.random<string & tags.Format<"idn-hostname"> & tags.MaxLength<0>>(),
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
