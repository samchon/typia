import typia from "typia";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { TypeTagRangeBigInt } from "../../../structures/TypeTagRangeBigInt";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_protobuf_assertDecodeCustom_TypeTagRangeBigInt =
  _test_protobuf_assertDecode(CustomGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)({
    decode: (input) =>
      ((
        input: Uint8Array,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): import("typia").Resolved<TypeTagRangeBigInt> => {
        const decode = (
          input: Uint8Array,
        ): import("typia").Resolved<TypeTagRangeBigInt> => {
          const $Reader = (typia.protobuf.assertDecode as any).Reader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: [] as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // type: Array<TypeTagRangeBigInt.Type>;
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
              greater: undefined as any,
              greater_equal: undefined as any,
              less: undefined as any,
              less_equal: undefined as any,
              greater_less: undefined as any,
              greater_equal_less: undefined as any,
              greater_less_equal: undefined as any,
              greater_equal_less_equal: undefined as any,
              equal: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // int64;
                  output.greater = reader.int64();
                  break;
                case 2:
                  // int64;
                  output.greater_equal = reader.int64();
                  break;
                case 3:
                  // int64;
                  output.less = reader.int64();
                  break;
                case 4:
                  // int64;
                  output.less_equal = reader.int64();
                  break;
                case 5:
                  // int64;
                  output.greater_less = reader.int64();
                  break;
                case 6:
                  // int64;
                  output.greater_equal_less = reader.int64();
                  break;
                case 7:
                  // int64;
                  output.greater_less_equal = reader.int64();
                  break;
                case 8:
                  // int64;
                  output.greater_equal_less_equal = reader.int64();
                  break;
                case 9:
                  // int64;
                  output.equal = reader.int64();
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
        };
        const assert = (
          input: any,
          errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
        ): TypeTagRangeBigInt => {
          const __is = (input: any): input is TypeTagRangeBigInt => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              "bigint" === typeof input.greater &&
              BigInt(3) < input.greater &&
              "bigint" === typeof input.greater_equal &&
              BigInt(3) <= input.greater_equal &&
              "bigint" === typeof input.less &&
              input.less < BigInt(7) &&
              "bigint" === typeof input.less_equal &&
              input.less_equal <= BigInt(7) &&
              "bigint" === typeof input.greater_less &&
              BigInt(3) < input.greater_less &&
              input.greater_less < BigInt(7) &&
              "bigint" === typeof input.greater_equal_less &&
              BigInt(3) <= input.greater_equal_less &&
              input.greater_equal_less < BigInt(7) &&
              "bigint" === typeof input.greater_less_equal &&
              BigInt(3) < input.greater_less_equal &&
              input.greater_less_equal <= BigInt(7) &&
              "bigint" === typeof input.greater_equal_less_equal &&
              BigInt(3) <= input.greater_equal_less_equal &&
              input.greater_equal_less_equal <= BigInt(7) &&
              "bigint" === typeof input.equal &&
              BigInt(10) <= input.equal &&
              input.equal <= BigInt(10);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagRangeBigInt => {
              const $guard = (typia.protobuf.assertDecode as any).guard;
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
                      expected: "Array<TypeTagRangeBigInt.Type>",
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
                            expected: "TypeTagRangeBigInt.Type",
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
                          expected: "TypeTagRangeBigInt.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "Array<TypeTagRangeBigInt.Type>",
                    value: input.value,
                  },
                  errorFactory,
                );
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("bigint" === typeof input.greater &&
                  (BigInt(3) < input.greater ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater",
                        expected: "bigint & ExclusiveMinimum<3n>",
                        value: input.greater,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater",
                      expected: "(bigint & ExclusiveMinimum<3n>)",
                      value: input.greater,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.greater_equal &&
                  (BigInt(3) <= input.greater_equal ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_equal",
                        expected: "bigint & Minimum<3n>",
                        value: input.greater_equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater_equal",
                      expected: "(bigint & Minimum<3n>)",
                      value: input.greater_equal,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.less &&
                  (input.less < BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".less",
                        expected: "bigint & ExclusiveMaximum<7n>",
                        value: input.less,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".less",
                      expected: "(bigint & ExclusiveMaximum<7n>)",
                      value: input.less,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.less_equal &&
                  (input.less_equal <= BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".less_equal",
                        expected: "bigint & Maximum<7n>",
                        value: input.less_equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".less_equal",
                      expected: "(bigint & Maximum<7n>)",
                      value: input.less_equal,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.greater_less &&
                  (BigInt(3) < input.greater_less ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_less",
                        expected: "bigint & ExclusiveMinimum<3n>",
                        value: input.greater_less,
                      },
                      errorFactory,
                    )) &&
                  (input.greater_less < BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_less",
                        expected: "bigint & ExclusiveMaximum<7n>",
                        value: input.greater_less,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater_less",
                      expected:
                        "(bigint & ExclusiveMinimum<3n> & ExclusiveMaximum<7n>)",
                      value: input.greater_less,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.greater_equal_less &&
                  (BigInt(3) <= input.greater_equal_less ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_equal_less",
                        expected: "bigint & Minimum<3n>",
                        value: input.greater_equal_less,
                      },
                      errorFactory,
                    )) &&
                  (input.greater_equal_less < BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_equal_less",
                        expected: "bigint & ExclusiveMaximum<7n>",
                        value: input.greater_equal_less,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater_equal_less",
                      expected: "(bigint & Minimum<3n> & ExclusiveMaximum<7n>)",
                      value: input.greater_equal_less,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.greater_less_equal &&
                  (BigInt(3) < input.greater_less_equal ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_less_equal",
                        expected: "bigint & ExclusiveMinimum<3n>",
                        value: input.greater_less_equal,
                      },
                      errorFactory,
                    )) &&
                  (input.greater_less_equal <= BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_less_equal",
                        expected: "bigint & Maximum<7n>",
                        value: input.greater_less_equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater_less_equal",
                      expected: "(bigint & ExclusiveMinimum<3n> & Maximum<7n>)",
                      value: input.greater_less_equal,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.greater_equal_less_equal &&
                  (BigInt(3) <= input.greater_equal_less_equal ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_equal_less_equal",
                        expected: "bigint & Minimum<3n>",
                        value: input.greater_equal_less_equal,
                      },
                      errorFactory,
                    )) &&
                  (input.greater_equal_less_equal <= BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_equal_less_equal",
                        expected: "bigint & Maximum<7n>",
                        value: input.greater_equal_less_equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater_equal_less_equal",
                      expected: "(bigint & Minimum<3n> & Maximum<7n>)",
                      value: input.greater_equal_less_equal,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.equal &&
                  (BigInt(10) <= input.equal ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".equal",
                        expected: "bigint & Minimum<10n>",
                        value: input.equal,
                      },
                      errorFactory,
                    )) &&
                  (input.equal <= BigInt(10) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".equal",
                        expected: "bigint & Maximum<10n>",
                        value: input.equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".equal",
                      expected: "(bigint & Minimum<10n> & Maximum<10n>)",
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
                      expected: "TypeTagRangeBigInt",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagRangeBigInt",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        };
        const output = decode(input);
        return assert(output, errorFactory) as any;
      })(input, (p) => new CustomGuardError(p)),
    encode: (input: TypeTagRangeBigInt): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          if (0 !== input.value.length) {
            for (const elem of input.value) {
              // 1 -> TypeTagRangeBigInt.Type;
              writer.uint32(10);
              writer.fork();
              $peo1(elem);
              writer.ldelim();
            }
          }
        };
        const $peo1 = (input: any): any => {
          // property "greater";
          writer.uint32(8);
          writer.int64(input.greater);
          // property "greater_equal";
          writer.uint32(16);
          writer.int64(input.greater_equal);
          // property "less";
          writer.uint32(24);
          writer.int64(input.less);
          // property "less_equal";
          writer.uint32(32);
          writer.int64(input.less_equal);
          // property "greater_less";
          writer.uint32(40);
          writer.int64(input.greater_less);
          // property "greater_equal_less";
          writer.uint32(48);
          writer.int64(input.greater_equal_less);
          // property "greater_less_equal";
          writer.uint32(56);
          writer.int64(input.greater_less_equal);
          // property "greater_equal_less_equal";
          writer.uint32(64);
          writer.int64(input.greater_equal_less_equal);
          // property "equal";
          writer.uint32(72);
          writer.int64(input.equal);
        };
        const $io1 = (input: any): boolean =>
          "bigint" === typeof input.greater &&
          BigInt(3) < input.greater &&
          "bigint" === typeof input.greater_equal &&
          BigInt(3) <= input.greater_equal &&
          "bigint" === typeof input.less &&
          input.less < BigInt(7) &&
          "bigint" === typeof input.less_equal &&
          input.less_equal <= BigInt(7) &&
          "bigint" === typeof input.greater_less &&
          BigInt(3) < input.greater_less &&
          input.greater_less < BigInt(7) &&
          "bigint" === typeof input.greater_equal_less &&
          BigInt(3) <= input.greater_equal_less &&
          input.greater_equal_less < BigInt(7) &&
          "bigint" === typeof input.greater_less_equal &&
          BigInt(3) < input.greater_less_equal &&
          input.greater_less_equal <= BigInt(7) &&
          "bigint" === typeof input.greater_equal_less_equal &&
          BigInt(3) <= input.greater_equal_less_equal &&
          input.greater_equal_less_equal <= BigInt(7) &&
          "bigint" === typeof input.equal &&
          BigInt(10) <= input.equal &&
          input.equal <= BigInt(10);
        //TypeTagRangeBigInt;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
