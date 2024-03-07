import typia from "typia";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_protobuf_assertDecodeCustom_CommentTagAtomicUnion =
  _test_protobuf_assertDecode(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
    decode: (input) =>
      ((
        input: Uint8Array,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): import("typia").Resolved<CommentTagAtomicUnion> => {
        const decode = (
          input: Uint8Array,
        ): import("typia").Resolved<CommentTagAtomicUnion> => {
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
                  // type: Array<CommentTagAtomicUnion.Type>;
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
              value: "" as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // double;
                  output.value = reader.double();
                  break;
                case 2:
                  // string;
                  output.value = reader.string();
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
        ): CommentTagAtomicUnion => {
          const __is = (input: any): input is CommentTagAtomicUnion => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              ("string" === typeof input.value &&
                3 <= input.value.length &&
                input.value.length <= 7) ||
              ("number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagAtomicUnion => {
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
                      expected: "Array<CommentTagAtomicUnion.Type>",
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
                            expected: "CommentTagAtomicUnion.Type",
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
                          expected: "CommentTagAtomicUnion.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "Array<CommentTagAtomicUnion.Type>",
                    value: input.value,
                  },
                  errorFactory,
                );
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" === typeof input.value &&
                  (3 <= input.value.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".value",
                        expected: "string & MinLength<3>",
                        value: input.value,
                      },
                      errorFactory,
                    )) &&
                  (input.value.length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".value",
                        expected: "string & MaxLength<7>",
                        value: input.value,
                      },
                      errorFactory,
                    ))) ||
                ("number" === typeof input.value &&
                  (Number.isFinite(input.value) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".value",
                        expected: "number",
                        value: input.value,
                      },
                      errorFactory,
                    )) &&
                  (3 <= input.value ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".value",
                        expected: "number & Minimum<3>",
                        value: input.value,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected:
                      "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
                    value: input.value,
                  },
                  errorFactory,
                );
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "CommentTagAtomicUnion",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "CommentTagAtomicUnion",
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
    encode: (input: CommentTagAtomicUnion): Uint8Array => {
      const $throws = (typia.protobuf.createEncode as any).throws;
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          if (0 !== input.value.length) {
            for (const elem of input.value) {
              // 1 -> CommentTagAtomicUnion.Type;
              writer.uint32(10);
              writer.fork();
              $peo1(elem);
              writer.ldelim();
            }
          }
        };
        const $peo1 = (input: any): any => {
          // property "value";
          if ("number" === typeof input.value) {
            writer.uint32(9);
            writer.double(input.value);
          } else if ("string" === typeof input.value) {
            writer.uint32(18);
            writer.string(input.value);
          } else
            $throws({
              expected:
                "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
              value: input.value,
            });
        };
        const $io1 = (input: any): boolean =>
          ("string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7) ||
          ("number" === typeof input.value && 3 <= input.value);
        //CommentTagAtomicUnion;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
