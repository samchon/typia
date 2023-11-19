import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_protobuf_createEncode_TypeTagFormat = _test_protobuf_encode(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
  encode: (input: TypeTagFormat): Uint8Array => {
    const $Sizer = (typia.protobuf.createEncode as any).Sizer;
    const $Writer = (typia.protobuf.createEncode as any).Writer;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "uuid";
        writer.uint32(10);
        writer.string(input.uuid);
        // property "email";
        writer.uint32(18);
        writer.string(input.email);
        // property "url";
        writer.uint32(26);
        writer.string(input.url);
        // property "ipv4";
        writer.uint32(34);
        writer.string(input.ipv4);
        // property "ipv6";
        writer.uint32(42);
        writer.string(input.ipv6);
        // property "date";
        writer.uint32(50);
        writer.string(input.date);
        // property "date_time";
        writer.uint32(58);
        writer.string(input.date_time);
      };
      //TypeTagFormat;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  },
  decode: (input: Uint8Array): typia.Resolved<TypeTagFormat> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        uuid: "" as any,
        email: "" as any,
        url: "" as any,
        ipv4: "" as any,
        ipv6: "" as any,
        date: "" as any,
        date_time: "" as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // string;
            output.uuid = reader.string();
            break;
          case 2:
            // string;
            output.email = reader.string();
            break;
          case 3:
            // string;
            output.url = reader.string();
            break;
          case 4:
            // string;
            output.ipv4 = reader.string();
            break;
          case 5:
            // string;
            output.ipv6 = reader.string();
            break;
          case 6:
            // string;
            output.date = reader.string();
            break;
          case 7:
            // string;
            output.date_time = reader.string();
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
    'syntax = "proto3";\n\nmessage TypeTagFormat {\n    required string uuid = 1;\n    required string email = 2;\n    required string url = 3;\n    required string ipv4 = 4;\n    required string ipv6 = 5;\n    required string date = 6;\n    required string date_time = 7;\n}',
});
