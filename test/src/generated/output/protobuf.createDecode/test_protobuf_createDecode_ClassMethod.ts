import typia from "typia";

import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_protobuf_createDecode_ClassMethod = _test_protobuf_decode(
  "ClassMethod",
)<ClassMethod>(ClassMethod)({
  decode: (input: Uint8Array): typia.Resolved<ClassMethod> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $ProtobufReader =
      require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        name: "" as any,
        age: undefined as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // string;
            output.name = reader.string();
            break;
          case 2:
            // double;
            output.age = reader.double();
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
  },
  encode: (input: ClassMethod): Uint8Array => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $ProtobufSizer =
      require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
    const $ProtobufWriter =
      require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "name";
        writer.uint32(10);
        writer.string(input.name);
        // property "age";
        writer.uint32(17);
        writer.double(input.age);
      };
      //ClassMethod.Animal;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $ProtobufSizer());
    const writer = encoder(new $ProtobufWriter(sizer));
    return writer.buffer();
  },
});
