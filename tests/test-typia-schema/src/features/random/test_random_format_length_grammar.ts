import { TestValidator } from "@nestia/e2e";
import { _isFormatByte } from "typia/lib/internal/_isFormatByte";
import { _isFormatDate } from "typia/lib/internal/_isFormatDate";
import { _isFormatDateTime } from "typia/lib/internal/_isFormatDateTime";
import { _isFormatDuration } from "typia/lib/internal/_isFormatDuration";
import { _isFormatIpv4 } from "typia/lib/internal/_isFormatIpv4";
import { _isFormatIpv6 } from "typia/lib/internal/_isFormatIpv6";
import { _isFormatJsonPointer } from "typia/lib/internal/_isFormatJsonPointer";
import { _isFormatRegex } from "typia/lib/internal/_isFormatRegex";
import { _isFormatRelativeJsonPointer } from "typia/lib/internal/_isFormatRelativeJsonPointer";
import { _isFormatTime } from "typia/lib/internal/_isFormatTime";
import { _isFormatUuid } from "typia/lib/internal/_isFormatUuid";
import { _randomFormatByte } from "typia/lib/internal/_randomFormatByte";
import { _randomFormatDate } from "typia/lib/internal/_randomFormatDate";
import { _randomFormatDatetime } from "typia/lib/internal/_randomFormatDatetime";
import { _randomFormatDuration } from "typia/lib/internal/_randomFormatDuration";
import { _randomFormatIpv4 } from "typia/lib/internal/_randomFormatIpv4";
import { _randomFormatIpv6 } from "typia/lib/internal/_randomFormatIpv6";
import { _randomFormatJsonPointer } from "typia/lib/internal/_randomFormatJsonPointer";
import { _randomFormatRegex } from "typia/lib/internal/_randomFormatRegex";
import { _randomFormatRelativeJsonPointer } from "typia/lib/internal/_randomFormatRelativeJsonPointer";
import { _randomFormatTime } from "typia/lib/internal/_randomFormatTime";
import { _randomFormatUuid } from "typia/lib/internal/_randomFormatUuid";

interface IEntry {
  name: string;
  random: (props?: { minLength?: number; maxLength?: number }) => string;
  is: (value: string) => boolean;
  /**
   * Lengths the format's grammar expresses, read off its validator rather than
   * off the generator: base64 spends four characters per three bytes; a dotted
   * quad runs from `0.0.0.0` to `255.255.255.255`; an IPv6 address runs from
   * the compressed `::` to a padded dotted-quad tail; an instant is either
   * seconds-precise or carries a dot plus at least one digit, which is why 21
   * is missing; a clock adds `Z` or a six-character offset to those, and RFC
   * 3339 puts no ceiling on the fraction between them, so it is open above; a
   * duration is `P` plus one designator.
   */
  realizable: (length: number) => boolean;
}

const ENTRIES: IEntry[] = [
  {
    name: "byte",
    random: _randomFormatByte,
    is: _isFormatByte,
    realizable: (n) => n % 4 === 0,
  },
  {
    name: "regex",
    random: _randomFormatRegex,
    is: _isFormatRegex,
    realizable: () => true,
  },
  {
    name: "ipv4",
    random: _randomFormatIpv4,
    is: _isFormatIpv4,
    realizable: (n) => n >= 7 && n <= 15,
  },
  {
    name: "ipv6",
    random: _randomFormatIpv6,
    is: _isFormatIpv6,
    realizable: (n) => n >= 2 && n <= 45,
  },
  {
    name: "date-time",
    random: _randomFormatDatetime,
    is: _isFormatDateTime,
    realizable: (n) => n === 20 || n >= 22,
  },
  {
    name: "time",
    random: _randomFormatTime,
    is: _isFormatTime,
    realizable: (n) => n === 9 || n >= 11,
  },
  {
    name: "duration",
    random: _randomFormatDuration,
    is: _isFormatDuration,
    realizable: (n) => n >= 3,
  },
  {
    name: "relative-json-pointer",
    random: _randomFormatRelativeJsonPointer,
    is: _isFormatRelativeJsonPointer,
    realizable: (n) => n >= 1,
  },
  {
    name: "json-pointer",
    random: _randomFormatJsonPointer,
    is: _isFormatJsonPointer,
    realizable: () => true,
  },
  {
    name: "date",
    random: _randomFormatDate,
    is: _isFormatDate,
    realizable: (n) => n === 10,
  },
  {
    name: "uuid",
    random: _randomFormatUuid,
    is: _isFormatUuid,
    realizable: (n) => n === 36,
  },
];

