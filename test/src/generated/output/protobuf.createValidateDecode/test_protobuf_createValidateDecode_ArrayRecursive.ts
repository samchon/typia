import typia from "typia";

import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_protobuf_createValidateDecode_ArrayRecursive =
  _test_protobuf_validateDecode("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )({
    decode: (
      input: Uint8Array,
    ): typia.IValidation<typia.Resolved<ArrayRecursive>> => {
      const validate = (input: any): typia.IValidation<ArrayRecursive> => {
        const errors = [] as any[];
        const __is = (input: any): input is ArrayRecursive => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.children) &&
            input.children.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            ) &&
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.code &&
            "number" === typeof input.sequence &&
            Number.isFinite(input.sequence) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = require("typia/lib/functional/$report").$report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayRecursive => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.children) ||
                  $report(_exceptionable, {
                    path: _path + ".children",
                    expected: "Array<ArrayRecursive.ICategory>",
                    value: input.children,
                  })) &&
                  input.children
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".children[" + _index1 + "]",
                            expected: "ArrayRecursive.ICategory",
                            value: elem,
                          })) &&
                          $vo0(
                            elem,
                            _path + ".children[" + _index1 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".children[" + _index1 + "]",
                          expected: "ArrayRecursive.ICategory",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".children",
                    expected: "Array<ArrayRecursive.ICategory>",
                    value: input.children,
                  }),
                ("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  }),
                "string" === typeof input.code ||
                  $report(_exceptionable, {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                  }),
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)) ||
                  $report(_exceptionable, {
                    path: _path + ".sequence",
                    expected: "number",
                    value: input.sequence,
                  }),
                ((("object" === typeof input.created_at &&
                  null !== input.created_at) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ArrayRecursive.ITimestamp",
                    value: input.created_at,
                  })) &&
                  $vo1(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ArrayRecursive.ITimestamp",
                    value: input.created_at,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.time &&
                  Number.isFinite(input.time)) ||
                  $report(_exceptionable, {
                    path: _path + ".time",
                    expected: "number",
                    value: input.time,
                  }),
                ("number" === typeof input.zone &&
                  Number.isFinite(input.zone)) ||
                  $report(_exceptionable, {
                    path: _path + ".zone",
                    expected: "number",
                    value: input.zone,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ArrayRecursive.ICategory",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ArrayRecursive.ICategory",
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
      const decode = (input: Uint8Array): typia.Resolved<ArrayRecursive> => {
        const $ProtobufReader =
          require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            children: [] as any,
            id: undefined as any,
            code: "" as any,
            sequence: undefined as any,
            created_at: undefined as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // type: Array<ArrayRecursive.ICategory>;
                output.children.push($pdo0(reader, reader.uint32()));
                break;
              case 2:
                // double;
                output.id = reader.double();
                break;
              case 3:
                // string;
                output.code = reader.string();
                break;
              case 4:
                // double;
                output.sequence = reader.double();
                break;
              case 5:
                // ArrayRecursive.ITimestamp;
                output.created_at = $pdo1(reader, reader.uint32());
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
            time: undefined as any,
            zone: undefined as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // double;
                output.time = reader.double();
                break;
              case 2:
                // double;
                output.zone = reader.double();
                break;
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return output;
        };
        const reader = new $ProtobufReader(input);
        return $pdo0(reader);
      };
      const output = decode(input);
      return validate(output) as any;
    },
    encode: (input: ArrayRecursive): Uint8Array => {
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "children";
          if (0 !== input.children.length) {
            for (const elem of input.children) {
              // 1 -> ArrayRecursive.ICategory;
              writer.uint32(10);
              writer.fork();
              $peo0(elem);
              writer.ldelim();
            }
          }
          // property "id";
          writer.uint32(17);
          writer.double(input.id);
          // property "code";
          writer.uint32(26);
          writer.string(input.code);
          // property "sequence";
          writer.uint32(33);
          writer.double(input.sequence);
          // property "created_at";
          // 5 -> ArrayRecursive.ITimestamp;
          writer.uint32(42);
          writer.fork();
          $peo1(input.created_at);
          writer.ldelim();
        };
        const $peo1 = (input: any): any => {
          // property "time";
          writer.uint32(9);
          writer.double(input.time);
          // property "zone";
          writer.uint32(17);
          writer.double(input.zone);
        };
        const $io0 = (input: any): boolean =>
          Array.isArray(input.children) &&
          input.children.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          ) &&
          "number" === typeof input.id &&
          "string" === typeof input.code &&
          "number" === typeof input.sequence &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          $io1(input.created_at);
        const $io1 = (input: any): boolean =>
          "number" === typeof input.time && "number" === typeof input.zone;
        //ArrayRecursive.ICategory;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
