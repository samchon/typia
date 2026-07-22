import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies typia.random draws every format at a length its own validator
 * accepts, and refuses only genuinely unsatisfiable windows.
 *
 * #2192 converted part of the format set to length-aware builders and left nine
 * formats on the retry driver, which redraws one fixed shape and gives up.
 * Those nine then threw for lengths their own grammar expresses:
 * `Format<"byte">` and `Format<"regex">` return a single constant, so every
 * window excluding 44 and 86 failed, and `ipv4` / `ipv6` / `date-time` / `time`
 * / `duration` / `json-pointer` / `relative-json-pointer` failed for any window
 * their natural shape misses (#2284). Each positive case below pins an exact
 * length, so a generator that merely widens its output cannot pass.
 *
 * 1. Draw each format at an exact length and require `is` of the same type.
 * 2. Repeat with one-sided and wide windows, plus the already-correct controls.
 * 3. Require a window with no realizable length to keep throwing.
 */
export const test_random_format_length_window = (): void => {
  // POSITIVE: an exact length every format's grammar expresses.
  {
    // Base64 encodes three bytes as four characters, so 24 is valid and 25 is
    // not.
    type T = string &
      tags.Format<"byte"> &
      tags.MinLength<24> &
      tags.MaxLength<24>;
    roundTrip(
      "byte exact length",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    type T = string &
      tags.Format<"regex"> &
      tags.MinLength<24> &
      tags.MaxLength<24>;
    roundTrip(
      "regex exact length",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // `0.0.0.0` — every octet single-digit.
    type T = string &
      tags.Format<"ipv4"> &
      tags.MinLength<7> &
      tags.MaxLength<7>;
    roundTrip(
      "ipv4 shortest",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // `255.255.255.255` — every octet three digits.
    type T = string &
      tags.Format<"ipv4"> &
      tags.MinLength<15> &
      tags.MaxLength<15>;
    roundTrip(
      "ipv4 longest",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // `::` — the compressed all-zero address.
    type T = string &
      tags.Format<"ipv6"> &
      tags.MinLength<2> &
      tags.MaxLength<2>;
    roundTrip(
      "ipv6 compressed",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // `0:0:0:0:0:0:0:0` — the shortest uncompressed address.
    type T = string &
      tags.Format<"ipv6"> &
      tags.MinLength<15> &
      tags.MaxLength<15>;
    roundTrip(
      "ipv6 full form",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // A dotted-quad tail is the only form this long.
    type T = string &
      tags.Format<"ipv6"> &
      tags.MinLength<45> &
      tags.MaxLength<45>;
    roundTrip(
      "ipv6 embedded ipv4",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // `2020-01-01T00:00:00Z` — seconds precision, no fraction.
    type T = string &
      tags.Format<"date-time"> &
      tags.MinLength<20> &
      tags.MaxLength<20>;
    roundTrip(
      "date-time without fraction",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    type T = string &
      tags.Format<"date-time"> &
      tags.MinLength<26> &
      tags.MaxLength<26>;
    roundTrip(
      "date-time with fraction",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // `00:00:00Z` — the shortest full time.
    type T = string &
      tags.Format<"time"> &
      tags.MinLength<9> &
      tags.MaxLength<9>;
    roundTrip(
      "time shortest",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // Reachable as either shape: fourteen fraction digits with `Z`, or nine
    // with a `+HH:MM` offset.
    type T = string &
      tags.Format<"time"> &
      tags.MinLength<24> &
      tags.MaxLength<24>;
    roundTrip(
      "time at a length both clock forms reach",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // RFC 3339 leaves `time-secfrac` open above, so nothing past the offset
    // form is out of reach either: thirty fraction digits with `Z`, or
    // twenty-five with an offset.
    type T = string &
      tags.Format<"time"> &
      tags.MinLength<40> &
      tags.MaxLength<40>;
    roundTrip(
      "time far past the offset form",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // Fifteen is the one length above the gap that only the `Z` form reaches:
    // an offset would leave a dot with no digit after it.
    type T = string &
      tags.Format<"time"> &
      tags.MinLength<15> &
      tags.MaxLength<15>;
    roundTrip(
      "time at the length only the Z form reaches",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // Fourteen is the only length the offset shape reaches with no fraction at
    // all; the `Z` shape reaches it with four digits, so the draw picks one.
    type T = string &
      tags.Format<"time"> &
      tags.MinLength<14> &
      tags.MaxLength<14>;
    roundTrip(
      "time at the length a bare offset reaches",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // `P1Y` — one designator is the shortest duration.
    type T = string &
      tags.Format<"duration"> &
      tags.MinLength<3> &
      tags.MaxLength<3>;
    roundTrip(
      "duration shortest",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    type T = string &
      tags.Format<"json-pointer"> &
      tags.MinLength<6> &
      tags.MaxLength<6>;
    roundTrip(
      "json-pointer below the reference prefix",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    // The empty pointer addresses the whole document.
    type T = string & tags.Format<"json-pointer"> & tags.MaxLength<0>;
    roundTrip(
      "json-pointer empty",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    type T = string &
      tags.Format<"relative-json-pointer"> &
      tags.MinLength<1> &
      tags.MaxLength<1>;
    roundTrip(
      "relative-json-pointer shortest",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    type T = string &
      tags.Format<"relative-json-pointer"> &
      tags.MinLength<8> &
      tags.MaxLength<8>;
    roundTrip(
      "relative-json-pointer with a member token",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }

  // ONE-SIDED AND WIDE WINDOWS.
  {
    type T = string &
      tags.Format<"byte"> &
      tags.MinLength<24> &
      tags.MaxLength<40>;
    roundTrip(
      "byte window",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    type T = string & tags.Format<"ipv6"> & tags.MinLength<20>;
    roundTrip(
      "ipv6 lower bound only",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    type T = string & tags.Format<"duration"> & tags.MaxLength<12>;
    roundTrip(
      "duration upper bound only",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }

  // CONTROLS: the unconstrained draws and the already-correct formats.
  {
    type T = string & tags.Format<"byte">;
    roundTrip(
      "byte unconstrained",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    type T = string & tags.Format<"ipv6">;
    roundTrip(
      "ipv6 unconstrained",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    type T = string &
      tags.Format<"uuid"> &
      tags.MinLength<36> &
      tags.MaxLength<36>;
    roundTrip(
      "uuid exact length",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }
  {
    type T = string &
      tags.Format<"date"> &
      tags.MinLength<10> &
      tags.MaxLength<10>;
    roundTrip(
      "date exact length",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
    );
  }

  // NEGATIVE: no length inside the window is realizable.
  assertThrows("byte between two multiples of four", () =>
    typia.random<
      string & tags.Format<"byte"> & tags.MinLength<25> & tags.MaxLength<27>
    >(),
  );
  assertThrows("ipv4 shorter than the shortest address", () =>
    typia.random<string & tags.Format<"ipv4"> & tags.MaxLength<6>>(),
  );
  assertThrows("ipv4 longer than the longest address", () =>
    typia.random<string & tags.Format<"ipv4"> & tags.MinLength<16>>(),
  );
  assertThrows("ipv6 longer than an embedded dotted quad", () =>
    typia.random<string & tags.Format<"ipv6"> & tags.MinLength<46>>(),
  );
  assertThrows("date-time between the two instant forms", () =>
    typia.random<
      string &
        tags.Format<"date-time"> &
        tags.MinLength<21> &
        tags.MaxLength<21>
    >(),
  );
  assertThrows("time between the two clock forms", () =>
    typia.random<
      string & tags.Format<"time"> & tags.MinLength<10> & tags.MaxLength<10>
    >(),
  );
  // The fraction is open above, so a clock's only unreachable lengths are the
  // ones below `HH:MM:SSZ` and the single gap at 10.
  assertThrows("time shorter than the shortest clock", () =>
    typia.random<string & tags.Format<"time"> & tags.MaxLength<8>>(),
  );
  assertThrows("duration shorter than one designator", () =>
    typia.random<string & tags.Format<"duration"> & tags.MaxLength<2>>(),
  );
  assertThrows("uuid at any other length", () =>
    typia.random<string & tags.Format<"uuid"> & tags.MaxLength<35>>(),
  );
};

const COUNT = 200;

const roundTrip = (
  title: string,
  is: (input: unknown) => boolean,
  draw: () => string,
): void => {
  let failures: number = 0;
  let first: string | null = null;
  for (let i = 0; i < COUNT; ++i) {
    const value: string = draw();
    if (is(value) === false) {
      ++failures;
      if (first === null) first = value;
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
