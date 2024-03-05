import typia from "typia";

import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_headers_ObjectHttpUndefindable = _test_http_headers(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
  ((
    input: Record<string, string | string[] | undefined>,
  ): import("typia").Resolved<ObjectHttpUndefindable> => {
    const $boolean = (typia.http.headers as any).boolean;
    const $bigint = (typia.http.headers as any).bigint;
    const $number = (typia.http.headers as any).number;
    const output = {
      boolean: $boolean(input.boolean),
      bigint: $bigint(input.bigint),
      number: $number(input.number),
      string: input.string,
      constantBoolean: $boolean(input.constantboolean),
      constantBigint: $bigint(input.constantbigint),
      constantNumber: $number(input.constantnumber),
      constantString: input.constantstring,
    };
    return output as any;
  })(input),
);
