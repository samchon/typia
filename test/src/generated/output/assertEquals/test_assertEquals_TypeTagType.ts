import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_assertEquals_TypeTagType = _test_assertEquals(
  "TypeTagType",
)<TypeTagType>(TypeTagType)((input) =>
  ((input: any): TypeTagType => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is TypeTagType => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any, _index1: number) =>
            "object" === typeof elem &&
            null !== elem &&
            $io1(elem, true && _exceptionable),
        ) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.int &&
        Math.floor(input.int) === input.int &&
        -2147483648 <= input.int &&
        input.int <= 2147483647 &&
        "number" === typeof input.uint &&
        Math.floor(input.uint) === input.uint &&
        0 <= input.uint &&
        input.uint <= 4294967295 &&
        "number" === typeof input.int32 &&
        Math.floor(input.int32) === input.int32 &&
        -2147483648 <= input.int32 &&
        input.int32 <= 2147483647 &&
        "number" === typeof input.uint32 &&
        Math.floor(input.uint32) === input.uint32 &&
        0 <= input.uint32 &&
        input.uint32 <= 4294967295 &&
        "number" === typeof input.int64 &&
        Math.floor(input.int64) === input.int64 &&
        -9223372036854776000 <= input.int64 &&
        input.int64 <= 9223372036854776000 &&
        "number" === typeof input.uint64 &&
        Math.floor(input.uint64) === input.uint64 &&
        0 <= input.uint64 &&
        input.uint64 <= 18446744073709552000 &&
        "number" === typeof input.float &&
        -1.175494351e38 <= input.float &&
        input.float <= 3.4028235e38 &&
        (7 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              [
                "int",
                "uint",
                "int32",
                "uint32",
                "int64",
                "uint64",
                "float",
              ].some((prop: any) => key === prop)
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagType => {
        const $guard = (typia.assertEquals as any).guard;
        const $join = (typia.assertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<TypeTagType.Type>",
              value: input.value,
            })) &&
            input.value.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "TypeTagType.Type",
                    value: elem,
                  })) &&
                  $ao1(
                    elem,
                    _path + ".value[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value[" + _index1 + "]",
                  expected: "TypeTagType.Type",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<TypeTagType.Type>",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.int &&
            ((Math.floor(input.int) === input.int &&
              -2147483648 <= input.int &&
              input.int <= 2147483647) ||
              $guard(_exceptionable, {
                path: _path + ".int",
                expected: 'number & Type<"int32">',
                value: input.int,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".int",
              expected: '(number & Type<"int32">)',
              value: input.int,
            })) &&
          (("number" === typeof input.uint &&
            ((Math.floor(input.uint) === input.uint &&
              0 <= input.uint &&
              input.uint <= 4294967295) ||
              $guard(_exceptionable, {
                path: _path + ".uint",
                expected: 'number & Type<"uint32">',
                value: input.uint,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint",
              expected: '(number & Type<"uint32">)',
              value: input.uint,
            })) &&
          (("number" === typeof input.int32 &&
            ((Math.floor(input.int32) === input.int32 &&
              -2147483648 <= input.int32 &&
              input.int32 <= 2147483647) ||
              $guard(_exceptionable, {
                path: _path + ".int32",
                expected: 'number & Type<"int32">',
                value: input.int32,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".int32",
              expected: '(number & Type<"int32">)',
              value: input.int32,
            })) &&
          (("number" === typeof input.uint32 &&
            ((Math.floor(input.uint32) === input.uint32 &&
              0 <= input.uint32 &&
              input.uint32 <= 4294967295) ||
              $guard(_exceptionable, {
                path: _path + ".uint32",
                expected: 'number & Type<"uint32">',
                value: input.uint32,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint32",
              expected: '(number & Type<"uint32">)',
              value: input.uint32,
            })) &&
          (("number" === typeof input.int64 &&
            ((Math.floor(input.int64) === input.int64 &&
              -9223372036854776000 <= input.int64 &&
              input.int64 <= 9223372036854776000) ||
              $guard(_exceptionable, {
                path: _path + ".int64",
                expected: 'number & Type<"int64">',
                value: input.int64,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".int64",
              expected: '(number & Type<"int64">)',
              value: input.int64,
            })) &&
          (("number" === typeof input.uint64 &&
            ((Math.floor(input.uint64) === input.uint64 &&
              0 <= input.uint64 &&
              input.uint64 <= 18446744073709552000) ||
              $guard(_exceptionable, {
                path: _path + ".uint64",
                expected: 'number & Type<"uint64">',
                value: input.uint64,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint64",
              expected: '(number & Type<"uint64">)',
              value: input.uint64,
            })) &&
          (("number" === typeof input.float &&
            ((-1.175494351e38 <= input.float && input.float <= 3.4028235e38) ||
              $guard(_exceptionable, {
                path: _path + ".float",
                expected: 'number & Type<"float">',
                value: input.float,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".float",
              expected: '(number & Type<"float">)',
              value: input.float,
            })) &&
          (7 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                [
                  "int",
                  "uint",
                  "int32",
                  "uint32",
                  "int64",
                  "uint64",
                  "float",
                ].some((prop: any) => key === prop)
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagType",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "TypeTagType",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  })(input),
);
