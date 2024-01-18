import typia from "typia";

import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_protobuf_createValidateDecode_ObjectPartialAndRequired =
  _test_protobuf_validateDecode(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
    decode: (input) =>
      ((
        input: Uint8Array,
      ): typia.IValidation<typia.Resolved<ObjectPartialAndRequired>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ObjectPartialAndRequired> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectPartialAndRequired => {
            const $io0 = (input: any): boolean =>
              (undefined === input.string ||
                "string" === typeof input.string) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number))) &&
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean) &&
              (null === input.object ||
                ("object" === typeof input.object &&
                  null !== input.object &&
                  $io0(input.object))) &&
              Array.isArray(input.array) &&
              input.array.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              );
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
            ): input is ObjectPartialAndRequired => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  undefined === input.string ||
                    "string" === typeof input.string ||
                    $report(_exceptionable, {
                      path: _path + ".string",
                      expected: "(string | undefined)",
                      value: input.string,
                    }),
                  undefined === input.number ||
                    ("number" === typeof input.number &&
                      Number.isFinite(input.number)) ||
                    $report(_exceptionable, {
                      path: _path + ".number",
                      expected: "(number | undefined)",
                      value: input.number,
                    }),
                  undefined === input.boolean ||
                    "boolean" === typeof input.boolean ||
                    $report(_exceptionable, {
                      path: _path + ".boolean",
                      expected: "(boolean | undefined)",
                      value: input.boolean,
                    }),
                  null === input.object ||
                    ((("object" === typeof input.object &&
                      null !== input.object) ||
                      $report(_exceptionable, {
                        path: _path + ".object",
                        expected: "(ObjectPartialAndRequired | null)",
                        value: input.object,
                      })) &&
                      $vo0(
                        input.object,
                        _path + ".object",
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + ".object",
                      expected: "(ObjectPartialAndRequired | null)",
                      value: input.object,
                    }),
                  ((Array.isArray(input.array) ||
                    $report(_exceptionable, {
                      path: _path + ".array",
                      expected: "Array<number>",
                      value: input.array,
                    })) &&
                    input.array
                      .map(
                        (elem: any, _index1: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".array[" + _index1 + "]",
                            expected: "number",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".array",
                      expected: "Array<number>",
                      value: input.array,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectPartialAndRequired",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectPartialAndRequired",
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
        const decode = (
          input: Uint8Array,
        ): typia.Resolved<ObjectPartialAndRequired> => {
          const $ProtobufReader =
            require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              object: null as any,
              array: [] as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // string;
                  output.string = reader.string();
                  break;
                case 2:
                  // double;
                  output.number = reader.double();
                  break;
                case 3:
                  // bool;
                  output.boolean = reader.bool();
                  break;
                case 4:
                  // ObjectPartialAndRequired;
                  output.object = $pdo0(reader, reader.uint32());
                  break;
                case 5:
                  // type: Array<number>;
                  if (2 === (tag & 7)) {
                    const piece = reader.uint32() + reader.index();
                    while (reader.index() < piece)
                      output.array.push(reader.double());
                  } else output.array.push(reader.double());
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
      })(input),
    encode: (input: ObjectPartialAndRequired): Uint8Array => {
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "string";
          if (undefined !== input.string) {
            writer.uint32(10);
            writer.string(input.string);
          }
          // property "number";
          if (undefined !== input.number) {
            writer.uint32(17);
            writer.double(input.number);
          }
          // property "boolean";
          if (undefined !== input.boolean) {
            writer.uint32(24);
            writer.bool(input.boolean);
          }
          // property "object";
          if (null !== input.object) {
            // 4 -> ObjectPartialAndRequired;
            writer.uint32(34);
            writer.fork();
            $peo0(input.object);
            writer.ldelim();
          }
          // property "array";
          if (0 !== input.array.length) {
            writer.uint32(42);
            writer.fork();
            for (const elem of input.array) {
              writer.double(elem);
            }
            writer.ldelim();
          }
        };
        const $io0 = (input: any): boolean =>
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.number || "number" === typeof input.number) &&
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io0(input.object))) &&
          Array.isArray(input.array) &&
          input.array.every((elem: any) => "number" === typeof elem);
        //ObjectPartialAndRequired;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
