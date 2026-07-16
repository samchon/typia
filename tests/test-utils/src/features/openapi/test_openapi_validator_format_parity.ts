import { TestValidator } from "@nestia/e2e";
import { OpenApiValidator } from "@typia/utils";
import typia, { tags } from "typia";
import { _isFormatByte } from "typia/lib/internal/_isFormatByte";
import { _isFormatDate } from "typia/lib/internal/_isFormatDate";
import { _isFormatDateTime } from "typia/lib/internal/_isFormatDateTime";
import { _isFormatIpv6 } from "typia/lib/internal/_isFormatIpv6";
import { _isFormatIri } from "typia/lib/internal/_isFormatIri";
import { _isFormatIriReference } from "typia/lib/internal/_isFormatIriReference";

interface ICommentByte {
  /** @format byte */
  value: string;
}
interface ICommentIpv6 {
  /** @format ipv6 */
  value: string;
}
interface ICommentIri {
  /** @format iri */
  value: string;
}
interface ICommentIriReference {
  /** @format iri-reference */
  value: string;
}
interface ICommentDate {
  /** @format date */
  value: string;
}
interface ICommentDateTime {
  /** @format date-time */
  value: string;
}

type IChecker = {
  direct: (value: string) => boolean;
  tagged: (input: { value: string }) => boolean;
  comment: (input: { value: string }) => boolean;
};

/**
 * Verifies copied format validators agree on their standards-defined domains.
 *
 * Format checks are emitted through runtime imports for type tags, inline
 * native expressions for JSDoc tags, and copied helpers in @typia/utils. The
 * matrix exercises whole-string base64, IPv6 compression, absolute and relative
 * IRIs, Gregorian dates, and RFC 3339 date-times through every path.
 *
 * 1. Check representative valid and invalid values through all validators.
 * 2. Repeat base64 checks in alternating order to expose regular-expression state.
 * 3. Require generated JSON Schema to retain the corresponding format keyword.
 */
