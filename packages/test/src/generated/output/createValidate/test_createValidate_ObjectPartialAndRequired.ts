import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_createValidate_ObjectPartialAndRequired = _test_validate(
  "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
  (input: any): typia.IValidation<ObjectPartialAndRequired> => {
    const errors = [] as any[];
    const __is = (input: any): input is ObjectPartialAndRequired => {
      const $io0 = (input: any): boolean =>
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number))) &&
        (undefined === input.boolean || "boolean" === typeof input.boolean) &&
        (null === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            $io0(input.object))) &&
        Array.isArray(input.array) &&
        input.array.every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        );
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input)) {
      const $report = (typia.createValidate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectPartialAndRequired => {
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            undefined === input.string ||
              "string" === typeof input.string ||
              $report(_exceptionable, {
                path: _path + ".string",
                expected: "(string | undefined)",
                value: input.string,
              }),
            undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number)) ||
              $report(_exceptionable, {
                path: _path + ".number",
                expected: "(number | undefined)",
                value: input.number,
              }),
            undefined === input.boolean ||
              "boolean" === typeof input.boolean ||
              $report(_exceptionable, {
                path: _path + ".boolean",
                expected: "(boolean | undefined)",
                value: input.boolean,
              }),
            null === input.object ||
              ((("object" === typeof input.object && null !== input.object) ||
                $report(_exceptionable, {
                  path: _path + ".object",
                  expected: "(ObjectPartialAndRequired | null)",
                  value: input.object,
                })) &&
                $vo0(
                  input.object,
                  _path + ".object",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".object",
                expected: "(ObjectPartialAndRequired | null)",
                value: input.object,
              }),
            ((Array.isArray(input.array) ||
              $report(_exceptionable, {
                path: _path + ".array",
                expected: "Array<number>",
                value: input.array,
              })) &&
              input.array
                .map(
                  (elem: any, _index1: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $report(_exceptionable, {
                      path: _path + ".array[" + _index1 + "]",
                      expected: "number",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".array",
                expected: "Array<number>",
                value: input.array,
              }),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "ObjectPartialAndRequired",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectPartialAndRequired",
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
  },
);
