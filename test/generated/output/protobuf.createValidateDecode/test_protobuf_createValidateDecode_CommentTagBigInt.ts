import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_protobuf_createValidateDecode_CommentTagBigInt =
  _test_protobuf_validateDecode("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )({
    decode: (
      input: Uint8Array,
    ): typia.IValidation<typia.Resolved<CommentTagBigInt>> => {
      const validate = (input: any): typia.IValidation<CommentTagBigInt> => {
        const errors = [] as any[];
        const __is = (input: any): input is CommentTagBigInt => {
          return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).value &&
            "bigint" === typeof (input as any).ranged &&
            0 <= (input as any).ranged &&
            (input as any).ranged <= 100 &&
            "bigint" === typeof (input as any).minimum &&
            0 <= (input as any).minimum &&
            "bigint" === typeof (input as any).maximum &&
            (input as any).maximum <= 100 &&
            "bigint" === typeof (input as any).multipleOf &&
            (input as any).multipleOf % 3n === 0n
          );
        };
        if (false === __is(input)) {
          const $report = (typia.protobuf.createValidateDecode as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is CommentTagBigInt => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "bigint" === typeof input.value ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "bigint",
                    value: input.value,
                  }),
                ("bigint" === typeof input.ranged &&
                  (0 <= input.ranged ||
                    $report(_exceptionable, {
                      path: _path + ".ranged",
                      expected: "bigint & Minimum<0n>",
                      value: input.ranged,
                    })) &&
                  (input.ranged <= 100 ||
                    $report(_exceptionable, {
                      path: _path + ".ranged",
                      expected: "bigint & Maximum<100n>",
                      value: input.ranged,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".ranged",
                    expected: "(bigint & Minimum<0n> & Maximum<100n>)",
                    value: input.ranged,
                  }),
                ("bigint" === typeof input.minimum &&
                  (0 <= input.minimum ||
                    $report(_exceptionable, {
                      path: _path + ".minimum",
                      expected: "bigint & Minimum<0n>",
                      value: input.minimum,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "(bigint & Minimum<0n>)",
                    value: input.minimum,
                  }),
                ("bigint" === typeof input.maximum &&
                  (input.maximum <= 100 ||
                    $report(_exceptionable, {
                      path: _path + ".maximum",
                      expected: "bigint & Maximum<100n>",
                      value: input.maximum,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "(bigint & Maximum<100n>)",
                    value: input.maximum,
                  }),
                ("bigint" === typeof input.multipleOf &&
                  (input.multipleOf % 3n === 0n ||
                    $report(_exceptionable, {
                      path: _path + ".multipleOf",
                      expected: "bigint & MultipleOf<3n>",
                      value: input.multipleOf,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "(bigint & MultipleOf<3n>)",
                    value: input.multipleOf,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "CommentTagBigInt",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "CommentTagBigInt",
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
      const decode = (input: Uint8Array): typia.Resolved<CommentTagBigInt> => {
        const $Reader = (typia.protobuf.createValidateDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            value: undefined as any,
            ranged: undefined as any,
            minimum: undefined as any,
            maximum: undefined as any,
            multipleOf: undefined as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // int64;
                output.value = reader.int64();
                break;
              case 2:
                // int64;
                output.ranged = reader.int64();
                break;
              case 3:
                // int64;
                output.minimum = reader.int64();
                break;
              case 4:
                // int64;
                output.maximum = reader.int64();
                break;
              case 5:
                // int64;
                output.multipleOf = reader.int64();
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
      const output = decode(input);
      return validate(output) as any;
    },
    encode: (input: CommentTagBigInt): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          writer.uint32(8);
          writer.int64(input.value);
          // property "ranged";
          writer.uint32(16);
          writer.int64(input.ranged);
          // property "minimum";
          writer.uint32(24);
          writer.int64(input.minimum);
          // property "maximum";
          writer.uint32(32);
          writer.int64(input.maximum);
          // property "multipleOf";
          writer.uint32(40);
          writer.int64(input.multipleOf);
        };
        //CommentTagBigInt;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
