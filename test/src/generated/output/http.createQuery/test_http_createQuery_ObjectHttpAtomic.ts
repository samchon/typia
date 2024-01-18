import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_createQuery_ObjectHttpAtomic = _test_http_query(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(
  (input: string | URLSearchParams): typia.Resolved<ObjectHttpAtomic> => {
    const $QueryReader =
      require("typia/lib/functional/$QueryReader").$QueryReader;
    input = $QueryReader.params(input) as URLSearchParams;
    const output = {
      boolean: $QueryReader.boolean(input.get("boolean")),
      bigint: $QueryReader.bigint(input.get("bigint")),
      number: $QueryReader.number(input.get("number")),
      string: $QueryReader.string(input.get("string")),
    };
    return output as any;
  },
);
