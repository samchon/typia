import typia from "typia";

import { _test_http_isQuery } from "../../../internal/_test_http_isQuery";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_createIsQuery_ObjectHttpUndefindable =
  _test_http_isQuery("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )(
    (
      input: string | URLSearchParams,
    ): typia.Resolved<ObjectHttpUndefindable> | null => {
      const is = (input: any): input is ObjectHttpUndefindable => {
        const $io0 = (input: any): boolean =>
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (undefined === input.bigint || "bigint" === typeof input.bigint) &&
          (undefined === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number))) &&
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.constantBoolean ||
            true === input.constantBoolean) &&
          (undefined === input.constantBigint ||
            BigInt(1) === input.constantBigint ||
            BigInt(2) === input.constantBigint ||
            BigInt(3) === input.constantBigint) &&
          (undefined === input.constantNumber ||
            3 === input.constantNumber ||
            2 === input.constantNumber ||
            1 === input.constantNumber) &&
          (undefined === input.constantString ||
            "three" === input.constantString ||
            "two" === input.constantString ||
            "one" === input.constantString);
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      };
      const query = (
        input: string | URLSearchParams,
      ): typia.Resolved<ObjectHttpUndefindable> => {
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
      };
      const output = query(input);
      if (!is(output)) return null;
      return output;
    },
  );
