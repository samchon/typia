import { TestValidator } from "@nestia/e2e";
import { OpenApiTypeChecker, OpenApiValidator } from "@typia/utils";
import typia, { tags } from "typia";
import { _isFormatUriReference } from "typia/lib/internal/_isFormatUriReference";

interface IUriReferenceValue {
  value: string & tags.Format<"uri-reference">;
}

interface ICommentUriReferenceValue {
  /** @format uri-reference */
  value: string;
}

/**
 * Verifies uri-reference validation matches the RFC 3986 URI-reference grammar.
 *
 * RFC 3986 builds every component of a URI-reference from unreserved
 * characters, sub-delims (`!$&'()*+,;=`), and pct-encoded octets, so a raw
 * double quote is legal in none of them and `%22` is its only spelling. It also
 * splits `URI-reference` into `URI / relative-ref`, and only the scheme-ful side
 * may use `path-rootless`; a scheme-less relative reference takes
 * `path-noscheme`, whose first segment is `segment-nz-nc` and excludes `:`,
 * while every later segment is `*pchar` and includes it. Sharing one
 * `path-rootless` alternative across both sides therefore accepts
 * `1bad:relative`, which is neither a URI (`1bad` cannot be a scheme, which must
 * begin with ALPHA) nor a relative-ref. The same expression is copied into the
 * typia runtime helper, the native code generator, and the @typia/utils
 * validator, so the matrix runs through every owner rather than trusting one of
 * them — they agree with each other even when all three are wrong, so every
 * expectation here comes from RFC 3986 rather than from current output. It also
 * pins the coverage relation OpenApiTypeChecker declares between iri-reference
 * and uri-reference, which is what makes an over-permissive uri-reference
 * observable from inside typia.
 *
 * 1. Accept absolute, relative, network-path, IPv4, IPv6, urn, and mailto
 *    references, the empty reference, every sub-delim, and pct-encoded octets.
 * 2. Reject a raw double quote in reg-name, path, query, and fragment, and as a
 *    whole reference.
 * 3. Reject a scheme-less reference whose first segment carries a raw `:`, while
 *    keeping the colon legal after a real scheme, from the second segment on,
 *    behind a `./` dot segment, on a rooted path, and in query and fragment —
 *    the exclusion is conditional, so a blanket ban would be just as wrong.
 * 4. Keep malformed escapes, controls, spaces, and excluded characters rejected.
 * 5. Repeat one reference consecutively to expose regular expression state: a
 *    global pattern resumes from lastIndex and alternates on repeated accepts,
 *    while an interleaved reject would reset it and hide the regression.
 * 6. Require iri-reference to cover uri-reference for every probe, since IRI is
 *    declared a superset of URI.
 */
export const test_openapi_validator_format_uri_reference = (): void => {
  const valids: string[] = [
    "",
    "https://example.com/",
    "https://example.com/path?query=1#fragment",
    "//example.com/path",
    "/absolute/path",
    "relative/path",
    "../parent",
    "#fragment",
    "?query",
    "urn:example:animal:ferret:nose",
    "mailto:user@example.com",
    "http://192.0.2.1/path",
    "http://[2001:db8::1]/path",
    "http://example.com:8080/path",
    "https://user:pass@example.com/path",
    "path/%22quoted%22",
    "%22",
    "%2F",
    "a'b",
    "path/(parens)",
    "path/with-!$&'()*+,;=~_.-",
    "git://github.com/samchon/typia.git/../nestia.git",
    // a colon is legal wherever a scheme precedes it or the first segment ends
    "a:b",
    "A:b",
    "foo+bar:baz",
    "http:1bad:relative",
    "./1bad:relative",
    "good/1bad:relative",
    "/1bad:relative",
    "//a/1bad:relative",
    "a/b:c?q#f",
    "a%3ab",
    "?q=1:2",
    "#f:1",
  ];
  const schemelessColons: string[] = [
    "1bad:relative",
    "1bad:relative/x",
    "1bad:relative?q",
    "1bad:relative#f",
    "1bad:",
    ":",
    ":/a",
    "a%3ab:c",
    "+foo:bar",
    "9http://a/b",
  ];
  const rawQuotes: string[] = [
    '"',
    '""',
    'a"b',
    '/a"b',
    '?q="',
    '#"',
    'http://a"b/c',
    'http://x/p"q',
    'https://example.com/a"b?c"d#e"f',
    'path/"quoted"',
  ];
  const excluded: string[] = [
    "%2",
    "%zz",
    "a b",
    "a<b",
    "a>b",
    "a\\b",
    "a|b",
    "a^b",
    "a\u0000",
    "a\u007f",
  ];

  for (const value of valids) validate(value, true);
  for (const value of rawQuotes) validate(value, false);
  for (const value of schemelessColons) validate(value, false);
  for (const value of excluded) validate(value, false);

  for (let i: number = 0; i < 3; ++i)
    validate("https://example.com/path?query=1#fragment", true);
  for (let i: number = 0; i < 3; ++i) validate('http://a"b/c', false);

  TestValidator.equals(
    "iri-reference covers uri-reference",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", format: "iri-reference" },
      y: { type: "string", format: "uri-reference" },
    }),
  );
  for (const value of [
    ...valids,
    ...rawQuotes,
    ...schemelessColons,
    ...excluded,
  ])
    if (_isFormatUriReference(value) === true)
      TestValidator.equals(
        `iri-reference accepts uri-reference ${JSON.stringify(value)}`,
        true,
        openapi("iri-reference", value),
      );

  TestValidator.equals(
    "uri-reference schema",
    "uri-reference",
    (typia.json.schema<uriReference>().schema as { format?: string }).format,
  );
};

type uriReference = string & tags.Format<"uri-reference">;

const openapi = (format: string, value: string): boolean =>
  OpenApiValidator.validate({
    components: {},
    schema: { type: "string", format },
    value,
    required: true,
  }).success;

const validate = (value: string, expected: boolean): void => {
  const label = `uri-reference ${expected ? "accepts" : "rejects"} ${JSON.stringify(value)}`;
  TestValidator.equals(
    `${label} directly`,
    expected,
    _isFormatUriReference(value),
  );
  TestValidator.equals(
    `${label} through type tag`,
    expected,
    typia.is<IUriReferenceValue>({ value }),
  );
  TestValidator.equals(
    `${label} through comment tag`,
    expected,
    typia.is<ICommentUriReferenceValue>({ value }),
  );
  TestValidator.equals(
    `${label} through OpenApiValidator`,
    expected,
    openapi("uri-reference", value),
  );
};
