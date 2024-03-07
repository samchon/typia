import typia from "typia";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectPartial } from "../../../structures/ObjectPartial";
export const test_protobuf_encode_ObjectPartial = _test_protobuf_encode(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)({
  encode: (input) =>
    ((input: ObjectPartial): Uint8Array => {
      const $Sizer = (typia.protobuf.encode as any).Sizer;
      const $Writer = (typia.protobuf.encode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "boolean";
          if (undefined !== input.boolean) {
            writer.uint32(8);
            writer.bool(input.boolean);
          }
          // property "number";
          if (undefined !== input.number) {
            writer.uint32(17);
            writer.double(input.number);
          }
          // property "string";
          if (undefined !== input.string) {
            writer.uint32(26);
            writer.string(input.string);
          }
          // property "array";
          if (undefined !== input.array) {
            if (0 !== input.array.length) {
              writer.uint32(34);
              writer.fork();
              for (const elem of input.array) {
                writer.double(elem);
              }
              writer.ldelim();
            }
          }
          // property "object";
          if (undefined !== input.object && null !== input.object) {
            // 5 -> ObjectPartial.IBase;
            writer.uint32(42);
            writer.fork();
            $peo1(input.object);
            writer.ldelim();
          }
        };
        const $peo1 = (input: any): any => {
          // property "boolean";
          writer.uint32(8);
          writer.bool(input.boolean);
          // property "number";
          writer.uint32(17);
          writer.double(input.number);
          // property "string";
          writer.uint32(26);
          writer.string(input.string);
          // property "array";
          if (0 !== input.array.length) {
            writer.uint32(34);
            writer.fork();
            for (const elem of input.array) {
              writer.double(elem);
            }
            writer.ldelim();
          }
          // property "object";
          if (null !== input.object) {
            // 5 -> ObjectPartial.IBase;
            writer.uint32(42);
            writer.fork();
            $peo1(input.object);
            writer.ldelim();
          }
        };
        const $io1 = (input: any): boolean =>
          "boolean" === typeof input.boolean &&
          "number" === typeof input.number &&
          "string" === typeof input.string &&
          Array.isArray(input.array) &&
          input.array.every((elem: any) => "number" === typeof elem) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io1(input.object)));
        //Partial<ObjectPartial.IBase>;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    })(input),
  decode: (input: Uint8Array): import("typia").Resolved<ObjectPartial> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {} as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // bool;
            output.boolean = reader.bool();
            break;
          case 2:
            // double;
            output.number = reader.double();
            break;
          case 3:
            // string;
            output.string = reader.string();
            break;
          case 4:
            // type: Array<number>;
            output.array ??= [] as any[];
            if (2 === (tag & 7)) {
              const piece = reader.uint32() + reader.index();
              while (reader.index() < piece) output.array.push(reader.double());
            } else output.array.push(reader.double());
            break;
          case 5:
            // ObjectPartial.IBase;
            output.object = $pdo1(reader, reader.uint32());
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
        boolean: undefined as any,
        number: undefined as any,
        string: "" as any,
        array: [] as any,
        object: null as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // bool;
            output.boolean = reader.bool();
            break;
          case 2:
            // double;
            output.number = reader.double();
            break;
          case 3:
            // string;
            output.string = reader.string();
            break;
          case 4:
            // type: Array<number>;
            if (2 === (tag & 7)) {
              const piece = reader.uint32() + reader.index();
              while (reader.index() < piece) output.array.push(reader.double());
            } else output.array.push(reader.double());
            break;
          case 5:
            // ObjectPartial.IBase;
            output.object = $pdo1(reader, reader.uint32());
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
    'syntax = "proto3";\n\nmessage Partial_lt_ObjectPartial {\n  message IBase_gt_ {\n    optional bool boolean = 1;\n    optional double number = 2;\n    optional string string = 3;\n    repeated double array = 4;\n    optional ObjectPartial.IBase object = 5;\n  }\n}\n\nmessage ObjectPartial {\n  message IBase {\n    required bool boolean = 1;\n    required double number = 2;\n    required string string = 3;\n    repeated double array = 4;\n    optional ObjectPartial.IBase object = 5;\n  }\n}',
});
