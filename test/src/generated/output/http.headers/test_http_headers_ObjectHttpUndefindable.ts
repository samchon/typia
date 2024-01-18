import typia from "typia";

import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_headers_ObjectHttpUndefindable = _test_http_headers(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
  ((
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpUndefindable> => {
    const $HeadersReader =
      require("typia/lib/functional/$HeadersReader").$HeadersReader;
    const output = {
      boolean: $HeadersReader.boolean(input.boolean),
      bigint: $HeadersReader.bigint(input.bigint),
      number: $HeadersReader.number(input.number),
      string: input.string,
      constantBoolean: $HeadersReader.boolean(input.constantboolean),
      constantBigint: $HeadersReader.bigint(input.constantbigint),
      constantNumber: $HeadersReader.number(input.constantnumber),
      constantString: input.constantstring,
    };
    return output as any;
  })(input),
);
