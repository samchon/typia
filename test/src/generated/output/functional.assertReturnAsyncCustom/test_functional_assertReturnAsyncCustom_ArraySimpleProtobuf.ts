import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../../internal/_test_functional_assertReturnAsync";
import { ArraySimpleProtobuf } from "../../../structures/ArraySimpleProtobuf";

export const test_functional_assertReturnAsyncCustom_ArraySimpleProtobuf =
  _test_functional_assertReturnAsync(CustomGuardError)("ArraySimpleProtobuf")(
    ArraySimpleProtobuf,
  )(
    (p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
      async (input: ArraySimpleProtobuf): Promise<ArraySimpleProtobuf> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ArraySimpleProtobuf => {
          const __is = (input: any): input is ArraySimpleProtobuf => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.boolean) &&
              input.boolean.every((elem: any) => "boolean" === typeof elem) &&
              Array.isArray(input.int32) &&
              input.int32.every(
                (elem: any) =>
                  "number" === typeof elem &&
                  Math.floor(elem) === elem &&
                  -2147483648 <= elem &&
                  elem <= 2147483647,
              ) &&
              Array.isArray(input.uint32) &&
              input.uint32.every(
                (elem: any) =>
                  "number" === typeof elem &&
                  Math.floor(elem) === elem &&
                  0 <= elem &&
                  elem <= 4294967295,
              ) &&
              Array.isArray(input.int64) &&
              input.int64.every(
                (elem: any) => "bigint" === typeof elem && true,
              ) &&
              Array.isArray(input.uint64) &&
              input.uint64.every(
                (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
              ) &&
              Array.isArray(input.float) &&
              input.float.every(
                (elem: any) =>
                  "number" === typeof elem &&
                  -1.175494351e38 <= elem &&
                  elem <= 3.4028235e38,
              ) &&
              Array.isArray(input.double) &&
              input.double.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem) && true,
              ) &&
              Array.isArray(input.string) &&
              input.string.every((elem: any) => "string" === typeof elem) &&
              Array.isArray(input.bytes) &&
              input.bytes.every((elem: any) => elem instanceof Uint8Array) &&
              Array.isArray(input.object) &&
              input.object.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              );
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArraySimpleProtobuf => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.boolean) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean",
                      expected: "Array<boolean>",
                      value: input.boolean,
                    },
                    errorFactory,
                  )) &&
                  input.boolean.every(
                    (elem: any, _index1: number) =>
                      "boolean" === typeof elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".boolean[" + _index1 + "]",
                          expected: "boolean",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean",
                      expected: "Array<boolean>",
                      value: input.boolean,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.int32) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int32",
                      expected: 'Array<number & Type<"int32">>',
                      value: input.int32,
                    },
                    errorFactory,
                  )) &&
                  input.int32.every(
                    (elem: any, _index2: number) =>
                      ("number" === typeof elem &&
                        ((Math.floor(elem) === elem &&
                          -2147483648 <= elem &&
                          elem <= 2147483647) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".int32[" + _index2 + "]",
                              expected: 'number & Type<"int32">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".int32[" + _index2 + "]",
                          expected: '(number & Type<"int32">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int32",
                      expected: 'Array<number & Type<"int32">>',
                      value: input.int32,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.uint32) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint32",
                      expected: 'Array<number & Type<"uint32">>',
                      value: input.uint32,
                    },
                    errorFactory,
                  )) &&
                  input.uint32.every(
                    (elem: any, _index3: number) =>
                      ("number" === typeof elem &&
                        ((Math.floor(elem) === elem &&
                          0 <= elem &&
                          elem <= 4294967295) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".uint32[" + _index3 + "]",
                              expected: 'number & Type<"uint32">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".uint32[" + _index3 + "]",
                          expected: '(number & Type<"uint32">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint32",
                      expected: 'Array<number & Type<"uint32">>',
                      value: input.uint32,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.int64) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int64",
                      expected: 'Array<bigint & Type<"int64">>',
                      value: input.int64,
                    },
                    errorFactory,
                  )) &&
                  input.int64.every(
                    (elem: any, _index4: number) =>
                      ("bigint" === typeof elem &&
                        (true ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".int64[" + _index4 + "]",
                              expected: 'bigint & Type<"int64">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".int64[" + _index4 + "]",
                          expected: '(bigint & Type<"int64">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int64",
                      expected: 'Array<bigint & Type<"int64">>',
                      value: input.int64,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.uint64) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint64",
                      expected: 'Array<bigint & Type<"uint64">>',
                      value: input.uint64,
                    },
                    errorFactory,
                  )) &&
                  input.uint64.every(
                    (elem: any, _index5: number) =>
                      ("bigint" === typeof elem &&
                        (BigInt(0) <= elem ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".uint64[" + _index5 + "]",
                              expected: 'bigint & Type<"uint64">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".uint64[" + _index5 + "]",
                          expected: '(bigint & Type<"uint64">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint64",
                      expected: 'Array<bigint & Type<"uint64">>',
                      value: input.uint64,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.float) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".float",
                      expected: 'Array<number & Type<"float">>',
                      value: input.float,
                    },
                    errorFactory,
                  )) &&
                  input.float.every(
                    (elem: any, _index6: number) =>
                      ("number" === typeof elem &&
                        ((-1.175494351e38 <= elem && elem <= 3.4028235e38) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".float[" + _index6 + "]",
                              expected: 'number & Type<"float">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".float[" + _index6 + "]",
                          expected: '(number & Type<"float">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".float",
                      expected: 'Array<number & Type<"float">>',
                      value: input.float,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.double) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".double",
                      expected: 'Array<number & Type<"double">>',
                      value: input.double,
                    },
                    errorFactory,
                  )) &&
                  input.double.every(
                    (elem: any, _index7: number) =>
                      ("number" === typeof elem &&
                        (Number.isFinite(elem) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".double[" + _index7 + "]",
                              expected: "number",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                        (true ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".double[" + _index7 + "]",
                              expected: 'number & Type<"double">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".double[" + _index7 + "]",
                          expected: '(number & Type<"double">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".double",
                      expected: 'Array<number & Type<"double">>',
                      value: input.double,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.string) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".string",
                      expected: "Array<string>",
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                  input.string.every(
                    (elem: any, _index8: number) =>
                      "string" === typeof elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".string[" + _index8 + "]",
                          expected: "string",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".string",
                      expected: "Array<string>",
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.bytes) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bytes",
                      expected: "Array<Uint8Array>",
                      value: input.bytes,
                    },
                    errorFactory,
                  )) &&
                  input.bytes.every(
                    (elem: any, _index9: number) =>
                      elem instanceof Uint8Array ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".bytes[" + _index9 + "]",
                          expected: "Uint8Array",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bytes",
                      expected: "Array<Uint8Array>",
                      value: input.bytes,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.object) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".object",
                      expected: "Array<ArraySimpleProtobuf>",
                      value: input.object,
                    },
                    errorFactory,
                  )) &&
                  input.object.every(
                    (elem: any, _index10: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".object[" + _index10 + "]",
                            expected: "ArraySimpleProtobuf",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao0(
                          elem,
                          _path + ".object[" + _index10 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".object[" + _index10 + "]",
                          expected: "ArraySimpleProtobuf",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".object",
                      expected: "Array<ArraySimpleProtobuf>",
                      value: input.object,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ArraySimpleProtobuf",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArraySimpleProtobuf",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(await p(input));
      },
  );
