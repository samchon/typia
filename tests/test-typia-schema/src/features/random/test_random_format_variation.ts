import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

interface IEntry {
  name: string;
  random: () => string;
  is: (value: string) => boolean;
}

const ENTRIES: IEntry[] = [
  {
    name: "byte",
    random: () => typia.random<string & tags.Format<"byte">>(),
    is: (value) => typia.is<string & tags.Format<"byte">>(value),
  },
  {
    name: "regex",
    random: () => typia.random<string & tags.Format<"regex">>(),
    is: (value) => typia.is<string & tags.Format<"regex">>(value),
  },
  {
    name: "password",
    random: () => typia.random<string & tags.Format<"password">>(),
    is: (value) => typia.is<string & tags.Format<"password">>(value),
  },
  {
    name: "uri",
    random: () => typia.random<string & tags.Format<"uri">>(),
    is: (value) => typia.is<string & tags.Format<"uri">>(value),
  },
  {
    name: "uri-reference",
    random: () => typia.random<string & tags.Format<"uri-reference">>(),
    is: (value) => typia.is<string & tags.Format<"uri-reference">>(value),
  },
  {
    name: "uri-template",
    random: () => typia.random<string & tags.Format<"uri-template">>(),
    is: (value) => typia.is<string & tags.Format<"uri-template">>(value),
  },
  {
    name: "iri",
    random: () => typia.random<string & tags.Format<"iri">>(),
    is: (value) => typia.is<string & tags.Format<"iri">>(value),
  },
  {
    name: "iri-reference",
    random: () => typia.random<string & tags.Format<"iri-reference">>(),
    is: (value) => typia.is<string & tags.Format<"iri-reference">>(value),
  },
  {
    name: "url",
    random: () => typia.random<string & tags.Format<"url">>(),
    is: (value) => typia.is<string & tags.Format<"url">>(value),
  },
  {
    name: "uuid",
    random: () => typia.random<string & tags.Format<"uuid">>(),
    is: (value) => typia.is<string & tags.Format<"uuid">>(value),
  },
  {
    name: "email",
    random: () => typia.random<string & tags.Format<"email">>(),
    is: (value) => typia.is<string & tags.Format<"email">>(value),
  },
  {
    name: "idn-email",
    random: () => typia.random<string & tags.Format<"idn-email">>(),
    is: (value) => typia.is<string & tags.Format<"idn-email">>(value),
  },
  {
    name: "hostname",
    random: () => typia.random<string & tags.Format<"hostname">>(),
    is: (value) => typia.is<string & tags.Format<"hostname">>(value),
  },
  {
    name: "idn-hostname",
    random: () => typia.random<string & tags.Format<"idn-hostname">>(),
    is: (value) => typia.is<string & tags.Format<"idn-hostname">>(value),
  },
  {
    name: "ipv4",
    random: () => typia.random<string & tags.Format<"ipv4">>(),
    is: (value) => typia.is<string & tags.Format<"ipv4">>(value),
  },
  {
    name: "ipv6",
    random: () => typia.random<string & tags.Format<"ipv6">>(),
    is: (value) => typia.is<string & tags.Format<"ipv6">>(value),
  },
  {
    name: "date",
    random: () => typia.random<string & tags.Format<"date">>(),
    is: (value) => typia.is<string & tags.Format<"date">>(value),
  },
  {
    name: "date-time",
    random: () => typia.random<string & tags.Format<"date-time">>(),
    is: (value) => typia.is<string & tags.Format<"date-time">>(value),
  },
  {
    name: "time",
    random: () => typia.random<string & tags.Format<"time">>(),
    is: (value) => typia.is<string & tags.Format<"time">>(value),
  },
  {
    name: "duration",
    random: () => typia.random<string & tags.Format<"duration">>(),
    is: (value) => typia.is<string & tags.Format<"duration">>(value),
  },
  {
    name: "json-pointer",
    random: () => typia.random<string & tags.Format<"json-pointer">>(),
    is: (value) => typia.is<string & tags.Format<"json-pointer">>(value),
  },
  {
    name: "relative-json-pointer",
    random: () => typia.random<string & tags.Format<"relative-json-pointer">>(),
    is: (value) =>
      typia.is<string & tags.Format<"relative-json-pointer">>(value),
  },
];

type UniqueBytes = Array<string & tags.Format<"byte">> &
  tags.MinItems<8> &
  tags.UniqueItems;
type UniqueRegexes = Array<string & tags.Format<"regex">> &
  tags.MinItems<8> &
  tags.UniqueItems;

const DRAWS = 32;

/**
 * Verifies an unconstrained string format draws a value instead of naming one.
 *
 * `byte` and `regex` each returned a single hard-coded constant when the leaf
 * carried no length tag, so their generators had a domain of exactly one value.
 * Nothing caught it: the sibling length tests ask whether a draw is valid and
 * whether it lands in its window, and a constant answers both. The visible
 * consequence was `UniqueItems`, which asks `_randomArray` for values that
 * cannot repeat — it retried a thousand times and reported the element domain
 * as too small, of a base64 string with 64 characters to spend per position
 * (issue #2304).
 *
 * 1. Draw every format 32 times unconstrained, and require its own validator to
 *    accept each draw.
 * 2. Require more than one distinct value, which is the whole claim of a random
 *    generator and the only property a constant cannot fake.
 * 3. Require an eight-element unique array of the two formats to be drawn and to
 *    validate, which is what the constant made impossible.
 */
export const test_random_format_variation = (): void => {
  const failures: string[] = [];
  for (const entry of ENTRIES) {
    const values: Set<string> = new Set();
    for (let i: number = 0; i < DRAWS; ++i) {
      const value: string = entry.random();
      if (entry.is(value) === false)
        failures.push(
          `${entry.name}: produced ${JSON.stringify(value)} its own validator rejects`,
        );
      values.add(value);
    }
    if (values.size < 2)
      failures.push(
        `${entry.name}: ${DRAWS} draws produced the single value ${JSON.stringify([...values][0])}`,
      );
  }
  unique(
    "byte",
    () => typia.random<UniqueBytes>(),
    typia.createIs<UniqueBytes>(),
    failures,
  );
  unique(
    "regex",
    () => typia.random<UniqueRegexes>(),
    typia.createIs<UniqueRegexes>(),
    failures,
  );
  TestValidator.equals(
    `format variation (${failures.length ? failures[0] : "none"})`,
    failures.length,
    0,
  );
};

const unique = (
  name: string,
  draw: () => string[],
  is: (value: unknown) => boolean,
  failures: string[],
): void => {
  for (let i: number = 0; i < 8; ++i) {
    let value: string[];
    try {
      value = draw();
    } catch (exp) {
      failures.push(
        `unique ${name} array: ${exp instanceof Error ? exp.message : String(exp)}`,
      );
      return;
    }
    if (is(value) === false)
      failures.push(
        `unique ${name} array: produced ${JSON.stringify(value)} its own validator rejects`,
      );
  }
};
