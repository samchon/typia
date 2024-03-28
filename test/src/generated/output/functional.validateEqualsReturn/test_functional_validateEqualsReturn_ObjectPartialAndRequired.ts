import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../../internal/_test_functional_validateEqualsReturn";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_functional_validateEqualsReturn_ObjectPartialAndRequired =
  _test_functional_validateEqualsReturn("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )(
    (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
      (
        input: ObjectPartialAndRequired,
      ): import("typia").IValidation<ObjectPartialAndRequired> => {
        const result = ((
          input: any,
        ): typia.IValidation<ObjectPartialAndRequired> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectPartialAndRequired => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              (undefined === input.string ||
                "string" === typeof input.string) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number))) &&
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean) &&
              (null === input.object ||
                ("object" === typeof input.object &&
                  null !== input.object &&
                  $io0(input.object, true && _exceptionable))) &&
              Array.isArray(input.array) &&
              input.array.every(
                (elem: any, _index1: number) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["string", "number", "boolean", "object", "array"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsReturn as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectPartialAndRequired => {
              const $join = (typia.functional.validateEqualsReturn as any).join;
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
                    ((("object" === typeof input.object &&
                      null !== input.object) ||
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
                  2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          [
                            "string",
                            "number",
                            "boolean",
                            "object",
                            "array",
                          ].some((prop: any) => key === prop)
                        )
                          return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $report(_exceptionable, {
                          path: _path + $join(key),
                          expected: "undefined",
                          value: value,
                        });
                      })
                      .every((flag: boolean) => flag),
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
