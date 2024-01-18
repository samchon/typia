import typia from "typia";

import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_http_createHeaders_ObjectHttpConstant = _test_http_headers(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)(
  (
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpConstant> => {
    const $HeadersReader =
      require("typia/lib/functional/$HeadersReader").$HeadersReader;
    const output = {
      boolean: $HeadersReader.boolean(input.boolean),
      bigint: $HeadersReader.bigint(input.bigint),
      number: $HeadersReader.number(input.number),
      string: input.string,
      template: input.template,
    };
    return output as any;
  },
);
