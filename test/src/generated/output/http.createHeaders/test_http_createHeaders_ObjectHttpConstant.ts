import typia from "typia";

import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_http_createHeaders_ObjectHttpConstant = _test_http_headers(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)(
  (
    input: Record<string, string | string[] | undefined>,
  ): import("typia").Resolved<ObjectHttpConstant> => {
    const $boolean = (typia.http.createHeaders as any).boolean;
    const $bigint = (typia.http.createHeaders as any).bigint;
    const $number = (typia.http.createHeaders as any).number;
    const output = {
      boolean: $boolean(input.boolean),
      bigint: $bigint(input.bigint),
      number: $number(input.number),
      string: input.string,
      template: input.template,
    };
    return output as any;
  },
);
