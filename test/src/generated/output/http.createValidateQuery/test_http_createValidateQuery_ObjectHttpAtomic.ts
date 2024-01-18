import typia from "typia";

import { _test_http_validateQuery } from "../../../internal/_test_http_validateQuery";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_createValidateQuery_ObjectHttpAtomic =
  _test_http_validateQuery("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )(
    (
      input: string | URLSearchParams,
    ): typia.IValidation<typia.Resolved<ObjectHttpAtomic>> => {
      const validate = (input: any): typia.IValidation<ObjectHttpAtomic> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectHttpAtomic => {
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
        if (false === __is(input)) {
          const $report = require("typia/lib/functional/$report").$report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpAtomic => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "boolean" === typeof input.boolean ||
                  $report(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "boolean",
                    value: input.boolean,
                  }),
                "bigint" === typeof input.bigint ||
                  $report(_exceptionable, {
                    path: _path + ".bigint",
                    expected: "bigint",
                    value: input.bigint,
                  }),
                ("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                  $report(_exceptionable, {
                    path: _path + ".number",
                    expected: "number",
                    value: input.number,
                  }),
                "string" === typeof input.string ||
                  $report(_exceptionable, {
                    path: _path + ".string",
                    expected: "string",
                    value: input.string,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpAtomic",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectHttpAtomic",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
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
      return validate(output) as any;
    },
  );
