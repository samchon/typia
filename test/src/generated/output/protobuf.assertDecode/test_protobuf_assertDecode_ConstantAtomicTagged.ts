import typia from "typia";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
import { TypeGuardError } from "typia";
export const test_protobuf_assertDecode_ConstantAtomicTagged =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)({
    decode: (input) =>
      ((
        input: Uint8Array,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): import("typia").Resolved<ConstantAtomicTagged> => {
        const decode = (
          input: Uint8Array,
        ): import("typia").Resolved<ConstantAtomicTagged> => {
          const $Reader = (typia.protobuf.assertDecode as any).Reader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              id: "" as any,
              age: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // string;
                  output.id = reader.string();
                  break;
                case 2:
                  // int32;
                  output.age = reader.int32();
                  break;
                case 3:
                  // uint32;
                  output.age = reader.uint32();
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
        ): ConstantAtomicTagged => {
          const __is = (input: any): input is ConstantAtomicTagged => {
            const $io0 = (input: any): boolean =>
              ("latest" === input.id ||
                ("string" === typeof input.id &&
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    input.id,
                  ))) &&
              (-1 === input.age ||
                ("number" === typeof input.age &&
                  Math.floor(input.age) === input.age &&
                  0 <= input.age &&
                  input.age <= 4294967295 &&
                  input.age <= 100));
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ConstantAtomicTagged => {
              const $guard = (typia.protobuf.assertDecode as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("latest" === input.id ||
                  ("string" === typeof input.id &&
                    (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                      input.id,
                    ) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".id",
                          expected: 'string & Format<"uuid">',
                          value: input.id,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: '("latest" | (string & Format<"uuid">))',
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                (-1 === input.age ||
                  ("number" === typeof input.age &&
                    ((Math.floor(input.age) === input.age &&
                      0 <= input.age &&
                      input.age <= 4294967295) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".age",
                          expected: 'number & Type<"uint32">',
                          value: input.age,
                        },
                        errorFactory,
                      )) &&
                    (input.age <= 100 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".age",
                          expected: "number & Maximum<100>",
                          value: input.age,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".age",
                      expected:
                        '((number & Type<"uint32"> & Maximum<100>) | -1)',
                      value: input.age,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ConstantAtomicTagged",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantAtomicTagged",
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
      })(input),
    encode: (input: ConstantAtomicTagged): Uint8Array => {
      const $throws = (typia.protobuf.createEncode as any).throws;
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "id";
          writer.uint32(10);
          writer.string(input.id);
          // property "age";
          if (
            "number" === typeof input.age &&
            Math.floor(input.age) === input.age &&
            -2147483648 <= input.age &&
            input.age <= 2147483647
          ) {
            writer.uint32(16);
            writer.int32(input.age);
          } else if (
            "number" === typeof input.age &&
            Math.floor(input.age) === input.age &&
            0 <= input.age &&
            input.age <= 4294967295
          ) {
            writer.uint32(24);
            writer.uint32(input.age);
          } else
            $throws({
              expected: '((number & Type<"uint32"> & Maximum<100>) | -1)',
              value: input.age,
            });
        };
        //ConstantAtomicTagged;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
