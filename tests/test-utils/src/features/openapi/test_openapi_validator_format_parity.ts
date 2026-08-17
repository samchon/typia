import { TestValidator } from "@nestia/e2e";
import { OpenApiValidator } from "@typia/utils";
import typia, { tags } from "typia";
import { _isFormatByte } from "typia/lib/internal/_isFormatByte";
import { _isFormatDate } from "typia/lib/internal/_isFormatDate";
import { _isFormatDateTime } from "typia/lib/internal/_isFormatDateTime";
import { _isFormatDuration } from "typia/lib/internal/_isFormatDuration";
import { _isFormatEmail } from "typia/lib/internal/_isFormatEmail";
import { _isFormatHostname } from "typia/lib/internal/_isFormatHostname";
import { _isFormatIdnEmail } from "typia/lib/internal/_isFormatIdnEmail";
import { _isFormatIdnHostname } from "typia/lib/internal/_isFormatIdnHostname";
import { _isFormatIpv4 } from "typia/lib/internal/_isFormatIpv4";
import { _isFormatIpv6 } from "typia/lib/internal/_isFormatIpv6";
import { _isFormatIri } from "typia/lib/internal/_isFormatIri";
import { _isFormatIriReference } from "typia/lib/internal/_isFormatIriReference";
import { _isFormatJsonPointer } from "typia/lib/internal/_isFormatJsonPointer";
import { _isFormatPassword } from "typia/lib/internal/_isFormatPassword";
import { _isFormatRegex } from "typia/lib/internal/_isFormatRegex";
import { _isFormatRelativeJsonPointer } from "typia/lib/internal/_isFormatRelativeJsonPointer";
import { _isFormatTime } from "typia/lib/internal/_isFormatTime";
import { _isFormatUri } from "typia/lib/internal/_isFormatUri";
import { _isFormatUriReference } from "typia/lib/internal/_isFormatUriReference";
import { _isFormatUriTemplate } from "typia/lib/internal/_isFormatUriTemplate";
import { _isFormatUrl } from "typia/lib/internal/_isFormatUrl";
import { _isFormatUuid } from "typia/lib/internal/_isFormatUuid";

