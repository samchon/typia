import { TestEquality } from "@typia/template/equality";
import typia, { IValidation } from "typia";

/**
 * Verifies `set-cookie` decodes to an array like every other array header.
 *
 * `set-cookie` skipped the list decoder because its values contain `", "`
 * (#2447), but it skipped the array shape with it: an absent required
 * `set-cookie` stayed `undefined`, which every validator rejected while other
 * absent required array headers read `[]`, and a lone string stayed a string
 * typed as `string[]`. The values must still never be split or trimmed.
 *
 * 1. Decode absent, empty, single-string, and multi-value `set-cookie` headers
 *    through all eight direct and factory forms.
 * 2. Cover a required and an optional declaration side by side.
 * 3. Keep `Expires` values, which contain `", "`, and surrounding spaces verbatim.
 * 4. Match a mixed-case declaration, and read a numeric element type.
 */
export const test_http_headers_set_cookie = (): void => {
  const required: Array<[string, (input: Input) => IRequired | null]> = [
    ["headers", (input) => typia.http.headers<IRequired>(input)],
    ["assertHeaders", (input) => typia.http.assertHeaders<IRequired>(input)],
    ["isHeaders", (input) => typia.http.isHeaders<IRequired>(input)],
    [
      "validateHeaders",
      (input) => unwrap(typia.http.validateHeaders<IRequired>(input)),
    ],
    ["createHeaders", typia.http.createHeaders<IRequired>()],
    ["createAssertHeaders", typia.http.createAssertHeaders<IRequired>()],
    ["createIsHeaders", typia.http.createIsHeaders<IRequired>()],
    [
      "createValidateHeaders",
      (input) => unwrap(typia.http.createValidateHeaders<IRequired>()(input)),
    ],
  ];
  const optional: Array<[string, (input: Input) => IOptional | null]> = [
    ["headers", (input) => typia.http.headers<IOptional>(input)],
    ["assertHeaders", (input) => typia.http.assertHeaders<IOptional>(input)],
    ["isHeaders", (input) => typia.http.isHeaders<IOptional>(input)],
    [
      "validateHeaders",
      (input) => unwrap(typia.http.validateHeaders<IOptional>(input)),
    ],
    ["createHeaders", typia.http.createHeaders<IOptional>()],
    ["createAssertHeaders", typia.http.createAssertHeaders<IOptional>()],
    ["createIsHeaders", typia.http.createIsHeaders<IOptional>()],
    [
      "createValidateHeaders",
      (input) => unwrap(typia.http.createValidateHeaders<IOptional>()(input)),
    ],
  ];
  const cookie: string = "id=1; Expires=Wed, 21 Oct 2015 07:28:00 GMT";
  const cases: Array<[string, Input, IRequired, IOptional]> = [
    ["absent", {}, { "set-cookie": [] }, {}],
    ["empty", { "set-cookie": [] }, { "set-cookie": [] }, {}],
    [
      "string",
      { "set-cookie": cookie },
      { "set-cookie": [cookie] },
      { "set-cookie": [cookie] },
    ],
    [
      "array",
      { "set-cookie": [cookie, " b=2 "] },
      { "set-cookie": [cookie, " b=2 "] },
      { "set-cookie": [cookie, " b=2 "] },
    ],
  ];
  for (const [title, input, expectedRequired, expectedOptional] of cases) {
    for (const [name, decode] of required)
      TestEquality.equals(
        `${name} required ${title}`,
        decode(input),
        expectedRequired,
      );
    for (const [name, decode] of optional) {
      const decoded: IOptional | null = decode(input);
      TestEquality.equals(
        `${name} optional ${title}`,
        decoded,
        expectedOptional,
      );
      if (expectedOptional["set-cookie"] === undefined && decoded !== null)
        TestEquality.equals(
          `${name} optional ${title} own key`,
          Object.hasOwn(decoded, "set-cookie"),
          false,
        );
    }
  }

  // The header is matched case-insensitively, and so is `cookie`'s delimiter.
  TestEquality.equals(
    "mixed-case set-cookie",
    typia.http.headers<IMixedCase>({
      "set-cookie": cookie,
      cookie: "a=1; b=2",
    }),
    { "Set-Cookie": [cookie], Cookie: ["a=1", "b=2"] },
  );
  // A non-string element type is read like any other array header's.
  TestEquality.equals(
    "numeric set-cookie",
    unwrap(typia.http.validateHeaders<INumeric>({ "set-cookie": ["1", "2"] })),
    { "set-cookie": [1, 2] },
  );
  TestEquality.equals(
    "numeric set-cookie string",
    unwrap(typia.http.validateHeaders<INumeric>({ "set-cookie": "3" })),
    { "set-cookie": [3] },
  );
};

const unwrap = <T>(result: IValidation<T>): T | null =>
  result.success ? result.data : null;

type Input = Record<string, string | string[] | undefined>;

interface IRequired {
  "set-cookie": string[];
}
interface IOptional {
  "set-cookie"?: string[];
}
interface IMixedCase {
  "Set-Cookie": string[];
  Cookie: string[];
}
interface INumeric {
  "set-cookie": number[];
}
