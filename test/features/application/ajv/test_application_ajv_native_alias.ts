import TSON from "../../../../src";
import { NativeAlias } from "../../../structures/NativeAlias";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_native_alias = _test_application_ajv(
    "alias native",
    TSON.application<[NativeAlias], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/NativeAlias",
            },
        ],
        components: {
            schemas: {
                NativeAlias: {
                    $id: "components#/schemas/NativeAlias",
                    type: "object",
                    properties: {
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
                    $id: "components#/schemas/Uint8Array",
                    properties: {},
                    nullable: false,
                },
                Uint8ClampedArray: {
                    type: "object",
                    $id: "components#/schemas/Uint8ClampedArray",
                    properties: {},
                    nullable: false,
                },
                Uint16Array: {
                    type: "object",
                    $id: "components#/schemas/Uint16Array",
                    properties: {},
                    nullable: false,
                },
                Uint32Array: {
                    type: "object",
                    $id: "components#/schemas/Uint32Array",
                    properties: {},
                    nullable: false,
                },
                BigUint64Array: {
                    type: "object",
                    $id: "components#/schemas/BigUint64Array",
                    properties: {},
                    nullable: false,
                },
                Int8Array: {
                    type: "object",
                    $id: "components#/schemas/Int8Array",
                    properties: {},
                    nullable: false,
                },
                Int16Array: {
                    type: "object",
                    $id: "components#/schemas/Int16Array",
                    properties: {},
                    nullable: false,
                },
                Int32Array: {
                    type: "object",
                    $id: "components#/schemas/Int32Array",
                    properties: {},
                    nullable: false,
                },
                BigInt64Array: {
                    type: "object",
                    $id: "components#/schemas/BigInt64Array",
                    properties: {},
                    nullable: false,
                },
                Float32Array: {
                    type: "object",
                    $id: "components#/schemas/Float32Array",
                    properties: {},
                    nullable: false,
                },
                Float64Array: {
                    type: "object",
                    $id: "components#/schemas/Float64Array",
                    properties: {},
                    nullable: false,
                },
                ArrayBuffer: {
                    type: "object",
                    $id: "components#/schemas/ArrayBuffer",
                    properties: {},
                    nullable: false,
                },
                SharedArrayBuffer: {
                    type: "object",
                    $id: "components#/schemas/SharedArrayBuffer",
                    properties: {},
                    nullable: false,
                },
                DataView: {
                    type: "object",
                    $id: "components#/schemas/DataView",
                    properties: {},
                    nullable: false,
                },
                WeakSet: {
                    type: "object",
                    $id: "components#/schemas/WeakSet",
                    properties: {},
                    nullable: false,
                },
                WeakMap: {
                    type: "object",
                    $id: "components#/schemas/WeakMap",
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