interface ICommentByte {
  /** @format byte */
  value: string;
}
interface ICommentPassword {
  /** @format password */
  value: string;
}
interface ICommentRegex {
  /** @format regex */
  value: string;
}
interface ICommentUuid {
  /** @format uuid */
  value: string;
}
interface ICommentEmail {
  /** @format email */
  value: string;
}
interface ICommentIdnEmail {
  /** @format idn-email */
  value: string;
}
interface ICommentIpv4 {
  /** @format ipv4 */
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
interface ICommentUri {
  /** @format uri */
  value: string;
}
interface ICommentUriReference {
  /** @format uri-reference */
  value: string;
}
interface ICommentUriTemplate {
  /** @format uri-template */
  value: string;
}
interface ICommentUrl {
  /** @format url */
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
interface ICommentTime {
  /** @format time */
  value: string;
}
interface ICommentDuration {
  /** @format duration */
  value: string;
}
interface ICommentHostname {
  /** @format hostname */
  value: string;
}
interface ICommentIdnHostname {
  /** @format idn-hostname */
  value: string;
}
interface ICommentJsonPointer {
  /** @format json-pointer */
  value: string;
}
interface ICommentRelativeJsonPointer {
  /** @format relative-json-pointer */
  value: string;
}

type IChecker = {
  direct: (value: string) => boolean;
  tagged: (input: { value: string }) => boolean;
  comment: (input: { value: string }) => boolean;
  schema: () => string | undefined;
};

/**
 * Verifies every `Format.Value` agrees across all four of its owners.
 *
 * A format is implemented four times over: the runtime helper a type tag
 * imports, the inline native expression a JSDoc tag emits, the copied helper
 * `@typia/utils` reaches through `_isStringFormat`, and the JSON Schema
 * keyword. Nothing binds those copies together, so a format can be validated on
 * one path and silently accepted on another. `_isStringFormat` fails open — an
 * unregistered format returns `true` for every value — which makes a missing or
 * misspelled entry invisible to any test that only feeds it valid input. That
 * failure mode reached review as a pull request registering an IBAN validator
 * under its function name rather than its format name, where the validator
 * never ran and nothing observed it.
 *
 * The matrix therefore covers the whole `Format.Value` union rather than a
 * sample of it, and step 4 pins that completeness so a format added later
 * cannot land without coverage. `time` and `date-time` share the `partial-time`
 * production, so the clock rows repeat the leap-second cases at every offset
 * that shifts them onto and off 23:59:60 UTC: the two formats disagreed about
 * that production while only one of them was covered here.
 *
 * Expectations come from the JSON Schema, RFC, and OpenAPI definitions of each
 * format, never from current output — the four copies agree with each other
 * even when all four are wrong.
 *
 * 1. Check representative valid and invalid values through all four paths.
 * 2. Repeat base64 checks in alternating order to expose regular-expression state.
 * 3. Require generated JSON Schema to retain the corresponding format keyword.
 * 4. Require every member of `Format.Value` to appear in the matrix.
 * 5. Require idn-hostname to cover hostname, since IDN is declared its superset.
 */
export const test_openapi_validator_format_parity = (): void => {
  const checks = {
    byte: {
      direct: _isFormatByte,
      tagged: typia.createIs<{
        value: string & tags.Format<"byte">;
      }>(),
      comment: typia.createIs<ICommentByte>(),
      schema: () =>
        (typia.json.schema<byte>().schema as { format?: string }).format,
    },
    password: {
      direct: _isFormatPassword,
      tagged: typia.createIs<{
        value: string & tags.Format<"password">;
      }>(),
      comment: typia.createIs<ICommentPassword>(),
      schema: () =>
        (typia.json.schema<password>().schema as { format?: string }).format,
    },
    regex: {
      direct: _isFormatRegex,
      tagged: typia.createIs<{
        value: string & tags.Format<"regex">;
      }>(),
      comment: typia.createIs<ICommentRegex>(),
      schema: () =>
        (typia.json.schema<regex>().schema as { format?: string }).format,
    },
    uuid: {
      direct: _isFormatUuid,
      tagged: typia.createIs<{
        value: string & tags.Format<"uuid">;
      }>(),
      comment: typia.createIs<ICommentUuid>(),
      schema: () =>
        (typia.json.schema<uuid>().schema as { format?: string }).format,
    },
    email: {
      direct: _isFormatEmail,
      tagged: typia.createIs<{
        value: string & tags.Format<"email">;
      }>(),
      comment: typia.createIs<ICommentEmail>(),
      schema: () =>
        (typia.json.schema<email>().schema as { format?: string }).format,
    },
    "idn-email": {
      direct: _isFormatIdnEmail,
      tagged: typia.createIs<{
        value: string & tags.Format<"idn-email">;
      }>(),
      comment: typia.createIs<ICommentIdnEmail>(),
      schema: () =>
        (typia.json.schema<idnEmail>().schema as { format?: string }).format,
    },
    ipv4: {
      direct: _isFormatIpv4,
      tagged: typia.createIs<{
        value: string & tags.Format<"ipv4">;
      }>(),
      comment: typia.createIs<ICommentIpv4>(),
      schema: () =>
        (typia.json.schema<ipv4>().schema as { format?: string }).format,
    },
    ipv6: {
      direct: _isFormatIpv6,
      tagged: typia.createIs<{
        value: string & tags.Format<"ipv6">;
      }>(),
      comment: typia.createIs<ICommentIpv6>(),
      schema: () =>
        (typia.json.schema<ipv6>().schema as { format?: string }).format,
    },
    iri: {
      direct: _isFormatIri,
      tagged: typia.createIs<{
        value: string & tags.Format<"iri">;
      }>(),
      comment: typia.createIs<ICommentIri>(),
      schema: () =>
        (typia.json.schema<iri>().schema as { format?: string }).format,
    },
    "iri-reference": {
      direct: _isFormatIriReference,
      tagged: typia.createIs<{
        value: string & tags.Format<"iri-reference">;
      }>(),
      comment: typia.createIs<ICommentIriReference>(),
      schema: () =>
        (typia.json.schema<iriReference>().schema as { format?: string })
          .format,
    },
    uri: {
      direct: _isFormatUri,
      tagged: typia.createIs<{
        value: string & tags.Format<"uri">;
      }>(),
      comment: typia.createIs<ICommentUri>(),
      schema: () =>
        (typia.json.schema<uri>().schema as { format?: string }).format,
    },
    "uri-reference": {
      direct: _isFormatUriReference,
      tagged: typia.createIs<{
        value: string & tags.Format<"uri-reference">;
      }>(),
      comment: typia.createIs<ICommentUriReference>(),
      schema: () =>
        (typia.json.schema<uriReference>().schema as { format?: string })
          .format,
    },
    "uri-template": {
      direct: _isFormatUriTemplate,
      tagged: typia.createIs<{
        value: string & tags.Format<"uri-template">;
      }>(),
      comment: typia.createIs<ICommentUriTemplate>(),
      schema: () =>
        (typia.json.schema<uriTemplate>().schema as { format?: string }).format,
    },
    url: {
      direct: _isFormatUrl,
      tagged: typia.createIs<{
        value: string & tags.Format<"url">;
      }>(),
      comment: typia.createIs<ICommentUrl>(),
      schema: () =>
        (typia.json.schema<url>().schema as { format?: string }).format,
    },
    date: {
      direct: _isFormatDate,
      tagged: typia.createIs<{
        value: string & tags.Format<"date">;
      }>(),
      comment: typia.createIs<ICommentDate>(),
      schema: () =>
        (typia.json.schema<date>().schema as { format?: string }).format,
    },
    "date-time": {
      direct: _isFormatDateTime,
      tagged: typia.createIs<{
        value: string & tags.Format<"date-time">;
      }>(),
      comment: typia.createIs<ICommentDateTime>(),
      schema: () =>
        (typia.json.schema<dateTime>().schema as { format?: string }).format,
    },
    time: {
      direct: _isFormatTime,
      tagged: typia.createIs<{
        value: string & tags.Format<"time">;
      }>(),
      comment: typia.createIs<ICommentTime>(),
      schema: () =>
        (typia.json.schema<time>().schema as { format?: string }).format,
    },
    duration: {
      direct: _isFormatDuration,
      tagged: typia.createIs<{
        value: string & tags.Format<"duration">;
      }>(),
      comment: typia.createIs<ICommentDuration>(),
      schema: () =>
        (typia.json.schema<duration>().schema as { format?: string }).format,
    },
    hostname: {
      direct: _isFormatHostname,
      tagged: typia.createIs<{
        value: string & tags.Format<"hostname">;
      }>(),
      comment: typia.createIs<ICommentHostname>(),
      schema: () =>
        (typia.json.schema<hostname>().schema as { format?: string }).format,
    },
    "idn-hostname": {
      direct: _isFormatIdnHostname,
      tagged: typia.createIs<{
        value: string & tags.Format<"idn-hostname">;
      }>(),
      comment: typia.createIs<ICommentIdnHostname>(),
      schema: () =>
        (typia.json.schema<idnHostname>().schema as { format?: string }).format,
    },
    "json-pointer": {
      direct: _isFormatJsonPointer,
      tagged: typia.createIs<{
        value: string & tags.Format<"json-pointer">;
      }>(),
      comment: typia.createIs<ICommentJsonPointer>(),
      schema: () =>
        (typia.json.schema<jsonPointer>().schema as { format?: string }).format,
    },
    "relative-json-pointer": {
      direct: _isFormatRelativeJsonPointer,
      tagged: typia.createIs<{
        value: string & tags.Format<"relative-json-pointer">;
      }>(),
      comment: typia.createIs<ICommentRelativeJsonPointer>(),
      schema: () =>
        (typia.json.schema<relativeJsonPointer>().schema as { format?: string })
          .format,
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
    // OpenAPI defines password as a hint to the consumer that the value should
    // be obscured, not as a constraint on it. Every string is valid, so the row
    // carries no invalids: an implementation that rejected anything here would
    // be inventing a rule the specification does not state.
    password: {
      valids: ["", "anything at all", "\u0000", "한글 비밀번호"],
      invalids: [],
    },
    regex: {
      valids: ["", "^[a-z]+$", "\\d{3}", "(a|b)*", "[0-9]{2,4}"],
      invalids: ["(", "[a-", "a{2,1}", "\\", "(?<"],
    },
    uuid: {
      valids: [
        "550e8400-e29b-41d4-a716-446655440000",
        "550E8400-E29B-41D4-A716-446655440000",
        "urn:uuid:550e8400-e29b-41d4-a716-446655440000",
        "00000000-0000-0000-0000-000000000000",
      ],
      invalids: [
        "",
        "550e8400e29b41d4a716446655440000",
        "550e8400-e29b-41d4-a716-44665544000",
        "550e8400-e29b-41d4-a716-4466554400000",
        "550g8400-e29b-41d4-a716-446655440000",
        "uuid:550e8400-e29b-41d4-a716-446655440000",
      ],
    },
    email: {
      valids: [
        "samchon.github@gmail.com",
        "a@b.co",
        "a.b.c@d.example.com",
        "!#$%&'*+/=?^_`{|}~-@example.com",
        "USER@EXAMPLE.COM",
      ],
      invalids: [
        "",
        "a@",
        "@example.com",
        "a@b",
        "a b@example.com",
        "a@-example.com",
        "a@example-.com",
        "a..b@example.com",
        ".a@example.com",
      ],
    },
    // Every ASCII mailbox is a valid internationalized one, so the ASCII rows
    // repeat here and the unicode local part and domain are added on top.
    "idn-email": {
      valids: [
        "삼촌.github@지메일.com",
        "a@b.co",
        '"quoted string"@example.com',
        "user@sub.example.com",
      ],
      invalids: ["", "a@b", "a@b.c", "a b@example.com", "@example.com", "a@"],
    },
    ipv4: {
      valids: ["127.0.0.1", "0.0.0.0", "255.255.255.255", "192.168.1.1"],
      invalids: [
        "",
        "256.0.0.1",
        "1.2.3",
        "1.2.3.4.5",
        "01.2.3.4",
        "1.2.3.-4",
        "::1",
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
        "git+ssh://example.com/repository",
        "web-demo.test:value",
        "https://example.com/a%20b",
      ],
      invalids: [
        "../경로",
        "/경로",
        "1bad:relative",
        "a,b:value",
        "a_b:value",
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
        "a,b:value",
        "a_b:value",
        "경로/%2",
        "경로 with space",
        "경로\\backslash",
        "경로\u0000",
      ],
    },
    // RFC 3986 splits URI-reference into URI and relative-ref; only the URI side
    // is a `uri`, so every scheme-less reference belongs in the invalid column
    // here and in the valid column of `uri-reference` below.
    uri: {
      valids: [
        "git://github.com/samchon/typia.git",
        "https://example.com/path?query=1#fragment",
        "urn:example:animal",
        "mailto:user@example.com",
        "https://example.com/a%20b",
      ],
      invalids: [
        "",
        "example.com",
        "/absolute/path",
        "../parent",
        "1bad:relative",
        "https://example.com/a b",
      ],
    },
    "uri-reference": {
      valids: [
        "",
        "https://example.com/",
        "/absolute/path",
        "../parent",
        "#fragment",
        "//example.com/path",
      ],
      invalids: ["1bad:relative", 'a"b', "https://example.com/a b", "a\\b"],
    },
    "uri-template": {
      valids: [
        "",
        "git://github.com/{account}/{repository}.git",
        "http://example.com/~{username}/",
        "{+path}/here",
        "{x,y}",
        "http://example.com/dictionary/{term:1}/{term}",
      ],
      invalids: [
        "http://example.com/dictionary/{term:1}/{term",
        "a b",
        "{}",
        "<>",
        "a`b",
      ],
    },
    // `url` is narrower than `uri`: it fixes the scheme set and rejects the
    // private and loopback ranges, so a value can be a legal URI and not a URL.
    url: {
      valids: [
        "https://example--example.example.com/",
        "http://example.com",
        "ftp://example.com/file.txt",
        "https://example.com:8080/path?q=1",
        "https://8.8.8.8/",
      ],
      invalids: [
        "",
        "example.com",
        "https://localhost",
        "http://10.0.0.1",
        "http://192.168.0.1",
        "https://example.com/a b",
        "ws://example.com",
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
        "1990-12-31T15:59:60-08:00",
        "1991-01-01T00:59:60+01:00",
        "2024-01-01T00:00:00.123456789012Z",
        "2024-01-01T00:00:00+23:59",
      ],
      invalids: [
        "1900-02-29T00:00:00Z",
        "2024-04-31T00:00:00Z",
        "2024-01-01 00:00:00Z",
        "2024-01-01T24:00:00Z",
        "2024-01-01T23:60:00Z",
        "2024-01-01T00:00:60Z",
        "1990-12-30T23:59:60Z",
        "1990-12-31T23:58:60Z",
        "1990-12-31T15:58:60-08:00",
        "2024-01-01T23:59:61Z",
        "2024-01-01T00:00:00+24:00",
        "2024-01-01T00:00:00",
        "2024-01-01T00:00:00.Z",
      ],
    },
    time: {
      valids: [
        "23:59:59Z",
        "23:59:59z",
        "00:00:00.1234567890Z",
        "12:34:56+23:59",
        "12:34:56-23:59",
        "23:59:60Z",
        "23:59:60+00:00",
        "15:59:60-08:00",
        "01:29:60+01:30",
        "23:29:60+23:30",
      ],
      invalids: [
        "22:59:60Z",
        "23:58:60Z",
        "23:59:60+01:00",
        "23:59:61Z",
        "24:00:00Z",
        "23:60:00Z",
        "23:59:59",
        "23:59:59.Z",
        "23:59:59+24:00",
        "1:59:59Z",
      ],
    },
    // ISO 8601 forbids an empty duration, so `P` alone and a `T` with no time
    // component are rejected, and the week form does not combine with the rest.
    duration: {
      valids: ["P1Y", "P1Y2M3DT4H5M6S", "PT1S", "P1W", "P3D", "PT0S"],
      invalids: ["", "P", "1Y", "PT", "P1S", "P1Y1W", "PT1D", "p1y"],
    },
    // Every valid ASCII host name is a valid IDN host name; the two share one
    // structure and differ only in the permitted label characters, so the same
    // ASCII rows appear under both, and the IDN column adds unicode labels.
    hostname: {
      valids: [
        "hostname",
        "localhost",
        "a",
        "a.b",
        "x.y.z",
        "example.com",
        "sub.domain.co.kr",
        "host.",
      ],
      invalids: ["", "-a", "a-", "a..b", ".a", "a.-b", "a_b", "실례"],
    },
    "idn-hostname": {
      valids: [
        "hostname",
        "localhost",
        "a",
        "a.b",
        "x.y.z",
        "example.com",
        "실례",
        "실례.테스트",
        "a.실례",
        "host.",
      ],
      invalids: ["", "-a", "a-", "a..b", ".a", "a.-b", "a_b"],
    },
    // RFC 6901 makes the empty string the whole-document pointer and `~` an
    // escape introducer, so a bare `~` and any escape other than `~0` or `~1`
    // are malformed rather than literal.
    "json-pointer": {
      valids: [
        "",
        "/",
        "/foo",
        "/foo/0",
        "/a~0b",
        "/a~1b",
        "/components/schemas/ObjectSimple.IPoint3D",
      ],
      invalids: ["foo", "/~", "/~2", "#/foo", "/a~"],
    },
    // A relative pointer is a non-negative integer with no leading zero,
    // followed by either `#` or a JSON pointer -- never both.
    "relative-json-pointer": {
      valids: ["0", "2#", "1/foo", "0/a~0b", "10/x", "0#"],
      invalids: ["", "01", "-1", "1#/foo", "/foo", "1/~", "a"],
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
    TestValidator.equals(
      `${format} schema`,
      format as string,
      checker.schema(),
    );
  }

  for (let i = 0; i < 3; ++i) {
    validate("byte", checks.byte, "Zm9v", true);
    validate("byte", checks.byte, "Zm9v\n!!!!", false);
  }

  // The census, not a sample. _isStringFormat fails open, so a format missing
  // from the @typia/utils registry accepts every value and no value-driven test
  // can see it. Adding a member to Format.Value without a row here fails this
  // assertion instead of shipping a validator that never runs.
  const declared: string[] = typia.reflect.literals<tags.Format.Value>();
  const covered: Set<string> = new Set(Object.keys(checks));
  TestValidator.equals(
    "every declared format is covered",
    [] as string[],
    declared.filter((format) => covered.has(format) === false),
  );
  TestValidator.equals(
    "no format is covered that is not declared",
    [] as string[],
    [...covered].filter((format) => declared.includes(format) === false),
  );

  // The superset property proved directly: every value the ASCII host-name
  // validator accepts, the IDN one accepts too. idn-hostname used to require a
  // dotted name with a two-plus character trailing label, so it rejected the
  // single-label and single-character-final-label hosts hostname admits (#2317).
  for (const value of [
    "hostname",
    "localhost",
    "a",
    "a.b",
    "x.y.z",
    "a1.b2",
    "example.com",
    "under_score-is.rejected",
    "-bad",
    "",
  ])
    TestValidator.predicate(
      `idn-hostname is a superset of hostname for ${JSON.stringify(value)}`,
      _isFormatHostname(value) === false ||
        _isFormatIdnHostname(value) === true,
    );
};

interface IMatrix {
  valids: string[];
  invalids: string[];
}

type byte = string & tags.Format<"byte">;
type password = string & tags.Format<"password">;
type regex = string & tags.Format<"regex">;
type uuid = string & tags.Format<"uuid">;
type email = string & tags.Format<"email">;
type idnEmail = string & tags.Format<"idn-email">;
type ipv4 = string & tags.Format<"ipv4">;
type ipv6 = string & tags.Format<"ipv6">;
type iri = string & tags.Format<"iri">;
type iriReference = string & tags.Format<"iri-reference">;
type uri = string & tags.Format<"uri">;
type uriReference = string & tags.Format<"uri-reference">;
type uriTemplate = string & tags.Format<"uri-template">;
type url = string & tags.Format<"url">;
type date = string & tags.Format<"date">;
type dateTime = string & tags.Format<"date-time">;
type time = string & tags.Format<"time">;
type duration = string & tags.Format<"duration">;
type hostname = string & tags.Format<"hostname">;
type idnHostname = string & tags.Format<"idn-hostname">;
type jsonPointer = string & tags.Format<"json-pointer">;
type relativeJsonPointer = string & tags.Format<"relative-json-pointer">;

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
