import typia from "typia";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";
export const test_protobuf_isEncode_TypeTagPattern = _test_protobuf_isEncode(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)({
  encode: (input) =>
    ((input: TypeTagPattern): Uint8Array | null => {
      const is = (input: any): input is TypeTagPattern => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).uuid &&
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/.test(
            (input as any).uuid,
          ) &&
          "string" === typeof (input as any).email &&
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
            (input as any).email,
          ) &&
          "string" === typeof (input as any).ipv4 &&
          /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
            (input as any).ipv4,
          ) &&
          "string" === typeof (input as any).ipv6 &&
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(
            (input as any).ipv6,
          )
        );
      };
      const encode = (input: TypeTagPattern): Uint8Array => {
        const $Sizer = (typia.protobuf.isEncode as any).Sizer;
        const $Writer = (typia.protobuf.isEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "uuid";
            writer.uint32(10);
            writer.string(input.uuid);
            // property "email";
            writer.uint32(18);
            writer.string(input.email);
            // property "ipv4";
            writer.uint32(26);
            writer.string(input.ipv4);
            // property "ipv6";
            writer.uint32(34);
            writer.string(input.ipv6);
          };
          //TypeTagPattern;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return is(input) ? encode(input) : null;
    })(input),
  decode: (input: Uint8Array): import("typia").Resolved<TypeTagPattern> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        uuid: "" as any,
        email: "" as any,
        ipv4: "" as any,
        ipv6: "" as any,
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
            output.ipv4 = reader.string();
            break;
          case 4:
            // string;
            output.ipv6 = reader.string();
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
    'syntax = "proto3";\n\nmessage TypeTagPattern {\n  required string uuid = 1;\n  required string email = 2;\n  required string ipv4 = 3;\n  required string ipv6 = 4;\n}',
});
