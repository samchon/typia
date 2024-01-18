import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_createQuery_ObjectHttpUndefindable = _test_http_query(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  (input: string | URLSearchParams): typia.Resolved<ObjectHttpUndefindable> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $QueryReader =
      require("typia/lib/functional/$QueryReader").$QueryReader;
    input = $QueryReader.params(input) as URLSearchParams;
    const output = {
      boolean: $QueryReader.boolean(input.get("boolean")) ?? undefined,
      bigint: $QueryReader.bigint(input.get("bigint")) ?? undefined,
      number: $QueryReader.number(input.get("number")) ?? undefined,
      string: $QueryReader.string(input.get("string")) ?? undefined,
      constantBoolean:
        $QueryReader.boolean(input.get("constantBoolean")) ?? undefined,
      constantBigint:
        $QueryReader.bigint(input.get("constantBigint")) ?? undefined,
      constantNumber:
        $QueryReader.number(input.get("constantNumber")) ?? undefined,
      constantString:
        $QueryReader.string(input.get("constantString")) ?? undefined,
    };
    return output as any;
  },
);
