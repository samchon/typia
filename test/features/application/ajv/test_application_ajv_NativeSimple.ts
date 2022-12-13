import TSON from "../../../../src";
import { NativeSimple } from "../../../structures/NativeSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_NativeSimple = 
    _test_application("ajv")(
        "NativeSimple",
        TSON.application<[NativeSimple], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/NativeSimple"
        }
    ],
    components: {
        schemas: {
            NativeSimple: {
                $id: "components#/schemas/NativeSimple",
                type: "object",
                properties: {
                    date: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    uint8Array: {
                        $ref: "#/components/schemas/Uint8Array",
                        "x-typia-required": true
                    },
                    uint8ClampedArray: {
                        $ref: "#/components/schemas/Uint8ClampedArray",
                        "x-typia-required": true
                    },
                    uint16Array: {
                        $ref: "#/components/schemas/Uint16Array",
                        "x-typia-required": true
                    },
                    uint32Array: {
                        $ref: "#/components/schemas/Uint32Array",
                        "x-typia-required": true
                    },
                    bigUint64Array: {
                        $ref: "#/components/schemas/BigUint64Array",
                        "x-typia-required": true
                    },
                    int8Array: {
                        $ref: "#/components/schemas/Int8Array",
                        "x-typia-required": true
                    },
                    int16Array: {
                        $ref: "#/components/schemas/Int16Array",
                        "x-typia-required": true
                    },
                    int32Array: {
                        $ref: "#/components/schemas/Int32Array",
                        "x-typia-required": true
                    },
                    bigInt64Array: {
                        $ref: "#/components/schemas/BigInt64Array",
                        "x-typia-required": true
                    },
                    float32Array: {
                        $ref: "#/components/schemas/Float32Array",
                        "x-typia-required": true
                    },
                    float64Array: {
                        $ref: "#/components/schemas/Float64Array",
                        "x-typia-required": true
                    },
                    buffer: {
                        $ref: "components#/schemas/__type",
                        "x-typia-required": true
                    },
                    arrayBuffer: {
                        $ref: "#/components/schemas/ArrayBuffer",
                        "x-typia-required": true
                    },
                    sharedArrayBuffer: {
                        $ref: "#/components/schemas/SharedArrayBuffer",
                        "x-typia-required": true
                    },
                    dataView: {
                        $ref: "#/components/schemas/DataView",
                        "x-typia-required": true
                    },
                    weakSet: {
                        $ref: "#/components/schemas/WeakSet",
                        "x-typia-required": true
                    },
                    weakMap: {
                        $ref: "#/components/schemas/WeakMap",
                        "x-typia-required": true
                    }
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
                    "weakMap"
                ],
                "x-typia_jsDocTags": []
            },
            Uint8Array: {
                type: "object",
                $id: "components#/schemas/Uint8Array",
                properties: {},
                nullable: false
            },
            Uint8ClampedArray: {
                type: "object",
                $id: "components#/schemas/Uint8ClampedArray",
                properties: {},
                nullable: false
            },
            Uint16Array: {
                type: "object",
                $id: "components#/schemas/Uint16Array",
                properties: {},
                nullable: false
            },
            Uint32Array: {
                type: "object",
                $id: "components#/schemas/Uint32Array",
                properties: {},
                nullable: false
            },
            BigUint64Array: {
                type: "object",
                $id: "components#/schemas/BigUint64Array",
                properties: {},
                nullable: false
            },
            Int8Array: {
                type: "object",
                $id: "components#/schemas/Int8Array",
                properties: {},
                nullable: false
            },
            Int16Array: {
                type: "object",
                $id: "components#/schemas/Int16Array",
                properties: {},
                nullable: false
            },
            Int32Array: {
                type: "object",
                $id: "components#/schemas/Int32Array",
                properties: {},
                nullable: false
            },
            BigInt64Array: {
                type: "object",
                $id: "components#/schemas/BigInt64Array",
                properties: {},
                nullable: false
            },
            Float32Array: {
                type: "object",
                $id: "components#/schemas/Float32Array",
                properties: {},
                nullable: false
            },
            Float64Array: {
                type: "object",
                $id: "components#/schemas/Float64Array",
                properties: {},
                nullable: false
            },
            __type: {
                $id: "components#/schemas/__type",
                type: "object",
                properties: {
                    type: {
                        type: "string",
                        "enum": [
                            "Buffer"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    data: {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "type",
                    "data"
                ],
                "x-typia_jsDocTags": []
            },
            ArrayBuffer: {
                type: "object",
                $id: "components#/schemas/ArrayBuffer",
                properties: {},
                nullable: false
            },
            SharedArrayBuffer: {
                type: "object",
                $id: "components#/schemas/SharedArrayBuffer",
                properties: {},
                nullable: false
            },
            DataView: {
                type: "object",
                $id: "components#/schemas/DataView",
                properties: {},
                nullable: false
            },
            WeakSet: {
                type: "object",
                $id: "components#/schemas/WeakSet",
                properties: {},
                nullable: false
            },
            WeakMap: {
                type: "object",
                $id: "components#/schemas/WeakMap",
                properties: {},
                nullable: false
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);