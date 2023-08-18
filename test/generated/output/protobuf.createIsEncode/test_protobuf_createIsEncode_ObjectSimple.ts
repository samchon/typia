import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_protobuf_isEncode_ObjectSimple =
    _test_protobuf_isEncode<ObjectSimple>(ObjectSimple)({
        isEncode: (input: ObjectSimple): Uint8Array | null => {
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
            const encode = (input: ObjectSimple): Uint8Array => {
                const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
                const $Writer = (typia.protobuf.createIsEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "scale";
                        writer.uint32(10);
                        writer.fork();
                        $peo1(input.scale);
                        writer.ldelim();
                        // property "position";
                        writer.uint32(18);
                        writer.fork();
                        $peo1(input.position);
                        writer.ldelim();
                        // property "rotate";
                        writer.uint32(26);
                        writer.fork();
                        $peo1(input.rotate);
                        writer.ldelim();
                        // property "pivot";
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
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            return is(input) ? encode(input) : null;
        },
        message:
            'syntax = "proto3";\n\nmessage ObjectSimple {\n    message IBox3D {\n        required ObjectSimple.IPoint3D scale = 1;\n        required ObjectSimple.IPoint3D position = 2;\n        required ObjectSimple.IPoint3D rotate = 3;\n        required ObjectSimple.IPoint3D pivot = 4;\n    }\n\n    message IPoint3D {\n        required double x = 1;\n        required double y = 2;\n        required double z = 3;\n    }\n}',
    });
