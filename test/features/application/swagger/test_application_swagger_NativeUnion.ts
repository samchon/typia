import typia from "../../../../src";
import { NativeUnion } from "../../../structures/NativeUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_NativeUnion = _test_application(
    "swagger",
)("NativeUnion", typia.application<[NativeUnion], "swagger">(), {
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/NativeUnion.Union",
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {
            "NativeUnion.Union": {
                type: "object",
                properties: {
                    date: {
                        type: "string",
                        nullable: true,
                        "x-typia-required": true,
                    },
                    unsigned: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/Uint8Array",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/Uint8ClampedArray",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/Uint16Array",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/Uint32Array",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/BigUint64Array",
                                "x-typia-required": true,
                            },
                        ],
                        "x-typia-required": true,
                    },
                    signed: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/Int8Array",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/Int16Array",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/Int32Array",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/BigInt64Array",
                                "x-typia-required": true,
                            },
                        ],
                        "x-typia-required": true,
                    },
                    float: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/Float32Array",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/Float64Array",
                                "x-typia-required": true,
                            },
                        ],
                        "x-typia-required": true,
                    },
                    buffer: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ArrayBuffer",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/SharedArrayBuffer",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/DataView",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/__type",
                                "x-typia-required": true,
                            },
                        ],
                        "x-typia-required": true,
                    },
                    weak: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/WeakSet",
                                "x-typia-required": true,
                            },
                            {
                                $ref: "#/components/schemas/WeakMap",
                                "x-typia-required": true,
                            },
                        ],
                        "x-typia-required": true,
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
                "x-typia_jsDocTags": [],
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
            __type: {
                type: "object",
                properties: {
                    type: {
                        type: "string",
                        enum: ["Buffer"],
                        nullable: false,
                        "x-typia-required": true,
                    },
                    data: {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        nullable: false,
                        "x-typia-required": true,
                    },
                },
                nullable: false,
                required: ["type", "data"],
                "x-typia_jsDocTags": [],
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
