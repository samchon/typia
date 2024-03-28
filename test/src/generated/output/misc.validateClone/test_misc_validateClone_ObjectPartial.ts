import typia from "typia";

import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_misc_validateClone_ObjectPartial = _test_misc_validateClone(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
  ((input: any): typia.IValidation<typia.Resolved<ObjectPartial>> => {
    const validate = (input: any): typia.IValidation<ObjectPartial> => {
      const errors = [] as any[];
      const __is = (input: any): input is ObjectPartial => {
        const $io0 = (input: any): boolean =>
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (undefined === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number))) &&
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.array ||
            (Array.isArray(input.array) &&
              input.array.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ))) &&
          (null === input.object ||
            undefined === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io1(input.object)));
        const $io1 = (input: any): boolean =>
          "boolean" === typeof input.boolean &&
          "number" === typeof input.number &&
          Number.isFinite(input.number) &&
          "string" === typeof input.string &&
          Array.isArray(input.array) &&
          input.array.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io1(input.object)));
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      };
      if (false === __is(input)) {
        const $report = (typia.misc.validateClone as any).report(errors);
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectPartial => {
          const $vo0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              undefined === input.boolean ||
                "boolean" === typeof input.boolean ||
                $report(_exceptionable, {
                  path: _path + ".boolean",
                  expected: "(boolean | undefined)",
                  value: input.boolean,
                }),
              undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                $report(_exceptionable, {
                  path: _path + ".number",
                  expected: "(number | undefined)",
                  value: input.number,
                }),
              undefined === input.string ||
                "string" === typeof input.string ||
                $report(_exceptionable, {
                  path: _path + ".string",
                  expected: "(string | undefined)",
                  value: input.string,
                }),
              undefined === input.array ||
                ((Array.isArray(input.array) ||
                  $report(_exceptionable, {
                    path: _path + ".array",
                    expected: "(Array<number> | undefined)",
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
                  expected: "(Array<number> | undefined)",
                  value: input.array,
                }),
              null === input.object ||
                undefined === input.object ||
                ((("object" === typeof input.object && null !== input.object) ||
                  $report(_exceptionable, {
                    path: _path + ".object",
                    expected: "(ObjectPartial.IBase | null | undefined)",
                    value: input.object,
                  })) &&
                  $vo1(
                    input.object,
                    _path + ".object",
                    true && _exceptionable,
                  )) ||
                $report(_exceptionable, {
                  path: _path + ".object",
                  expected: "(ObjectPartial.IBase | null | undefined)",
                  value: input.object,
                }),
            ].every((flag: boolean) => flag);
          const $vo1 = (
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
              ((Array.isArray(input.array) ||
                $report(_exceptionable, {
                  path: _path + ".array",
                  expected: "Array<number>",
                  value: input.array,
                })) &&
                input.array
                  .map(
                    (elem: any, _index2: number) =>
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $report(_exceptionable, {
                        path: _path + ".array[" + _index2 + "]",
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
              null === input.object ||
                ((("object" === typeof input.object && null !== input.object) ||
                  $report(_exceptionable, {
                    path: _path + ".object",
                    expected: "(ObjectPartial.IBase | null)",
                    value: input.object,
                  })) &&
                  $vo1(
                    input.object,
                    _path + ".object",
                    true && _exceptionable,
                  )) ||
                $report(_exceptionable, {
                  path: _path + ".object",
                  expected: "(ObjectPartial.IBase | null)",
                  value: input.object,
                }),
            ].every((flag: boolean) => flag);
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $report(true, {
                path: _path + "",
                expected: "Partial<ObjectPartial.IBase>",
                value: input,
              })) &&
              $vo0(input, _path + "", true)) ||
            $report(true, {
              path: _path + "",
              expected: "Partial<ObjectPartial.IBase>",
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
    const clone = (
      input: ObjectPartial,
    ): import("typia").Resolved<ObjectPartial> => {
      const $io1 = (input: any): boolean =>
        "boolean" === typeof input.boolean &&
        "number" === typeof input.number &&
        "string" === typeof input.string &&
        Array.isArray(input.array) &&
        input.array.every((elem: any) => "number" === typeof elem) &&
        (null === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            $io1(input.object)));
      const $cp0 = (input: any) => input.map((elem: any) => elem as any);
      const $co0 = (input: any): any => ({
        boolean: input.boolean as any,
        number: input.number as any,
        string: input.string as any,
        array: Array.isArray(input.array)
          ? $cp0(input.array)
          : (input.array as any),
        object:
          "object" === typeof input.object && null !== input.object
            ? $co1(input.object)
            : (input.object as any),
      });
      const $co1 = (input: any): any => ({
        boolean: input.boolean as any,
        number: input.number as any,
        string: input.string as any,
        array: Array.isArray(input.array)
          ? $cp0(input.array)
          : (input.array as any),
        object:
          "object" === typeof input.object && null !== input.object
            ? $co1(input.object)
            : (input.object as any),
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    const output = validate(input) as any;
    if (output.success) output.data = clone(input);
    return output;
  })(input),
);
