import typia from "../../../../src";
import { _test_http_isHeaders } from "../../../internal/_test_http_isHeaders";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_createIsHeaders_ObjectHttpAtomic = _test_http_isHeaders(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(
  (
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpAtomic> | null => {
    const is = (input: any): input is ObjectHttpAtomic => {
      return (
        "object" === typeof input &&
        null !== input &&
        "boolean" === typeof (input as any).boolean &&
        "bigint" === typeof (input as any).bigint &&
        "number" === typeof (input as any).number &&
        Number.isFinite((input as any).number) &&
        "string" === typeof (input as any).string
      );
    };
    const headers = (
      input: Record<string, string | string[] | undefined>,
    ): typia.Resolved<ObjectHttpAtomic> => {
      const $boolean = (typia.http.createIsHeaders as any).boolean;
      const $bigint = (typia.http.createIsHeaders as any).bigint;
      const $number = (typia.http.createIsHeaders as any).number;
      const output = {
        boolean: $boolean(input.boolean),
        bigint: $bigint(input.bigint),
        number: $number(input.number),
        string: input.string,
      };
      return output as any;
    };
    const output = headers(input);
    if (!is(output)) return null;
    return output;
  },
);
