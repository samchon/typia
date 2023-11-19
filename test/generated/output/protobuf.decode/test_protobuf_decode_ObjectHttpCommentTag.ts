import typia from "../../../../src";
import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_protobuf_createDecode_ObjectHttpCommentTag =
  _test_protobuf_decode("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )({
    decode: (input) =>
      ((input: Uint8Array): typia.Resolved<ObjectHttpCommentTag> => {
        const $Reader = (typia.protobuf.decode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            int: undefined as any,
            uint64: undefined as any,
            uuid: "" as any,
            items: [] as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // int32;
                output.int = reader.int32();
                break;
              case 2:
                // uint64;
                output.uint64 = reader.uint64();
                break;
              case 3:
                // string;
                output.uuid = reader.string();
                break;
              case 4:
                // type: Array<number>;
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.items.push(reader.double());
                } else output.items.push(reader.double());
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
      })(input),
    encode: (input: ObjectHttpCommentTag): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "int";
          writer.uint32(8);
          writer.int32(input.int);
          // property "uint64";
          writer.uint32(16);
          writer.uint64(input.uint64);
          // property "uuid";
          writer.uint32(26);
          writer.string(input.uuid);
          // property "items";
          if (0 !== input.items.length) {
            writer.uint32(34);
            writer.fork();
            for (const elem of input.items) {
              writer.double(elem);
            }
            writer.ldelim();
          }
        };
        //ObjectHttpCommentTag;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
