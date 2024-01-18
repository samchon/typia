import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_http_query_ObjectHttpConstant = _test_http_query(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  ((input: string | URLSearchParams): typia.Resolved<ObjectHttpConstant> => {
    const $QueryReader =
      require("typia/lib/functional/$QueryReader").$QueryReader;
    input = $QueryReader.params(input) as URLSearchParams;
    const output = {
      boolean: $QueryReader.boolean(input.get("boolean")),
      bigint: $QueryReader.bigint(input.get("bigint")),
      number: $QueryReader.number(input.get("number")),
      string: $QueryReader.string(input.get("string")),
      template: $QueryReader.string(input.get("template")),
    };
    return output as any;
  })(input),
);
