import typia from "typia";

import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_protobuf_isDecode_ObjectSimple = _test_protobuf_isDecode(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)({
  decode: (input) =>
    ((input: Uint8Array): import("typia").Resolved<ObjectSimple> | null => {
      const is = (input: any): input is ObjectSimple => {
        return (
          "object" === typeof input &&
          null !== input &&
          "object" === typeof (input as any).scale &&
          null !== (input as any).scale &&
          "number" === typeof ((input as any).scale as any).x &&
          Number.isFinite(((input as any).scale as any).x) &&
          "number" === typeof ((input as any).scale as any).y &&
          Number.isFinite(((input as any).scale as any).y) &&
          "number" === typeof ((input as any).scale as any).z &&
          Number.isFinite(((input as any).scale as any).z) &&
          "object" === typeof (input as any).position &&
          null !== (input as any).position &&
          "number" === typeof ((input as any).position as any).x &&
          Number.isFinite(((input as any).position as any).x) &&
          "number" === typeof ((input as any).position as any).y &&
          Number.isFinite(((input as any).position as any).y) &&
          "number" === typeof ((input as any).position as any).z &&
          Number.isFinite(((input as any).position as any).z) &&
          "object" === typeof (input as any).rotate &&
          null !== (input as any).rotate &&
          "number" === typeof ((input as any).rotate as any).x &&
          Number.isFinite(((input as any).rotate as any).x) &&
          "number" === typeof ((input as any).rotate as any).y &&
          Number.isFinite(((input as any).rotate as any).y) &&
          "number" === typeof ((input as any).rotate as any).z &&
          Number.isFinite(((input as any).rotate as any).z) &&
          "object" === typeof (input as any).pivot &&
          null !== (input as any).pivot &&
          "number" === typeof ((input as any).pivot as any).x &&
          Number.isFinite(((input as any).pivot as any).x) &&
          "number" === typeof ((input as any).pivot as any).y &&
          Number.isFinite(((input as any).pivot as any).y) &&
          "number" === typeof ((input as any).pivot as any).z &&
          Number.isFinite(((input as any).pivot as any).z)
        );
      };
      const decode = (
        input: Uint8Array,
      ): import("typia").Resolved<ObjectSimple> => {
        const $Reader = (typia.protobuf.isDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            scale: undefined as any,
            position: undefined as any,
            rotate: undefined as any,
            pivot: undefined as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // ObjectSimple.IPoint3D;
                output.scale = $pdo1(reader, reader.uint32());
                break;
              case 2:
                // ObjectSimple.IPoint3D;
                output.position = $pdo1(reader, reader.uint32());
                break;
              case 3:
                // ObjectSimple.IPoint3D;
                output.rotate = $pdo1(reader, reader.uint32());
                break;
              case 4:
                // ObjectSimple.IPoint3D;
                output.pivot = $pdo1(reader, reader.uint32());
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
            x: undefined as any,
            y: undefined as any,
            z: undefined as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // double;
                output.x = reader.double();
                break;
              case 2:
                // double;
                output.y = reader.double();
                break;
              case 3:
                // double;
                output.z = reader.double();
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
  encode: (input: ObjectSimple): Uint8Array => {
    const $Sizer = (typia.protobuf.createEncode as any).Sizer;
    const $Writer = (typia.protobuf.createEncode as any).Writer;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "scale";
        // 1 -> ObjectSimple.IPoint3D;
        writer.uint32(10);
        writer.fork();
        $peo1(input.scale);
        writer.ldelim();
        // property "position";
        // 2 -> ObjectSimple.IPoint3D;
        writer.uint32(18);
        writer.fork();
        $peo1(input.position);
        writer.ldelim();
        // property "rotate";
        // 3 -> ObjectSimple.IPoint3D;
        writer.uint32(26);
        writer.fork();
        $peo1(input.rotate);
        writer.ldelim();
        // property "pivot";
        // 4 -> ObjectSimple.IPoint3D;
        writer.uint32(34);
        writer.fork();
        $peo1(input.pivot);
        writer.ldelim();
      };
      const $peo1 = (input: any): any => {
        // property "x";
        writer.uint32(9);
        writer.double(input.x);
        // property "y";
        writer.uint32(17);
        writer.double(input.y);
        // property "z";
        writer.uint32(25);
        writer.double(input.z);
      };
      const $io1 = (input: any): boolean =>
        "number" === typeof input.x &&
        "number" === typeof input.y &&
        "number" === typeof input.z;
      //ObjectSimple.IBox3D;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  },
});
