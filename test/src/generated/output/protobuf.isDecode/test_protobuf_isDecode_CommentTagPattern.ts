import typia from "typia";

import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_protobuf_isDecode_CommentTagPattern = _test_protobuf_isDecode(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
  decode: (input) =>
    ((input: Uint8Array): typia.Resolved<CommentTagPattern> | null => {
      const is = (input: any): input is CommentTagPattern => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).uuid &&
          RegExp(
            /[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/,
          ).test((input as any).uuid) &&
          "string" === typeof (input as any).email &&
          RegExp(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
          ).test((input as any).email) &&
          "string" === typeof (input as any).ipv4 &&
          RegExp(
            /(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
          ).test((input as any).ipv4) &&
          "string" === typeof (input as any).ipv6 &&
          RegExp(
            /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
          ).test((input as any).ipv6)
        );
      };
      const decode = (input: Uint8Array): typia.Resolved<CommentTagPattern> => {
        const $Reader = (typia.protobuf.isDecode as any).Reader;
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
      };
      const output = decode(input);
      if (!is(output)) return null;
      return output;
    })(input),
  encode: (input: CommentTagPattern): Uint8Array => {
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
        // property "ipv4";
        writer.uint32(26);
        writer.string(input.ipv4);
        // property "ipv6";
        writer.uint32(34);
        writer.string(input.ipv6);
      };
      //CommentTagPattern;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  },
});
