import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_protobuf_createIsEncode_ObjectPrimitive =
  _test_protobuf_isEncode("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)({
    encode: (input: ObjectPrimitive): Uint8Array | null => {
      const is = (input: any): input is ObjectPrimitive => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.id &&
          ("txt" === input.extension ||
            "md" === input.extension ||
            "html" === input.extension) &&
          "string" === typeof input.title &&
          "string" === typeof input.body &&
          Array.isArray(input.files) &&
          input.files.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          ) &&
          "boolean" === typeof input.secret &&
          "string" === typeof input.created_at;
        const $io1 = (input: any): boolean =>
          "string" === typeof input.id &&
          "string" === typeof input.name &&
          "string" === typeof input.extension &&
          "string" === typeof input.url &&
          "string" === typeof input.created_at;
        return "object" === typeof input && null !== input && $io0(input);
      };
      const encode = (input: ObjectPrimitive): Uint8Array => {
        const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
        const $Writer = (typia.protobuf.createIsEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "id";
            writer.uint32(10);
            writer.string(input.id);
            // property "extension";
            writer.uint32(18);
            writer.string(input.extension);
            // property "title";
            writer.uint32(26);
            writer.string(input.title);
            // property "body";
            writer.uint32(34);
            writer.string(input.body);
            // property "files";
            if (0 !== input.files.length) {
              for (const elem of input.files) {
                // 5 -> ObjectPrimitive.IFile;
                writer.uint32(42);
                writer.fork();
                $peo1(elem);
                writer.ldelim();
              }
            }
            // property "secret";
            writer.uint32(48);
            writer.bool(input.secret);
            // property "created_at";
            writer.uint32(58);
            writer.string(input.created_at);
          };
          const $peo1 = (input: any): any => {
            // property "id";
            writer.uint32(10);
            writer.string(input.id);
            // property "name";
            writer.uint32(18);
            writer.string(input.name);
            // property "extension";
            writer.uint32(26);
            writer.string(input.extension);
            // property "url";
            writer.uint32(34);
            writer.string(input.url);
            // property "created_at";
            writer.uint32(42);
            writer.string(input.created_at);
          };
          const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "string" === typeof input.extension &&
            "string" === typeof input.url &&
            "string" === typeof input.created_at;
          //ObjectPrimitive.IArticle;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return is(input) ? encode(input) : null;
    },
    decode: (input: Uint8Array): typia.Resolved<ObjectPrimitive> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: "" as any,
          extension: undefined as any,
          title: "" as any,
          body: "" as any,
          files: [] as any,
          secret: undefined as any,
          created_at: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.id = reader.string();
              break;
            case 2:
              // string;
              output.extension = reader.string();
              break;
            case 3:
              // string;
              output.title = reader.string();
              break;
            case 4:
              // string;
              output.body = reader.string();
              break;
            case 5:
              // type: Array<ObjectPrimitive.IFile>;
              output.files.push($pdo1(reader, reader.uint32()));
              break;
            case 6:
              // bool;
              output.secret = reader.bool();
              break;
            case 7:
              // string;
              output.created_at = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo1 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: "" as any,
          name: "" as any,
          extension: "" as any,
          url: "" as any,
          created_at: "" as any,
        } as any;
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
              output.extension = reader.string();
              break;
            case 4:
              // string;
              output.url = reader.string();
              break;
            case 5:
              // string;
              output.created_at = reader.string();
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
      'syntax = "proto3";\n\nmessage ObjectPrimitive {\n    message IArticle {\n        required string id = 1;\n        required string extension = 2;\n        required string title = 3;\n        required string body = 4;\n        repeated ObjectPrimitive.IFile files = 5;\n        required bool secret = 6;\n        required string created_at = 7;\n    }\n\n    message IFile {\n        required string id = 1;\n        required string name = 2;\n        required string extension = 3;\n        required string url = 4;\n        required string created_at = 5;\n    }\n}',
  });
