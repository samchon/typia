import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_http_createQuery_ObjectHttpNullable = _test_http_query(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)(
  (input: string | URLSearchParams): typia.Resolved<ObjectHttpNullable> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $QueryReader =
      require("typia/lib/functional/$QueryReader").$QueryReader;
    input = $QueryReader.params(input) as URLSearchParams;
    const output = {
      boolean: $QueryReader.boolean(input.get("boolean")),
      bigint: $QueryReader.bigint(input.get("bigint")),
      number: $QueryReader.number(input.get("number")),
      string: $QueryReader.string(input.get("string")),
      constantBoolean: $QueryReader.boolean(input.get("constantBoolean")),
      constantBigint: $QueryReader.bigint(input.get("constantBigint")),
      constantNumber: $QueryReader.number(input.get("constantNumber")),
      constantString: $QueryReader.string(input.get("constantString")),
      nullableArray: $QueryReader.array(
        input
          .getAll("nullableArray")
          .map((elem: any) => $QueryReader.number(elem)),
        null,
      ),
    };
    return output as any;
  },
);