const MAX_LENGTH = 48;
const DRAWS = 8;

/**
 * Verifies every string-format generator covers the exact set of lengths its
 * own validator accepts.
 *
 * `typia.random<T>()` can only be written against a literal type, so the
 * per-format sibling test pins the end-to-end path at chosen lengths while this
 * one walks the whole window matrix through the helpers the transform emits.
 * The two directions are what make the class impossible to half-fix: a
 * generator that widens its output would satisfy "never throws", and one that
 * keeps a fixed shape would satisfy "throws when asked for something odd"
 * (#2284).
 *
 * 1. For every format and every length up to 48, draw with `minLength ===
 *    maxLength`.
 * 2. Require a realizable length to yield a value of exactly that length that the
 *    format's own validator accepts.
 * 3. Require an unrealizable length to throw instead of yielding an invalid value,
 *    and require one-sided windows to respect their single bound.
 */
export const test_random_format_length_grammar = (): void => {
  const failures: string[] = [];
  for (const entry of ENTRIES) {
    for (let length = 0; length <= MAX_LENGTH; ++length)
      exact(entry, length, failures);
    for (const props of [
      undefined,
      { minLength: 0 },
      { maxLength: MAX_LENGTH },
      { minLength: 12 },
      { minLength: 12, maxLength: 40 },
    ])
      window(entry, props, failures);
  }
  TestValidator.equals(
    `format length grammar (${failures.length ? failures[0] : "none"})`,
    failures.length,
    0,
  );
};

const exact = (entry: IEntry, length: number, failures: string[]): void => {
  const expected: boolean = entry.realizable(length);
  for (let i: number = 0; i < DRAWS; ++i) {
    let value: string | null = null;
    let thrown: boolean = false;
    try {
      value = entry.random({ minLength: length, maxLength: length });
    } catch {
      thrown = true;
    }
    if (expected === false) {
      if (thrown === false)
        failures.push(
          `${entry.name}@${length}: expected a throw, got ${JSON.stringify(value)}`,
        );
      return;
    }
    if (thrown) {
      failures.push(`${entry.name}@${length}: threw at a realizable length`);
      return;
    }
    if (value!.length !== length) {
      failures.push(
        `${entry.name}@${length}: produced length ${value!.length}`,
      );
      return;
    }
    if (entry.is(value!) === false) {
      failures.push(
        `${entry.name}@${length}: produced ${JSON.stringify(value)} its own validator rejects`,
      );
      return;
    }
  }
};

const window = (
  entry: IEntry,
  props: { minLength?: number; maxLength?: number } | undefined,
  failures: string[],
): void => {
  for (let i: number = 0; i < DRAWS; ++i) {
    let value: string;
    try {
      value = entry.random(props);
    } catch {
      // A one-sided window can still exclude every length the format has, as
      // `uuid` does for anything but 36.
      return;
    }
    const low: number = props?.minLength ?? 0;
    const high: number = props?.maxLength ?? Number.MAX_SAFE_INTEGER;
    if (value.length < low || value.length > high)
      failures.push(
        `${entry.name} ${JSON.stringify(props)}: length ${value.length} outside the window`,
      );
    else if (entry.is(value) === false)
      failures.push(
        `${entry.name} ${JSON.stringify(props)}: produced ${JSON.stringify(value)} its own validator rejects`,
      );
  }
};
