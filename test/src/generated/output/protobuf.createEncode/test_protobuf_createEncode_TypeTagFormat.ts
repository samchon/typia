import typia from "typia";

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
        // property "byte";
        writer.uint32(10);
        writer.string(input.byte);
        // property "password";
        writer.uint32(18);
        writer.string(input.password);
        // property "regex";
        writer.uint32(26);
        writer.string(input.regex);
        // property "uuid";
        writer.uint32(34);
        writer.string(input.uuid);
        // property "email";
        writer.uint32(42);
        writer.string(input.email);
        // property "hostname";
        writer.uint32(50);
        writer.string(input.hostname);
        // property "idnEmail";
        writer.uint32(58);
        writer.string(input.idnEmail);
        // property "idnHostname";
        writer.uint32(66);
        writer.string(input.idnHostname);
        // property "iri";
        writer.uint32(74);
        writer.string(input.iri);
        // property "iriReference";
        writer.uint32(82);
        writer.string(input.iriReference);
        // property "ipv4";
        writer.uint32(90);
        writer.string(input.ipv4);
        // property "ipv6";
        writer.uint32(98);
        writer.string(input.ipv6);
        // property "uri";
        writer.uint32(106);
        writer.string(input.uri);
        // property "uriReference";
        writer.uint32(114);
        writer.string(input.uriReference);
        // property "uriTemplate";
        writer.uint32(122);
        writer.string(input.uriTemplate);
        // property "url";
        writer.uint32(130);
        writer.string(input.url);
        // property "datetime";
        writer.uint32(138);
        writer.string(input.datetime);
        // property "date";
        writer.uint32(146);
        writer.string(input.date);
        // property "time";
        writer.uint32(154);
        writer.string(input.time);
        // property "duration";
        writer.uint32(162);
        writer.string(input.duration);
        // property "jsonPointer";
        writer.uint32(170);
        writer.string(input.jsonPointer);
        // property "relativeJsonPointer";
        writer.uint32(178);
        writer.string(input.relativeJsonPointer);
      };
      //TypeTagFormat;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  },
  decode: (input: Uint8Array): import("typia").Resolved<TypeTagFormat> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        byte: "" as any,
        password: "" as any,
        regex: "" as any,
        uuid: "" as any,
        email: "" as any,
        hostname: "" as any,
        idnEmail: "" as any,
        idnHostname: "" as any,
        iri: "" as any,
        iriReference: "" as any,
        ipv4: "" as any,
        ipv6: "" as any,
        uri: "" as any,
        uriReference: "" as any,
        uriTemplate: "" as any,
        url: "" as any,
        datetime: "" as any,
        date: "" as any,
        time: "" as any,
        duration: "" as any,
        jsonPointer: "" as any,
        relativeJsonPointer: "" as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // string;
            output.byte = reader.string();
            break;
          case 2:
            // string;
            output.password = reader.string();
            break;
          case 3:
            // string;
            output.regex = reader.string();
            break;
          case 4:
            // string;
            output.uuid = reader.string();
            break;
          case 5:
            // string;
            output.email = reader.string();
            break;
          case 6:
            // string;
            output.hostname = reader.string();
            break;
          case 7:
            // string;
            output.idnEmail = reader.string();
            break;
          case 8:
            // string;
            output.idnHostname = reader.string();
            break;
          case 9:
            // string;
            output.iri = reader.string();
            break;
          case 10:
            // string;
            output.iriReference = reader.string();
            break;
          case 11:
            // string;
            output.ipv4 = reader.string();
            break;
          case 12:
            // string;
            output.ipv6 = reader.string();
            break;
          case 13:
            // string;
            output.uri = reader.string();
            break;
          case 14:
            // string;
            output.uriReference = reader.string();
            break;
          case 15:
            // string;
            output.uriTemplate = reader.string();
            break;
          case 16:
            // string;
            output.url = reader.string();
            break;
          case 17:
            // string;
            output.datetime = reader.string();
            break;
          case 18:
            // string;
            output.date = reader.string();
            break;
          case 19:
            // string;
            output.time = reader.string();
            break;
          case 20:
            // string;
            output.duration = reader.string();
            break;
          case 21:
            // string;
            output.jsonPointer = reader.string();
            break;
          case 22:
            // string;
            output.relativeJsonPointer = reader.string();
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
    'syntax = "proto3";\n\nmessage TypeTagFormat {\n  required string byte = 1;\n  required string password = 2;\n  required string regex = 3;\n  required string uuid = 4;\n  required string email = 5;\n  required string hostname = 6;\n  required string idnEmail = 7;\n  required string idnHostname = 8;\n  required string iri = 9;\n  required string iriReference = 10;\n  required string ipv4 = 11;\n  required string ipv6 = 12;\n  required string uri = 13;\n  required string uriReference = 14;\n  required string uriTemplate = 15;\n  required string url = 16;\n  required string datetime = 17;\n  required string date = 18;\n  required string time = 19;\n  required string duration = 20;\n  required string jsonPointer = 21;\n  required string relativeJsonPointer = 22;\n}',
});
