import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_json_assertStringify_ObjectRequired =
  _test_json_assertStringify("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    (input) =>
      ((input: any): string => {
        const assert = (input: any): ObjectRequired => {
          const __is = (input: any): input is ObjectRequired => {
            const $io0 = (input: any): boolean =>
              "boolean" === typeof input.boolean &&
              "number" === typeof input.number &&
              Number.isFinite(input.number) &&
              "string" === typeof input.string &&
              Array.isArray(input.array) &&
              input.array.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              (null === input.object ||
                ("object" === typeof input.object &&
                  null !== input.object &&
                  false === Array.isArray(input.object) &&
                  $io1(input.object)));
            const $io1 = (input: any): boolean =>
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number))) &&
              (undefined === input.string ||
                "string" === typeof input.string) &&
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
                  false === Array.isArray(input.object) &&
                  $io1(input.object)));
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectRequired => {
              const $guard = (typia.json.assertStringify as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("boolean" === typeof input.boolean ||
                  $guard(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "boolean",
                    value: input.boolean,
                  })) &&
                (("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                  $guard(_exceptionable, {
                    path: _path + ".number",
                    expected: "number",
                    value: input.number,
                  })) &&
                ("string" === typeof input.string ||
                  $guard(_exceptionable, {
                    path: _path + ".string",
                    expected: "string",
                    value: input.string,
                  })) &&
                (((Array.isArray(input.array) ||
                  $guard(_exceptionable, {
                    path: _path + ".array",
                    expected: "Array<number>",
                    value: input.array,
                  })) &&
                  input.array.every(
                    (elem: any, _index1: number) =>
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(_exceptionable, {
                        path: _path + ".array[" + _index1 + "]",
                        expected: "number",
                        value: elem,
                      }),
                  )) ||
                  $guard(_exceptionable, {
                    path: _path + ".array",
                    expected: "Array<number>",
                    value: input.array,
                  })) &&
                (null === input.object ||
                  ((("object" === typeof input.object &&
                    null !== input.object &&
                    false === Array.isArray(input.object)) ||
                    $guard(_exceptionable, {
                      path: _path + ".object",
                      expected: "(ObjectRequired.IBase | null)",
                      value: input.object,
                    })) &&
                    $ao1(
                      input.object,
                      _path + ".object",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".object",
                    expected: "(ObjectRequired.IBase | null)",
                    value: input.object,
                  }));
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.boolean ||
                  "boolean" === typeof input.boolean ||
                  $guard(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "(boolean | undefined)",
                    value: input.boolean,
                  })) &&
                (undefined === input.number ||
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                  $guard(_exceptionable, {
                    path: _path + ".number",
                    expected: "(number | undefined)",
                    value: input.number,
                  })) &&
                (undefined === input.string ||
                  "string" === typeof input.string ||
                  $guard(_exceptionable, {
                    path: _path + ".string",
                    expected: "(string | undefined)",
                    value: input.string,
                  })) &&
                (undefined === input.array ||
                  ((Array.isArray(input.array) ||
                    $guard(_exceptionable, {
                      path: _path + ".array",
                      expected: "(Array<number> | undefined)",
                      value: input.array,
                    })) &&
                    input.array.every(
                      (elem: any, _index2: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $guard(_exceptionable, {
                          path: _path + ".array[" + _index2 + "]",
                          expected: "number",
                          value: elem,
                        }),
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".array",
                    expected: "(Array<number> | undefined)",
                    value: input.array,
                  })) &&
                (null === input.object ||
                  undefined === input.object ||
                  ((("object" === typeof input.object &&
                    null !== input.object &&
                    false === Array.isArray(input.object)) ||
                    $guard(_exceptionable, {
                      path: _path + ".object",
                      expected: "(ObjectRequired.IBase | null | undefined)",
                      value: input.object,
                    })) &&
                    $ao1(
                      input.object,
                      _path + ".object",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".object",
                    expected: "(ObjectRequired.IBase | null | undefined)",
                    value: input.object,
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "Required<ObjectRequired.IBase>",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "Required<ObjectRequired.IBase>",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const stringify = (input: ObjectRequired): string => {
          const $io1 = (input: any): boolean =>
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (undefined === input.number || "number" === typeof input.number) &&
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.array ||
              (Array.isArray(input.array) &&
                input.array.every((elem: any) => "number" === typeof elem))) &&
            (null === input.object ||
              undefined === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                false === Array.isArray(input.object) &&
                $io1(input.object)));
          const $number = (typia.json.assertStringify as any).number;
          const $string = (typia.json.assertStringify as any).string;
          const $tail = (typia.json.assertStringify as any).tail;
          const $so0 = (input: any): any =>
            `{"boolean":${input.boolean},"number":${$number(
              input.number,
            )},"string":${$string(input.string)},"array":${`[${input.array
              .map((elem: any) => $number(elem))
              .join(",")}]`},"object":${
              null !== input.object ? $so1(input.object) : "null"
            }}`;
          const $so1 = (input: any): any =>
            `{${$tail(
              `${
                undefined === input.boolean
                  ? ""
                  : `"boolean":${
                      undefined !== input.boolean ? input.boolean : undefined
                    },`
              }${
                undefined === input.number
                  ? ""
                  : `"number":${
                      undefined !== input.number
                        ? $number(input.number)
                        : undefined
                    },`
              }${
                undefined === input.string
                  ? ""
                  : `"string":${
                      undefined !== input.string
                        ? $string(input.string)
                        : undefined
                    },`
              }${
                undefined === input.array
                  ? ""
                  : `"array":${
                      undefined !== input.array
                        ? `[${input.array
                            .map((elem: any) => $number(elem))
                            .join(",")}]`
                        : undefined
                    },`
              }${
                undefined === input.object
                  ? ""
                  : `"object":${
                      undefined !== input.object
                        ? null !== input.object
                          ? $so1(input.object)
                          : "null"
                        : undefined
                    }`
              }`,
            )}}`;
          return $so0(input);
        };
        return stringify(assert(input));
      })(input),
  );
