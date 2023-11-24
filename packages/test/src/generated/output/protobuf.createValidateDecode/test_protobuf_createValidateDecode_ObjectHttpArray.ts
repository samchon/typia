import typia from "typia";

import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_protobuf_createValidateDecode_ObjectHttpArray =
  _test_protobuf_validateDecode("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )({
    decode: (
      input: Uint8Array,
    ): typia.IValidation<typia.Resolved<ObjectHttpArray>> => {
      const validate = (input: any): typia.IValidation<ObjectHttpArray> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectHttpArray => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.booleans) &&
            input.booleans.every((elem: any) => "boolean" === typeof elem) &&
            Array.isArray(input.bigints) &&
            input.bigints.every((elem: any) => "bigint" === typeof elem) &&
            Array.isArray(input.numbers) &&
            input.numbers.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            Array.isArray(input.strings) &&
            input.strings.every((elem: any) => "string" === typeof elem) &&
            Array.isArray(input.templates) &&
            input.templates.every(
              (elem: any) =>
                "string" === typeof elem &&
                RegExp(/^something_(.*)/).test(elem),
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.protobuf.createValidateDecode as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpArray => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.booleans) ||
                  $report(_exceptionable, {
                    path: _path + ".booleans",
                    expected: "Array<boolean>",
                    value: input.booleans,
                  })) &&
                  input.booleans
                    .map(
                      (elem: any, _index1: number) =>
                        "boolean" === typeof elem ||
                        $report(_exceptionable, {
                          path: _path + ".booleans[" + _index1 + "]",
                          expected: "boolean",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".booleans",
                    expected: "Array<boolean>",
                    value: input.booleans,
                  }),
                ((Array.isArray(input.bigints) ||
                  $report(_exceptionable, {
                    path: _path + ".bigints",
                    expected: "Array<bigint>",
                    value: input.bigints,
                  })) &&
                  input.bigints
                    .map(
                      (elem: any, _index2: number) =>
                        "bigint" === typeof elem ||
                        $report(_exceptionable, {
                          path: _path + ".bigints[" + _index2 + "]",
                          expected: "bigint",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".bigints",
                    expected: "Array<bigint>",
                    value: input.bigints,
                  }),
                ((Array.isArray(input.numbers) ||
                  $report(_exceptionable, {
                    path: _path + ".numbers",
                    expected: "Array<number>",
                    value: input.numbers,
                  })) &&
                  input.numbers
                    .map(
                      (elem: any, _index3: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $report(_exceptionable, {
                          path: _path + ".numbers[" + _index3 + "]",
                          expected: "number",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".numbers",
                    expected: "Array<number>",
                    value: input.numbers,
                  }),
                ((Array.isArray(input.strings) ||
                  $report(_exceptionable, {
                    path: _path + ".strings",
                    expected: "Array<string>",
                    value: input.strings,
                  })) &&
                  input.strings
                    .map(
                      (elem: any, _index4: number) =>
                        "string" === typeof elem ||
                        $report(_exceptionable, {
                          path: _path + ".strings[" + _index4 + "]",
                          expected: "string",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".strings",
                    expected: "Array<string>",
                    value: input.strings,
                  }),
                ((Array.isArray(input.templates) ||
                  $report(_exceptionable, {
                    path: _path + ".templates",
                    expected: "Array<`something_${string}`>",
                    value: input.templates,
                  })) &&
                  input.templates
                    .map(
                      (elem: any, _index5: number) =>
                        ("string" === typeof elem &&
                          RegExp(/^something_(.*)/).test(elem)) ||
                        $report(_exceptionable, {
                          path: _path + ".templates[" + _index5 + "]",
                          expected: "`something_${string}`",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".templates",
                    expected: "Array<`something_${string}`>",
                    value: input.templates,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpArray",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectHttpArray",
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
      const decode = (input: Uint8Array): typia.Resolved<ObjectHttpArray> => {
        const $Reader = (typia.protobuf.createValidateDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            booleans: [] as any,
            bigints: [] as any,
            numbers: [] as any,
            strings: [] as any,
            templates: [] as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // type: Array<boolean>;
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.booleans.push(reader.bool());
                } else output.booleans.push(reader.bool());
                break;
              case 2:
                // type: Array<bigint>;
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.bigints.push(reader.int64());
                } else output.bigints.push(reader.int64());
                break;
              case 3:
                // type: Array<number>;
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.numbers.push(reader.double());
                } else output.numbers.push(reader.double());
                break;
              case 4:
                // type: Array<string>;
                output.strings.push(reader.string());
                break;
              case 5:
                // type: Array<`something_${string}`>;
                output.templates.push(reader.string());
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
    encode: (input: ObjectHttpArray): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "booleans";
          if (0 !== input.booleans.length) {
            writer.uint32(10);
            writer.fork();
            for (const elem of input.booleans) {
              writer.bool(elem);
            }
            writer.ldelim();
          }
          // property "bigints";
          if (0 !== input.bigints.length) {
            writer.uint32(18);
            writer.fork();
            for (const elem of input.bigints) {
              writer.int64(elem);
            }
            writer.ldelim();
          }
          // property "numbers";
          if (0 !== input.numbers.length) {
            writer.uint32(26);
            writer.fork();
            for (const elem of input.numbers) {
              writer.double(elem);
            }
            writer.ldelim();
          }
          // property "strings";
          if (0 !== input.strings.length) {
            for (const elem of input.strings) {
              writer.uint32(34);
              writer.string(elem);
            }
          }
          // property "templates";
          if (0 !== input.templates.length) {
            for (const elem of input.templates) {
              writer.uint32(42);
              writer.string(elem);
            }
          }
        };
        //ObjectHttpArray;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
