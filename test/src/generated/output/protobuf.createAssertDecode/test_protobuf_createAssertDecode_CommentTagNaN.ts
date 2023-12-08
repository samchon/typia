import typia from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { CommentTagNaN } from "../../../structures/CommentTagNaN";

export const test_protobuf_createAssertDecode_CommentTagNaN =
  _test_protobuf_assertDecode("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
    decode: (input: Uint8Array): typia.Resolved<CommentTagNaN> => {
      const decode = (input: Uint8Array): typia.Resolved<CommentTagNaN> => {
        const $Reader = (typia.protobuf.createAssertDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            value: undefined as any,
            ranged: undefined as any,
            minimum: undefined as any,
            maximum: undefined as any,
            multipleOf: undefined as any,
            typed: undefined as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // double;
                output.value = reader.double();
                break;
              case 2:
                // double;
                output.ranged = reader.double();
                break;
              case 3:
                // double;
                output.minimum = reader.double();
                break;
              case 4:
                // double;
                output.maximum = reader.double();
                break;
              case 5:
                // double;
                output.multipleOf = reader.double();
                break;
              case 6:
                // int32;
                output.typed = reader.int32();
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
      const assert = (input: any): CommentTagNaN => {
        const __is = (input: any): input is CommentTagNaN => {
          return (
            "object" === typeof input &&
            null !== input &&
            "number" === typeof (input as any).value &&
            Number.isFinite((input as any).value) &&
            "number" === typeof (input as any).ranged &&
            0 <= (input as any).ranged &&
            (input as any).ranged <= 100 &&
            "number" === typeof (input as any).minimum &&
            Number.isFinite((input as any).minimum) &&
            0 <= (input as any).minimum &&
            "number" === typeof (input as any).maximum &&
            Number.isFinite((input as any).maximum) &&
            (input as any).maximum <= 100 &&
            "number" === typeof (input as any).multipleOf &&
            (input as any).multipleOf % 3 === 0 &&
            "number" === typeof (input as any).typed &&
            Math.floor((input as any).typed) === (input as any).typed &&
            -2147483648 <= (input as any).typed &&
            (input as any).typed <= 2147483647
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is CommentTagNaN => {
            const $guard = (typia.protobuf.createAssertDecode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.value &&
                Number.isFinite(input.value)) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "number",
                  value: input.value,
                })) &&
              (("number" === typeof input.ranged &&
                (0 <= input.ranged ||
                  $guard(_exceptionable, {
                    path: _path + ".ranged",
                    expected: "number & Minimum<0>",
                    value: input.ranged,
                  })) &&
                (input.ranged <= 100 ||
                  $guard(_exceptionable, {
                    path: _path + ".ranged",
                    expected: "number & Maximum<100>",
                    value: input.ranged,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".ranged",
                  expected: "(number & Minimum<0> & Maximum<100>)",
                  value: input.ranged,
                })) &&
              (("number" === typeof input.minimum &&
                (Number.isFinite(input.minimum) ||
                  $guard(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "number",
                    value: input.minimum,
                  })) &&
                (0 <= input.minimum ||
                  $guard(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "number & Minimum<0>",
                    value: input.minimum,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".minimum",
                  expected: "(number & Minimum<0>)",
                  value: input.minimum,
                })) &&
              (("number" === typeof input.maximum &&
                (Number.isFinite(input.maximum) ||
                  $guard(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "number",
                    value: input.maximum,
                  })) &&
                (input.maximum <= 100 ||
                  $guard(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "number & Maximum<100>",
                    value: input.maximum,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".maximum",
                  expected: "(number & Maximum<100>)",
                  value: input.maximum,
                })) &&
              (("number" === typeof input.multipleOf &&
                (input.multipleOf % 3 === 0 ||
                  $guard(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "number & MultipleOf<3>",
                    value: input.multipleOf,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".multipleOf",
                  expected: "(number & MultipleOf<3>)",
                  value: input.multipleOf,
                })) &&
              (("number" === typeof input.typed &&
                ((Math.floor(input.typed) === input.typed &&
                  -2147483648 <= input.typed &&
                  input.typed <= 2147483647) ||
                  $guard(_exceptionable, {
                    path: _path + ".typed",
                    expected: 'number & Type<"int32">',
                    value: input.typed,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".typed",
                  expected: '(number & Type<"int32">)',
                  value: input.typed,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "CommentTagNaN",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "CommentTagNaN",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const output = decode(input);
      return assert(output) as any;
    },
    encode: (input: CommentTagNaN): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          writer.uint32(9);
          writer.double(input.value);
          // property "ranged";
          writer.uint32(17);
          writer.double(input.ranged);
          // property "minimum";
          writer.uint32(25);
          writer.double(input.minimum);
          // property "maximum";
          writer.uint32(33);
          writer.double(input.maximum);
          // property "multipleOf";
          writer.uint32(41);
          writer.double(input.multipleOf);
          // property "typed";
          writer.uint32(48);
          writer.int32(input.typed);
        };
        //CommentTagNaN;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
