import TSON from "../../../../src";
import { NativeUnion } from "../../../structures/NativeUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_NativeUnion = _test_application("ajv")(
    "NativeUnion",
    TSON.application<[NativeUnion], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "components#/schemas/NativeUnion.Union",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "NativeUnion.Union": {
                    $id: "components#/schemas/NativeUnion.Union",
                    type: "object",
                    properties: {
                        date: {
                            type: "string",
                            nullable: true,
                            "x-tson-required": true,
                        },
                        unsigned: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Uint8Array",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/Uint8ClampedArray",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/Uint16Array",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/Uint32Array",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/BigUint64Array",
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                        signed: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Int8Array",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/Int16Array",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/Int32Array",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/BigInt64Array",
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                        float: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Float32Array",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/Float64Array",
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                        buffer: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ArrayBuffer",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/SharedArrayBuffer",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/DataView",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "components#/schemas/__type",
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                        weak: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/WeakSet",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/WeakMap",
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: [
                        "date",
                        "unsigned",
                        "signed",
                        "float",
                        "buffer",
                        "weak",
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
                __type: {
                    $id: "components#/schemas/__type",
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
