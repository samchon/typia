import typia from "typia";

import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_protobuf_createDecode_ObjectOptional = _test_protobuf_decode(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
  decode: (input: Uint8Array): typia.Resolved<ObjectOptional> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {} as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // string;
            output.id = reader.string();
            break;
          case 2:
            // string;
            output.name = reader.string();
            break;
          case 3:
            // string;
            output.email = reader.string();
            break;
          case 4:
            // double;
            output.sequence = reader.double();
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
  encode: (input: ObjectOptional): Uint8Array => {
    const $Sizer = (typia.protobuf.createEncode as any).Sizer;
    const $Writer = (typia.protobuf.createEncode as any).Writer;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "id";
        if (undefined !== input.id) {
          writer.uint32(10);
          writer.string(input.id);
        }
        // property "name";
        if (undefined !== input.name) {
          writer.uint32(18);
          writer.string(input.name);
        }
        // property "email";
        if (undefined !== input.email) {
          writer.uint32(26);
          writer.string(input.email);
        }
        // property "sequence";
        if (undefined !== input.sequence) {
          writer.uint32(33);
          writer.double(input.sequence);
        }
      };
      //ObjectOptional;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  },
});
