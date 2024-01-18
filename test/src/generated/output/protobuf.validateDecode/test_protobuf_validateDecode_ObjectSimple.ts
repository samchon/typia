import typia from "typia";

import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_protobuf_createValidateDecode_ObjectSimple =
  _test_protobuf_validateDecode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
    decode: (input) =>
      ((input: Uint8Array): typia.IValidation<typia.Resolved<ObjectSimple>> => {
        const validate = (input: any): typia.IValidation<ObjectSimple> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectSimple => {
            return (
              "object" === typeof input &&
              null !== input &&
              "object" === typeof (input as any).scale &&
              null !== (input as any).scale &&
              "number" === typeof ((input as any).scale as any).x &&
              Number.isFinite(((input as any).scale as any).x) &&
              "number" === typeof ((input as any).scale as any).y &&
              Number.isFinite(((input as any).scale as any).y) &&
              "number" === typeof ((input as any).scale as any).z &&
              Number.isFinite(((input as any).scale as any).z) &&
              "object" === typeof (input as any).position &&
              null !== (input as any).position &&
              "number" === typeof ((input as any).position as any).x &&
              Number.isFinite(((input as any).position as any).x) &&
              "number" === typeof ((input as any).position as any).y &&
              Number.isFinite(((input as any).position as any).y) &&
              "number" === typeof ((input as any).position as any).z &&
              Number.isFinite(((input as any).position as any).z) &&
              "object" === typeof (input as any).rotate &&
              null !== (input as any).rotate &&
              "number" === typeof ((input as any).rotate as any).x &&
              Number.isFinite(((input as any).rotate as any).x) &&
              "number" === typeof ((input as any).rotate as any).y &&
              Number.isFinite(((input as any).rotate as any).y) &&
              "number" === typeof ((input as any).rotate as any).z &&
              Number.isFinite(((input as any).rotate as any).z) &&
              "object" === typeof (input as any).pivot &&
              null !== (input as any).pivot &&
              "number" === typeof ((input as any).pivot as any).x &&
              Number.isFinite(((input as any).pivot as any).x) &&
              "number" === typeof ((input as any).pivot as any).y &&
              Number.isFinite(((input as any).pivot as any).y) &&
              "number" === typeof ((input as any).pivot as any).z &&
              Number.isFinite(((input as any).pivot as any).z)
            );
          };
          if (false === __is(input)) {
            const $report = require("typia/lib/functional/$report").$report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectSimple => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((("object" === typeof input.scale && null !== input.scale) ||
                    $report(_exceptionable, {
                      path: _path + ".scale",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.scale,
                    })) &&
                    $vo1(
                      input.scale,
                      _path + ".scale",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".scale",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.scale,
                    }),
                  ((("object" === typeof input.position &&
                    null !== input.position) ||
                    $report(_exceptionable, {
                      path: _path + ".position",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.position,
                    })) &&
                    $vo1(
                      input.position,
                      _path + ".position",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".position",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.position,
                    }),
                  ((("object" === typeof input.rotate &&
                    null !== input.rotate) ||
                    $report(_exceptionable, {
                      path: _path + ".rotate",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.rotate,
                    })) &&
                    $vo1(
                      input.rotate,
                      _path + ".rotate",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".rotate",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.rotate,
                    }),
                  ((("object" === typeof input.pivot && null !== input.pivot) ||
                    $report(_exceptionable, {
                      path: _path + ".pivot",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.pivot,
                    })) &&
                    $vo1(
                      input.pivot,
                      _path + ".pivot",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".pivot",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.pivot,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.x && Number.isFinite(input.x)) ||
                    $report(_exceptionable, {
                      path: _path + ".x",
                      expected: "number",
                      value: input.x,
                    }),
                  ("number" === typeof input.y && Number.isFinite(input.y)) ||
                    $report(_exceptionable, {
                      path: _path + ".y",
                      expected: "number",
                      value: input.y,
                    }),
                  ("number" === typeof input.z && Number.isFinite(input.z)) ||
                    $report(_exceptionable, {
                      path: _path + ".z",
                      expected: "number",
                      value: input.z,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectSimple.IBox3D",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectSimple.IBox3D",
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
        const decode = (input: Uint8Array): typia.Resolved<ObjectSimple> => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $ProtobufReader =
            require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              scale: undefined as any,
              position: undefined as any,
              rotate: undefined as any,
              pivot: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // ObjectSimple.IPoint3D;
                  output.scale = $pdo1(reader, reader.uint32());
                  break;
                case 2:
                  // ObjectSimple.IPoint3D;
                  output.position = $pdo1(reader, reader.uint32());
                  break;
                case 3:
                  // ObjectSimple.IPoint3D;
                  output.rotate = $pdo1(reader, reader.uint32());
                  break;
                case 4:
                  // ObjectSimple.IPoint3D;
                  output.pivot = $pdo1(reader, reader.uint32());
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
              x: undefined as any,
              y: undefined as any,
              z: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // double;
                  output.x = reader.double();
                  break;
                case 2:
                  // double;
                  output.y = reader.double();
                  break;
                case 3:
                  // double;
                  output.z = reader.double();
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
    encode: (input: ObjectSimple): Uint8Array => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "scale";
          // 1 -> ObjectSimple.IPoint3D;
          writer.uint32(10);
          writer.fork();
          $peo1(input.scale);
          writer.ldelim();
          // property "position";
          // 2 -> ObjectSimple.IPoint3D;
          writer.uint32(18);
          writer.fork();
          $peo1(input.position);
          writer.ldelim();
          // property "rotate";
          // 3 -> ObjectSimple.IPoint3D;
          writer.uint32(26);
          writer.fork();
          $peo1(input.rotate);
          writer.ldelim();
          // property "pivot";
          // 4 -> ObjectSimple.IPoint3D;
          writer.uint32(34);
          writer.fork();
          $peo1(input.pivot);
          writer.ldelim();
        };
        const $peo1 = (input: any): any => {
          // property "x";
          writer.uint32(9);
          writer.double(input.x);
          // property "y";
          writer.uint32(17);
          writer.double(input.y);
          // property "z";
          writer.uint32(25);
          writer.double(input.z);
        };
        const $io1 = (input: any): boolean =>
          "number" === typeof input.x &&
          "number" === typeof input.y &&
          "number" === typeof input.z;
        //ObjectSimple.IBox3D;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
