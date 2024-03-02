import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_protobuf_assertEncode_TypeTagLength =
  _test_protobuf_assertEncode(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )({
    encode: (input) =>
      ((
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): Uint8Array => {
        const assert = (
          input: any,
          errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
        ): TypeTagLength => {
          const __is = (input: any): input is TypeTagLength => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              "string" === typeof input.fixed &&
              5 <= input.fixed.length &&
              input.fixed.length <= 5 &&
              "string" === typeof input.minimum &&
              3 <= input.minimum.length &&
              "string" === typeof input.maximum &&
              input.maximum.length <= 7 &&
              "string" === typeof input.minimum_and_maximum &&
              3 <= input.minimum_and_maximum.length &&
              input.minimum_and_maximum.length <= 7 &&
              "string" === typeof input.equal &&
              10 <= input.equal.length &&
              input.equal.length <= 19;
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagLength => {
              const $guard = (typia.protobuf.assertEncode as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ((Array.isArray(input.value) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "Array<TypeTagLength.Type>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "TypeTagLength.Type",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TypeTagLength.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "Array<TypeTagLength.Type>",
                    value: input.value,
                  },
                  errorFactory,
                );
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("string" === typeof input.fixed &&
                  (5 <= input.fixed.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".fixed",
                        expected: "string & MinLength<5>",
                        value: input.fixed,
                      },
                      errorFactory,
                    )) &&
                  (input.fixed.length <= 5 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".fixed",
                        expected: "string & MaxLength<5>",
                        value: input.fixed,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".fixed",
                      expected: "(string & MinLength<5> & MaxLength<5>)",
                      value: input.fixed,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.minimum &&
                  (3 <= input.minimum.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum",
                        expected: "string & MinLength<3>",
                        value: input.minimum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minimum",
                      expected: "(string & MinLength<3>)",
                      value: input.minimum,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.maximum &&
                  (input.maximum.length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".maximum",
                        expected: "string & MaxLength<7>",
                        value: input.maximum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maximum",
                      expected: "(string & MaxLength<7>)",
                      value: input.maximum,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.minimum_and_maximum &&
                  (3 <= input.minimum_and_maximum.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum_and_maximum",
                        expected: "string & MinLength<3>",
                        value: input.minimum_and_maximum,
                      },
                      errorFactory,
                    )) &&
                  (input.minimum_and_maximum.length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum_and_maximum",
                        expected: "string & MaxLength<7>",
                        value: input.minimum_and_maximum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minimum_and_maximum",
                      expected: "(string & MinLength<3> & MaxLength<7>)",
                      value: input.minimum_and_maximum,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.equal &&
                  (10 <= input.equal.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".equal",
                        expected: "string & MinLength<10>",
                        value: input.equal,
                      },
                      errorFactory,
                    )) &&
                  (input.equal.length <= 19 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".equal",
                        expected: "string & MaxLength<19>",
                        value: input.equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".equal",
                      expected: "(string & MinLength<10> & MaxLength<19>)",
                      value: input.equal,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TypeTagLength",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagLength",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        };
        const encode = (input: TypeTagLength): Uint8Array => {
          const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
          const $Writer = (typia.protobuf.assertEncode as any).Writer;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "value";
              if (0 !== input.value.length) {
                for (const elem of input.value) {
                  // 1 -> TypeTagLength.Type;
                  writer.uint32(10);
                  writer.fork();
                  $peo1(elem);
                  writer.ldelim();
                }
              }
            };
            const $peo1 = (input: any): any => {
              // property "fixed";
              writer.uint32(10);
              writer.string(input.fixed);
              // property "minimum";
              writer.uint32(18);
              writer.string(input.minimum);
              // property "maximum";
              writer.uint32(26);
              writer.string(input.maximum);
              // property "minimum_and_maximum";
              writer.uint32(34);
              writer.string(input.minimum_and_maximum);
              // property "equal";
              writer.uint32(42);
              writer.string(input.equal);
            };
            const $io1 = (input: any): boolean =>
              "string" === typeof input.fixed &&
              5 <= input.fixed.length &&
              input.fixed.length <= 5 &&
              "string" === typeof input.minimum &&
              3 <= input.minimum.length &&
              "string" === typeof input.maximum &&
              input.maximum.length <= 7 &&
              "string" === typeof input.minimum_and_maximum &&
              3 <= input.minimum_and_maximum.length &&
              input.minimum_and_maximum.length <= 7 &&
              "string" === typeof input.equal &&
              10 <= input.equal.length &&
              input.equal.length <= 19;
            //TypeTagLength;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $Sizer());
          const writer = encoder(new $Writer(sizer));
          return writer.buffer();
        };
        return encode(assert(input, errorFactory));
      })(input),
    decode: (input: Uint8Array): typia.Resolved<TypeTagLength> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // type: Array<TypeTagLength.Type>;
              output.value.push($pdo1(reader, reader.uint32()));
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo1 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          fixed: "" as any,
          minimum: "" as any,
          maximum: "" as any,
          minimum_and_maximum: "" as any,
          equal: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.fixed = reader.string();
              break;
            case 2:
              // string;
              output.minimum = reader.string();
              break;
            case 3:
              // string;
              output.maximum = reader.string();
              break;
            case 4:
              // string;
              output.minimum_and_maximum = reader.string();
              break;
            case 5:
              // string;
              output.equal = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const reader = new $Reader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage TypeTagLength {\n    repeated TypeTagLength.Type value = 1;\n    message Type {\n        required string fixed = 1;\n        required string minimum = 2;\n        required string maximum = 3;\n        required string minimum_and_maximum = 4;\n        required string equal = 5;\n    }\n}',
  });
