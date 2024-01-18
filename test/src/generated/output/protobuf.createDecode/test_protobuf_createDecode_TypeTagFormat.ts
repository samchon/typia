import typia from "typia";

import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_protobuf_createDecode_TypeTagFormat = _test_protobuf_decode(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
  decode: (input: Uint8Array): typia.Resolved<TypeTagFormat> => {
    const $ProtobufReader =
      require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
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
    const reader = new $ProtobufReader(input);
    return $pdo0(reader);
  },
  encode: (input: TypeTagFormat): Uint8Array => {
    const $ProtobufSizer =
      require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
    const $ProtobufWriter =
      require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
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
    const sizer = encoder(new $ProtobufSizer());
    const writer = encoder(new $ProtobufWriter(sizer));
    return writer.buffer();
  },
});
