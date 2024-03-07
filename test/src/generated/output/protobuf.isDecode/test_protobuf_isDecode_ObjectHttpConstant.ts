import typia from "typia";
import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";
export const test_protobuf_isDecode_ObjectHttpConstant =
  _test_protobuf_isDecode("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )({
    decode: (input) =>
      ((
        input: Uint8Array,
      ): import("typia").Resolved<ObjectHttpConstant> | null => {
        const is = (input: any): input is ObjectHttpConstant => {
          const $io0 = (input: any): boolean =>
            false === input.boolean &&
            (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
            (2 === input.number || 98 === input.number) &&
            ("something" === input.string ||
              "three" === input.string ||
              "ninety-seven" === input.string) &&
            "string" === typeof input.template &&
            RegExp(/^abcd_(.*)/).test(input.template);
          return "object" === typeof input && null !== input && $io0(input);
        };
        const decode = (
          input: Uint8Array,
        ): import("typia").Resolved<ObjectHttpConstant> => {
          const $Reader = (typia.protobuf.isDecode as any).Reader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              boolean: undefined as any,
              bigint: undefined as any,
              number: undefined as any,
              string: undefined as any,
              template: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // bool;
                  output.boolean = reader.bool();
                  break;
                case 2:
                  // uint64;
                  output.bigint = reader.uint64();
                  break;
                case 3:
                  // int32;
                  output.number = reader.int32();
                  break;
                case 4:
                  // string;
                  output.string = reader.string();
                  break;
                case 5:
                  // string;
                  output.template = reader.string();
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
        if (!is(output)) return null;
        return output;
      })(input),
    encode: (input: ObjectHttpConstant): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "boolean";
          writer.uint32(8);
          writer.bool(input.boolean);
          // property "bigint";
          writer.uint32(16);
          writer.uint64(input.bigint);
          // property "number";
          writer.uint32(24);
          writer.int32(input.number);
          // property "string";
          writer.uint32(34);
          writer.string(input.string);
          // property "template";
          writer.uint32(42);
          writer.string(input.template);
        };
        //ObjectHttpConstant;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
