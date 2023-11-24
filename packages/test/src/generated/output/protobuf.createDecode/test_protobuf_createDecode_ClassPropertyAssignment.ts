import typia from "typia";

import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_protobuf_createDecode_ClassPropertyAssignment =
  _test_protobuf_decode("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )({
    decode: (input: Uint8Array): typia.Resolved<ClassPropertyAssignment> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
          name: "" as any,
          note: undefined as any,
          editable: undefined as any,
          incremental: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.id = reader.double();
              break;
            case 2:
              // string;
              output.name = reader.string();
              break;
            case 3:
              // string;
              output.note = reader.string();
              break;
            case 4:
              // bool;
              output.editable = reader.bool();
              break;
            case 5:
              // bool;
              output.incremental = reader.bool();
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
    encode: (input: ClassPropertyAssignment): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "id";
          writer.uint32(9);
          writer.double(input.id);
          // property "name";
          writer.uint32(18);
          writer.string(input.name);
          // property "note";
          writer.uint32(26);
          writer.string(input.note);
          // property "editable";
          writer.uint32(32);
          writer.bool(input.editable);
          // property "incremental";
          writer.uint32(40);
          writer.bool(input.incremental);
        };
        //ClassPropertyAssignment;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
