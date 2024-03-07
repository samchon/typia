import typia from "typia";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
export const test_protobuf_encode_ConstantAtomicTagged = _test_protobuf_encode(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)({
  encode: (input) =>
    ((input: ConstantAtomicTagged): Uint8Array => {
      const $throws = (typia.protobuf.encode as any).throws;
      const $Sizer = (typia.protobuf.encode as any).Sizer;
      const $Writer = (typia.protobuf.encode as any).Writer;
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
    })(input),
  decode: (
    input: Uint8Array,
  ): import("typia").Resolved<ConstantAtomicTagged> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
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
  },
  message:
    'syntax = "proto3";\n\nmessage ConstantAtomicTagged {\n  required string id = 1;\n  oneof age {\n    int32 v2 = 2;\n    uint32 v3 = 3;\n  }\n}',
});
