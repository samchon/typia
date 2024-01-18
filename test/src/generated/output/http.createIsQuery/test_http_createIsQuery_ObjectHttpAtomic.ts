import typia from "typia";

import { _test_http_isQuery } from "../../../internal/_test_http_isQuery";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_createIsQuery_ObjectHttpAtomic = _test_http_isQuery(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(
  (
    input: string | URLSearchParams,
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
    const query = (
      input: string | URLSearchParams,
    ): typia.Resolved<ObjectHttpAtomic> => {
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
      };
      return output as any;
    };
    const output = query(input);
    if (!is(output)) return null;
    return output;
  },
);