export const test_openapi_validator_format_parity = (): void => {
  const checks = {
    byte: {
      direct: _isFormatByte,
      tagged: typia.createIs<{
        value: string & tags.Format<"byte">;
      }>(),
      comment: typia.createIs<ICommentByte>(),
    },
    ipv6: {
      direct: _isFormatIpv6,
      tagged: typia.createIs<{
        value: string & tags.Format<"ipv6">;
      }>(),
      comment: typia.createIs<ICommentIpv6>(),
    },
    iri: {
      direct: _isFormatIri,
      tagged: typia.createIs<{
        value: string & tags.Format<"iri">;
      }>(),
      comment: typia.createIs<ICommentIri>(),
    },
    "iri-reference": {
      direct: _isFormatIriReference,
      tagged: typia.createIs<{
        value: string & tags.Format<"iri-reference">;
      }>(),
      comment: typia.createIs<ICommentIriReference>(),
    },
    date: {
      direct: _isFormatDate,
      tagged: typia.createIs<{
        value: string & tags.Format<"date">;
      }>(),
      comment: typia.createIs<ICommentDate>(),
    },
    "date-time": {
      direct: _isFormatDateTime,
      tagged: typia.createIs<{
        value: string & tags.Format<"date-time">;
      }>(),
      comment: typia.createIs<ICommentDateTime>(),
    },
  } satisfies Record<string, IChecker>;
  const matrices: Record<keyof typeof checks, IMatrix> = {
    byte: {
      valids: ["", "Zg==", "Zm8=", "Zm9v", "+/8="],
      invalids: [
        "Zg",
        "Z===",
        "Zm=v",
        "Zm9v====",
        "-_8=",
        "Zm9v\n!!!!",
        "!!!!\nZm9v",
        "Zm9v\n",
      ],
    },
    ipv6: {
      valids: [
        "2001:db8:85a3:0:0:8a2e:370:7334",
        "2001:db8::1",
        "::1",
        "::",
        "::ffff:192.0.2.128",
        "2001:db8:3:4::192.0.2.33",
      ],
      invalids: [
        "2001:db8:::1",
        "2001:db8::1::",
        "12345::",
        "::ffff:999.0.2.128",
        "2001:db8::g",
      ],
    },
    iri: {
      valids: [
        "https://예시.한국/경로?질의#조각",
        "urn:example:동물:고양이",
        "https://example.com/😀",
        "mailto:user@example.com",
        "https://example.com/a%20b",
      ],
      invalids: [
        "../경로",
        "/경로",
        "1bad:relative",
        "https://example.com/%2",
        "https://example.com/a b",
        "https://example.com/\u0000",
        "https://example.com/\u007f",
      ],
    },
    "iri-reference": {
      valids: [
        "",
        "https://예시.한국/경로?질의#조각",
        "../경로",
        "/절대/경로",
        "#조각",
        "?질의",
        "//예시.한국/경로",
        "경로/%E2%9C%93",
        "😀/경로",
      ],
      invalids: [
        "1bad:relative",
        "경로/%2",
        "경로 with space",
        "경로\\backslash",
        "경로\u0000",
      ],
    },
    date: {
      valids: ["2000-02-29", "2024-02-29", "1900-02-28", "9999-12-31"],
      invalids: [
        "1900-02-29",
        "2100-02-29",
        "2023-02-29",
        "2024-04-31",
        "2024-13-01",
        "2024-01-00",
      ],
    },
    "date-time": {
      valids: [
        "2024-02-29T23:59:59Z",
        "2024-02-29t23:59:59z",
        "1990-12-31T23:59:60Z",
        "2024-01-01T00:00:00.123456789012Z",
        "2024-01-01T00:00:00+23:59",
      ],
      invalids: [
        "1900-02-29T00:00:00Z",
        "2024-04-31T00:00:00Z",
        "2024-01-01 00:00:00Z",
        "2024-01-01T24:00:00Z",
        "2024-01-01T23:60:00Z",
        "2024-01-01T23:59:61Z",
        "2024-01-01T00:00:00+24:00",
        "2024-01-01T00:00:00",
        "2024-01-01T00:00:00.Z",
      ],
    },
  };

  for (const [format, matrix] of Object.entries(matrices) as [
    keyof typeof checks,
    IMatrix,
  ][]) {
    const checker: IChecker = checks[format];
    for (const value of matrix.valids) validate(format, checker, value, true);
    for (const value of matrix.invalids)
      validate(format, checker, value, false);
  }

  for (let i = 0; i < 3; ++i) {
    validate("byte", checks.byte, "Zm9v", true);
    validate("byte", checks.byte, "Zm9v\n!!!!", false);
  }

  TestValidator.equals(
    "byte schema",
    "byte",
    (typia.json.schema<byte>().schema as { format?: string }).format,
  );
  TestValidator.equals(
    "ipv6 schema",
    "ipv6",
    (typia.json.schema<ipv6>().schema as { format?: string }).format,
  );
  TestValidator.equals(
    "iri schema",
    "iri",
    (typia.json.schema<iri>().schema as { format?: string }).format,
  );
  TestValidator.equals(
    "iri-reference schema",
    "iri-reference",
    (typia.json.schema<iriReference>().schema as { format?: string }).format,
  );
  TestValidator.equals(
    "date schema",
    "date",
    (typia.json.schema<date>().schema as { format?: string }).format,
  );
  TestValidator.equals(
    "date-time schema",
    "date-time",
    (typia.json.schema<dateTime>().schema as { format?: string }).format,
  );
};

interface IMatrix {
  valids: string[];
  invalids: string[];
}

type byte = string & tags.Format<"byte">;
type ipv6 = string & tags.Format<"ipv6">;
type iri = string & tags.Format<"iri">;
type iriReference = string & tags.Format<"iri-reference">;
type date = string & tags.Format<"date">;
type dateTime = string & tags.Format<"date-time">;

const validate = (
  format: string,
  checker: IChecker,
  value: string,
  expected: boolean,
): void => {
  const label = `${format} ${expected ? "accepts" : "rejects"} ${JSON.stringify(value)}`;
  TestValidator.equals(`${label} directly`, expected, checker.direct(value));
  TestValidator.equals(
    `${label} through type tag`,
    expected,
    checker.tagged({ value }),
  );
  TestValidator.equals(
    `${label} through comment tag`,
    expected,
    checker.comment({ value }),
  );
  TestValidator.equals(
    `${label} through OpenApiValidator`,
    expected,
    OpenApiValidator.validate({
      components: {},
      schema: { type: "string", format },
      value,
      required: true,
    }).success,
  );
};
