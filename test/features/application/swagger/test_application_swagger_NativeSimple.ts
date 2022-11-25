import TSON from "../../../../src";
import { NativeSimple } from "../../../structures/NativeSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_NativeSimple = _test_application(
    "swagger",
)("NativeSimple", TSON.application<[NativeSimple], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/NativeSimple",
        },
    ],
    components: {
        schemas: {
            NativeSimple: {
                type: "object",
                properties: {
                    date: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    uint8Array: {
                        $ref: "#/components/schemas/Uint8Array",
                        "x-tson-required": true,
                    },
                    uint8ClampedArray: {
                        $ref: "#/components/schemas/Uint8ClampedArray",
                        "x-tson-required": true,
                    },
                    uint16Array: {
                        $ref: "#/components/schemas/Uint16Array",
                        "x-tson-required": true,
                    },
                    uint32Array: {
                        $ref: "#/components/schemas/Uint32Array",
                        "x-tson-required": true,
                    },
                    bigUint64Array: {
                        $ref: "#/components/schemas/BigUint64Array",
                        "x-tson-required": true,
                    },
                    int8Array: {
                        $ref: "#/components/schemas/Int8Array",
                        "x-tson-required": true,
                    },
                    int16Array: {
                        $ref: "#/components/schemas/Int16Array",
                        "x-tson-required": true,
                    },
                    int32Array: {
                        $ref: "#/components/schemas/Int32Array",
                        "x-tson-required": true,
                    },
                    bigInt64Array: {
                        $ref: "#/components/schemas/BigInt64Array",
                        "x-tson-required": true,
                    },
                    float32Array: {
                        $ref: "#/components/schemas/Float32Array",
                        "x-tson-required": true,
                    },
                    float64Array: {
                        $ref: "#/components/schemas/Float64Array",
                        "x-tson-required": true,
                    },
                    buffer: {
                        $ref: "#/components/schemas/__type",
                        "x-tson-required": true,
                    },
                    arrayBuffer: {
                        $ref: "#/components/schemas/ArrayBuffer",
                        "x-tson-required": true,
                    },
                    sharedArrayBuffer: {
                        $ref: "#/components/schemas/SharedArrayBuffer",
                        "x-tson-required": true,
                    },
                    dataView: {
                        $ref: "#/components/schemas/DataView",
                        "x-tson-required": true,
                    },
                    weakSet: {
                        $ref: "#/components/schemas/WeakSet",
                        "x-tson-required": true,
                    },
                    weakMap: {
                        $ref: "#/components/schemas/WeakMap",
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: [
                    "date",
                    "uint8Array",
                    "uint8ClampedArray",
                    "uint16Array",
                    "uint32Array",
                    "bigUint64Array",
                    "int8Array",
                    "int16Array",
                    "int32Array",
                    "bigInt64Array",
                    "float32Array",
                    "float64Array",
                    "buffer",
                    "arrayBuffer",
                    "sharedArrayBuffer",
                    "dataView",
                    "weakSet",
                    "weakMap",
                ],
                "x-tson_jsDocTags": [],
            },
            Uint8Array: {
                type: "object",
                properties: {},
                nullable: false,
            },
            Uint8ClampedArray: {
                type: "object",
                properties: {},
                nullable: false,
            },
            Uint16Array: {
                type: "object",
                properties: {},
                nullable: false,
            },
            Uint32Array: {
                type: "object",
                properties: {},
                nullable: false,
            },
            BigUint64Array: {
                type: "object",
                properties: {},
                nullable: false,
            },
            Int8Array: {
                type: "object",
                properties: {},
                nullable: false,
            },
            Int16Array: {
                type: "object",
                properties: {},
                nullable: false,
            },
            Int32Array: {
                type: "object",
                properties: {},
                nullable: false,
            },
            BigInt64Array: {
                type: "object",
                properties: {},
                nullable: false,
            },
            Float32Array: {
                type: "object",
                properties: {},
                nullable: false,
            },
            Float64Array: {
                type: "object",
                properties: {},
                nullable: false,
            },
            __type: {
                type: "object",
                properties: {
                    type: {
                        type: "string",
                        enum: ["Buffer"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                    data: {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["type", "data"],
                "x-tson_jsDocTags": [],
            },
            ArrayBuffer: {
                type: "object",
                properties: {},
                nullable: false,
            },
            SharedArrayBuffer: {
                type: "object",
                properties: {},
                nullable: false,
            },
            DataView: {
                type: "object",
                properties: {},
                nullable: false,
            },
            WeakSet: {
                type: "object",
                properties: {},
                nullable: false,
            },
            WeakMap: {
                type: "object",
                properties: {},
                nullable: false,
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
