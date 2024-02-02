import typia from "typia";

import { _test_http_validateFormData } from "../../../internal/_test_http_validateFormData";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_validateFormData_ObjectHttpAtomic =
  _test_http_validateFormData("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )((input) =>
    ((input: FormData): typia.IValidation<typia.Resolved<ObjectHttpAtomic>> => {
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
          const $report = (typia.http.validateFormData as any).report(errors);
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
      const decode = (input: FormData): typia.Resolved<ObjectHttpAtomic> => {
        const $boolean = (typia.http.validateFormData as any).boolean;
        const $bigint = (typia.http.validateFormData as any).bigint;
        const $number = (typia.http.validateFormData as any).number;
        const $string = (typia.http.validateFormData as any).string;
        const output = {
          boolean: $boolean(input.get("boolean")),
          bigint: $bigint(input.get("bigint")),
          number: $number(input.get("number")),
          string: $string(input.get("string")),
        };
        return output as any;
      };
      const output = decode(input);
      return validate(output) as any;
    })(input),
  );
