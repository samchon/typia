import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_encode_ObjectUnionExplicitPointer =
    _test_protobuf_encode(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
        encode: (input: ObjectUnionExplicitPointer): Uint8Array => {
            const $throws = (typia.protobuf.createEncode as any).throws;
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "value";
                    if (0 !== input.value.length) {
                        for (const elem of input.value) {
                            writer.uint32(10);
                            writer.fork();
                            $peo1(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $peo1 = (input: any): any => {
                    // property "value";
                    if ("point" === input.value.type)
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo2(input.value);
                            writer.ldelim();
                        })();
                    else if ("line" === input.value.type)
                        return (() => {
                            writer.uint32(18);
                            writer.fork();
                            $peo3(input.value);
                            writer.ldelim();
                        })();
                    else if ("triangle" === input.value.type)
                        return (() => {
                            writer.uint32(26);
                            writer.fork();
                            $peo5(input.value);
                            writer.ldelim();
                        })();
                    else if ("rectangle" === input.value.type)
                        return (() => {
                            writer.uint32(34);
                            writer.fork();
                            $peo6(input.value);
                            writer.ldelim();
                        })();
                    else if ("polyline" === input.value.type)
                        return (() => {
                            writer.uint32(42);
                            writer.fork();
                            $peo7(input.value);
                            writer.ldelim();
                        })();
                    else if ("polygon" === input.value.type)
                        return (() => {
                            writer.uint32(50);
                            writer.fork();
                            $peo8(input.value);
                            writer.ldelim();
                        })();
                    else if ("circle" === input.value.type)
                        return (() => {
                            writer.uint32(58);
                            writer.fork();
                            $peo10(input.value);
                            writer.ldelim();
                        })();
                    else
                        $throws({
                            expected:
                                '(ObjectUnionExplicitPointer.Discriminator<"point", ObjectUnionExplicitPointer.IPoint> | ObjectUnionExplicitPointer.Discriminator<"line", ObjectUnionExplicitPointer.ILine> | ObjectUnionExplicitPointer.Discriminator<"triangle", ObjectUnionExplicitPointer.ITriangle> | ObjectUnionExplicitPointer.Discriminator<"rectangle", ObjectUnionExplicitPointer.IRectangle> | ObjectUnionExplicitPointer.Discriminator<"polyline", ObjectUnionExplicitPointer.IPolyline> | ObjectUnionExplicitPointer.Discriminator<"polygon", ObjectUnionExplicitPointer.IPolygon> | ObjectUnionExplicitPointer.Discriminator<"circle", ObjectUnionExplicitPointer.ICircle>)',
                            value: input.value,
                        });
                };
                const $peo2 = (input: any): any => {
                    // property "x";
                    writer.uint32(9);
                    writer.double(input.x);
                    // property "y";
                    writer.uint32(17);
                    writer.double(input.y);
                    // property "type";
                    writer.uint32(26);
                    writer.string(input.type);
                };
                const $peo3 = (input: any): any => {
                    // property "p1";
                    writer.uint32(10);
                    writer.fork();
                    $peo4(input.p1);
                    writer.ldelim();
                    // property "p2";
                    writer.uint32(18);
                    writer.fork();
                    $peo4(input.p2);
                    writer.ldelim();
                    // property "type";
                    writer.uint32(26);
                    writer.string(input.type);
                };
                const $peo4 = (input: any): any => {
                    // property "x";
                    writer.uint32(9);
                    writer.double(input.x);
                    // property "y";
                    writer.uint32(17);
                    writer.double(input.y);
                };
                const $peo5 = (input: any): any => {
                    // property "p1";
                    writer.uint32(10);
                    writer.fork();
                    $peo4(input.p1);
                    writer.ldelim();
                    // property "p2";
                    writer.uint32(18);
                    writer.fork();
                    $peo4(input.p2);
                    writer.ldelim();
                    // property "p3";
                    writer.uint32(26);
                    writer.fork();
                    $peo4(input.p3);
                    writer.ldelim();
                    // property "type";
                    writer.uint32(34);
                    writer.string(input.type);
                };
                const $peo6 = (input: any): any => {
                    // property "p1";
                    writer.uint32(10);
                    writer.fork();
                    $peo4(input.p1);
                    writer.ldelim();
                    // property "p2";
                    writer.uint32(18);
                    writer.fork();
                    $peo4(input.p2);
                    writer.ldelim();
                    // property "p3";
                    writer.uint32(26);
                    writer.fork();
                    $peo4(input.p3);
                    writer.ldelim();
                    // property "p4";
                    writer.uint32(34);
                    writer.fork();
                    $peo4(input.p4);
                    writer.ldelim();
                    // property "type";
                    writer.uint32(42);
                    writer.string(input.type);
                };
                const $peo7 = (input: any): any => {
                    // property "points";
                    if (0 !== input.points.length) {
                        for (const elem of input.points) {
                            writer.uint32(10);
                            writer.fork();
                            $peo4(elem);
                            writer.ldelim();
                        }
                    }
                    // property "type";
                    writer.uint32(18);
                    writer.string(input.type);
                };
                const $peo8 = (input: any): any => {
                    // property "outer";
                    writer.uint32(10);
                    writer.fork();
                    $peo9(input.outer);
                    writer.ldelim();
                    // property "inner";
                    if (0 !== input.inner.length) {
                        for (const elem of input.inner) {
                            writer.uint32(18);
                            writer.fork();
                            $peo9(elem);
                            writer.ldelim();
                        }
                    }
                    // property "type";
                    writer.uint32(26);
                    writer.string(input.type);
                };
                const $peo9 = (input: any): any => {
                    // property "points";
                    if (0 !== input.points.length) {
                        for (const elem of input.points) {
                            writer.uint32(10);
                            writer.fork();
                            $peo4(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $peo10 = (input: any): any => {
                    // property "centroid";
                    writer.uint32(10);
                    writer.fork();
                    $peo4(input.centroid);
                    writer.ldelim();
                    // property "radius";
                    writer.uint32(17);
                    writer.double(input.radius);
                    // property "type";
                    writer.uint32(26);
                    writer.string(input.type);
                };
                const $io1 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value);
                const $io2 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    "number" === typeof input.y &&
                    "point" === input.type;
                const $io3 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io4(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io4(input.p2) &&
                    "line" === input.type;
                const $io4 = (input: any): boolean =>
                    "number" === typeof input.x && "number" === typeof input.y;
                const $io5 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io4(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io4(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io4(input.p3) &&
                    "triangle" === input.type;
                const $io6 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io4(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io4(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io4(input.p3) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    $io4(input.p4) &&
                    "rectangle" === input.type;
                const $io7 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem),
                    ) &&
                    "polyline" === input.type;
                const $io8 = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io9(input.outer) &&
                    Array.isArray(input.inner) &&
                    input.inner.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io9(elem),
                    ) &&
                    "polygon" === input.type;
                const $io9 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem),
                    );
                const $io10 = (input: any): boolean =>
                    "object" === typeof input.centroid &&
                    null !== input.centroid &&
                    $io4(input.centroid) &&
                    "number" === typeof input.radius &&
                    "circle" === input.type;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("point" === input.type) return $io2(input);
                        else if ("line" === input.type) return $io3(input);
                        else if ("triangle" === input.type) return $io5(input);
                        else if ("rectangle" === input.type) return $io6(input);
                        else if ("polyline" === input.type) return $io7(input);
                        else if ("polygon" === input.type) return $io8(input);
                        else if ("circle" === input.type) return $io10(input);
                        else return false;
                    })();
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
        message:
            'syntax = "proto3";\n\nmessage ObjectUnionExplicitPointer {\n    repeated IPointer_lt_ObjectUnionExplicitPointer.Shape_gt_ value = 1;\n    message Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message IPoint_gt_ {\n            required double x = 1;\n            required double y = 2;\n            required string type = 3;\n        }\n    }\n\n    message Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message ILine_gt_ {\n            required ObjectUnionExplicitPointer.IPoint p1 = 1;\n            required ObjectUnionExplicitPointer.IPoint p2 = 2;\n            required string type = 3;\n        }\n    }\n\n    message IPoint {\n        required double x = 1;\n        required double y = 2;\n    }\n\n    message Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message ITriangle_gt_ {\n            required ObjectUnionExplicitPointer.IPoint p1 = 1;\n            required ObjectUnionExplicitPointer.IPoint p2 = 2;\n            required ObjectUnionExplicitPointer.IPoint p3 = 3;\n            required string type = 4;\n        }\n    }\n\n    message Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message IRectangle_gt_ {\n            required ObjectUnionExplicitPointer.IPoint p1 = 1;\n            required ObjectUnionExplicitPointer.IPoint p2 = 2;\n            required ObjectUnionExplicitPointer.IPoint p3 = 3;\n            required ObjectUnionExplicitPointer.IPoint p4 = 4;\n            required string type = 5;\n        }\n    }\n\n    message Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message IPolyline_gt_ {\n            repeated ObjectUnionExplicitPointer.IPoint points = 1;\n            required string type = 2;\n        }\n    }\n\n    message Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message IPolygon_gt_ {\n            required ObjectUnionExplicitPointer.IPolyline outer = 1;\n            repeated ObjectUnionExplicitPointer.IPolyline inner = 2;\n            required string type = 3;\n        }\n    }\n\n    message IPolyline {\n        repeated ObjectUnionExplicitPointer.IPoint points = 1;\n    }\n\n    message Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message ICircle_gt_ {\n            required ObjectUnionExplicitPointer.IPoint centroid = 1;\n            required double radius = 2;\n            required string type = 3;\n        }\n    }\n}\n\nmessage IPointer_lt_ObjectUnionExplicitPointer {\n    message Shape_gt_ {\n        oneof value {\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicitPointer.IPoint_gt_ v1 = 1;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicitPointer.ILine_gt_ v2 = 2;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicitPointer.ITriangle_gt_ v3 = 3;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicitPointer.IRectangle_gt_ v4 = 4;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicitPointer.IPolyline_gt_ v5 = 5;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicitPointer.IPolygon_gt_ v6 = 6;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicitPointer.ICircle_gt_ v7 = 7;\n        }\n    }\n}',
        decode: (input: Uint8Array): ObjectUnionExplicitPointer => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: [] as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value.push($pdo1(reader, reader.uint32()));
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
                    value: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = $pdo2(reader, reader.uint32());
                            break;
                        case 2:
                            output.value = $pdo3(reader, reader.uint32());
                            break;
                        case 3:
                            output.value = $pdo5(reader, reader.uint32());
                            break;
                        case 4:
                            output.value = $pdo6(reader, reader.uint32());
                            break;
                        case 5:
                            output.value = $pdo7(reader, reader.uint32());
                            break;
                        case 6:
                            output.value = $pdo8(reader, reader.uint32());
                            break;
                        case 7:
                            output.value = $pdo10(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo2 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    x: undefined as any,
                    y: undefined as any,
                    type: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.x = reader.double();
                            break;
                        case 2:
                            output.y = reader.double();
                            break;
                        case 3:
                            output.type = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo3 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    p1: undefined as any,
                    p2: undefined as any,
                    type: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.p1 = $pdo4(reader, reader.uint32());
                            break;
                        case 2:
                            output.p2 = $pdo4(reader, reader.uint32());
                            break;
                        case 3:
                            output.type = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo4 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    x: undefined as any,
                    y: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.x = reader.double();
                            break;
                        case 2:
                            output.y = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo5 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    p1: undefined as any,
                    p2: undefined as any,
                    p3: undefined as any,
                    type: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.p1 = $pdo4(reader, reader.uint32());
                            break;
                        case 2:
                            output.p2 = $pdo4(reader, reader.uint32());
                            break;
                        case 3:
                            output.p3 = $pdo4(reader, reader.uint32());
                            break;
                        case 4:
                            output.type = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo6 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    p1: undefined as any,
                    p2: undefined as any,
                    p3: undefined as any,
                    p4: undefined as any,
                    type: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.p1 = $pdo4(reader, reader.uint32());
                            break;
                        case 2:
                            output.p2 = $pdo4(reader, reader.uint32());
                            break;
                        case 3:
                            output.p3 = $pdo4(reader, reader.uint32());
                            break;
                        case 4:
                            output.p4 = $pdo4(reader, reader.uint32());
                            break;
                        case 5:
                            output.type = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo7 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    points: [] as any,
                    type: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.points.push($pdo4(reader, reader.uint32()));
                            break;
                        case 2:
                            output.type = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo8 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    outer: undefined as any,
                    inner: [] as any,
                    type: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.outer = $pdo9(reader, reader.uint32());
                            break;
                        case 2:
                            output.inner.push($pdo9(reader, reader.uint32()));
                            break;
                        case 3:
                            output.type = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo9 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    points: [] as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.points.push($pdo4(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo10 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    centroid: undefined as any,
                    radius: undefined as any,
                    type: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.centroid = $pdo4(reader, reader.uint32());
                            break;
                        case 2:
                            output.radius = reader.double();
                            break;
                        case 3:
                            output.type = reader.string();
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
    });
