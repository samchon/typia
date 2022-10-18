import TSON from "../../../../src";
import { UltimateUnion } from "../../../structures/UltimateUnion";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_ultimate_union =
    _test_application_swagger(
        "ultimate union",
        TSON.application<[UltimateUnion], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        $ref: "#/components/schemas/IJsonApplication",
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    IJsonApplication: {
                        type: "object",
                        properties: {
                            schemas: {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_boolean_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_number_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_bigint_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_string_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.INumber",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IString",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IArray",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.ITuple",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IReference",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IUnkown",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            components: {
                                $ref: "#/components/schemas/IJsonComponents",
                            },
                            purpose: {
                                type: "string",
                                enum: ["swagger", "ajv"],
                                nullable: false,
                            },
                            prefix: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: [
                            "schemas",
                            "components",
                            "purpose",
                            "prefix",
                        ],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IEnumeration_lt_boolean_gt_": {
                        type: "object",
                        properties: {
                            enum: {
                                type: "array",
                                items: {
                                    type: "boolean",
                                    nullable: false,
                                },
                                nullable: false,
                            },
                            type: {
                                type: "string",
                                enum: ["boolean"],
                                nullable: false,
                            },
                            nullable: {
                                type: "boolean",
                                nullable: false,
                            },
                            default: {
                                type: "boolean",
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["enum", "type", "nullable"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IItems": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["items"],
                                nullable: false,
                            },
                            minimum: {
                                $ref: "#/components/schemas/IMetadataTag.ISign",
                            },
                            maximum: {
                                $ref: "#/components/schemas/IMetadataTag.ISign",
                            },
                        },
                        nullable: false,
                        required: ["kind"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.ISign": {
                        type: "object",
                        properties: {
                            include: {
                                type: "boolean",
                                nullable: false,
                            },
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["include", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IMinItems": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["minItems"],
                                nullable: false,
                            },
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IMaxItems": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["maxItems"],
                                nullable: false,
                            },
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IFormat": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["format"],
                                nullable: false,
                            },
                            value: {
                                type: "string",
                                enum: ["uuid", "email", "url", "ipv4", "ipv6"],
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IPattern": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["pattern"],
                                nullable: false,
                            },
                            value: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.ILength": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["length"],
                                nullable: false,
                            },
                            minimum: {
                                $ref: "#/components/schemas/IMetadataTag.ISign",
                            },
                            maximum: {
                                $ref: "#/components/schemas/IMetadataTag.ISign",
                            },
                        },
                        nullable: false,
                        required: ["kind"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IMinLength": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["minLength"],
                                nullable: false,
                            },
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IMaxLength": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["maxLength"],
                                nullable: false,
                            },
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IType": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["type"],
                                nullable: false,
                            },
                            value: {
                                type: "string",
                                enum: ["int", "uint"],
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IRange": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["range"],
                                nullable: false,
                            },
                            minimum: {
                                $ref: "#/components/schemas/IMetadataTag.ISign",
                            },
                            maximum: {
                                $ref: "#/components/schemas/IMetadataTag.ISign",
                            },
                        },
                        nullable: false,
                        required: ["kind"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IMinimum": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["minimum"],
                                nullable: false,
                            },
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IMaximum": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["maximum"],
                                nullable: false,
                            },
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IExclusiveMinimum": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["exclusiveMinimum"],
                                nullable: false,
                            },
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IExclusiveMaximum": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["exclusiveMaximum"],
                                nullable: false,
                            },
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IMultipleOf": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["multipleOf"],
                                nullable: false,
                            },
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    "IMetadataTag.IStep": {
                        type: "object",
                        properties: {
                            kind: {
                                type: "string",
                                enum: ["step"],
                                nullable: false,
                            },
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["kind", "value"],
                        "x-tson_jsDocTags": [],
                    },
                    IJsDocTagInfo: {
                        type: "object",
                        properties: {
                            name: {
                                type: "string",
                                nullable: false,
                            },
                            text: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo.IText",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["name"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsDocTagInfo.IText": {
                        type: "object",
                        properties: {
                            text: {
                                type: "string",
                                nullable: false,
                            },
                            kind: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["text", "kind"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IEnumeration_lt_number_gt_": {
                        type: "object",
                        properties: {
                            enum: {
                                type: "array",
                                items: {
                                    type: "number",
                                    nullable: false,
                                },
                                nullable: false,
                            },
                            type: {
                                type: "string",
                                enum: ["number"],
                                nullable: false,
                            },
                            nullable: {
                                type: "boolean",
                                nullable: false,
                            },
                            default: {
                                type: "number",
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["enum", "type", "nullable"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IEnumeration_lt_bigint_gt_": {
                        type: "object",
                        properties: {
                            enum: {
                                type: "array",
                                items: {
                                    type: "boolean",
                                    nullable: false,
                                },
                                nullable: false,
                            },
                            type: {
                                type: "string",
                                enum: ["bigint"],
                                nullable: false,
                            },
                            nullable: {
                                type: "boolean",
                                nullable: false,
                            },
                            default: {
                                type: "boolean",
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["enum", "type", "nullable"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IEnumeration_lt_string_gt_": {
                        type: "object",
                        properties: {
                            enum: {
                                type: "array",
                                items: {
                                    type: "string",
                                    nullable: false,
                                },
                                nullable: false,
                            },
                            type: {
                                type: "string",
                                enum: ["string"],
                                nullable: false,
                            },
                            nullable: {
                                type: "boolean",
                                nullable: false,
                            },
                            default: {
                                type: "string",
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["enum", "type", "nullable"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IBoolean": {
                        type: "object",
                        properties: {
                            type: {
                                type: "string",
                                enum: ["boolean"],
                                nullable: false,
                            },
                            nullable: {
                                type: "boolean",
                                nullable: false,
                            },
                            default: {
                                type: "boolean",
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["type", "nullable"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.INumber": {
                        type: "object",
                        properties: {
                            minimum: {
                                type: "number",
                                nullable: false,
                            },
                            maximum: {
                                type: "number",
                                nullable: false,
                            },
                            exclusiveMinimum: {
                                type: "number",
                                nullable: false,
                            },
                            exclusiveMaximum: {
                                type: "number",
                                nullable: false,
                            },
                            type: {
                                type: "string",
                                enum: ["number", "integer"],
                                nullable: false,
                            },
                            nullable: {
                                type: "boolean",
                                nullable: false,
                            },
                            default: {
                                type: "number",
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["type", "nullable"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IBigInt": {
                        type: "object",
                        properties: {
                            type: {
                                type: "string",
                                enum: ["bigint"],
                                nullable: false,
                            },
                            nullable: {
                                type: "boolean",
                                nullable: false,
                            },
                            default: {
                                type: "boolean",
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["type", "nullable"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IString": {
                        type: "object",
                        properties: {
                            minLength: {
                                type: "number",
                                nullable: false,
                            },
                            maxLength: {
                                type: "number",
                                nullable: false,
                            },
                            pattern: {
                                type: "string",
                                nullable: false,
                            },
                            format: {
                                type: "string",
                                nullable: false,
                            },
                            type: {
                                type: "string",
                                enum: ["string"],
                                nullable: false,
                            },
                            nullable: {
                                type: "boolean",
                                nullable: false,
                            },
                            default: {
                                type: "string",
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["type", "nullable"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IArray": {
                        type: "object",
                        properties: {
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_boolean_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_number_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_bigint_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_string_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.INumber",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IString",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IArray",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.ITuple",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IReference",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IUnkown",
                                    },
                                ],
                            },
                            minItems: {
                                type: "number",
                                nullable: false,
                            },
                            maxItems: {
                                type: "number",
                                nullable: false,
                            },
                            type: {
                                type: "string",
                                enum: ["array"],
                                nullable: false,
                            },
                            nullable: {
                                type: "boolean",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["items", "type", "nullable"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.ITuple": {
                        type: "object",
                        properties: {
                            items: {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_boolean_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_number_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_bigint_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_string_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.INumber",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IString",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.ITuple",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IArray",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IReference",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IUnkown",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            type: {
                                type: "string",
                                enum: ["array"],
                                nullable: false,
                            },
                            nullable: {
                                type: "boolean",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["items", "type", "nullable"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IOneOf": {
                        type: "object",
                        properties: {
                            oneOf: {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_boolean_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_number_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_bigint_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_string_gt_",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.INumber",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IString",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.ITuple",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IArray",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IReference",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                        },
                                        {
                                            $ref: "#/components/schemas/IJsonSchema.IUnkown",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["oneOf"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IReference": {
                        type: "object",
                        properties: {
                            $ref: {
                                type: "string",
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["$ref"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IRecursiveReference": {
                        type: "object",
                        properties: {
                            $recursiveRef: {
                                type: "string",
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["$recursiveRef"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.INullOnly": {
                        type: "object",
                        properties: {
                            type: {
                                type: "string",
                                enum: ["null"],
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson-metaTags": {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IRange",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            "x-tson-jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["type"],
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonSchema.IUnkown": {
                        type: "object",
                        properties: {},
                        nullable: false,
                        "x-tson_jsDocTags": [],
                    },
                    IJsonComponents: {
                        type: "object",
                        properties: {
                            schemas: {
                                $ref: "#/components/schemas/__type",
                            },
                        },
                        nullable: false,
                        required: ["schemas"],
                        "x-tson_jsDocTags": [],
                    },
                    __type: {
                        type: "object",
                        properties: {},
                        additionalProperties: {
                            $ref: "#/components/schemas/IJsonComponents.IObject",
                        },
                        nullable: false,
                        "x-tson_jsDocTags": [],
                    },
                    "IJsonComponents.IObject": {
                        type: "object",
                        properties: {
                            $id: {
                                type: "string",
                                nullable: false,
                            },
                            type: {
                                type: "string",
                                enum: ["object"],
                                nullable: false,
                            },
                            nullable: {
                                type: "boolean",
                                nullable: false,
                            },
                            properties: {
                                $ref: "#/components/schemas/__type.o1",
                            },
                            patternProperties: {
                                $ref: "#/components/schemas/__type.o1",
                            },
                            additionalProperties: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_boolean_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_number_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_bigint_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_string_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.INumber",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IString",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IArray",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.ITuple",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IReference",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IUnkown",
                                    },
                                ],
                            },
                            required: {
                                type: "array",
                                items: {
                                    type: "string",
                                    nullable: false,
                                },
                                nullable: false,
                            },
                            description: {
                                type: "string",
                                nullable: false,
                            },
                            "x-tson_jsDocTags": {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                },
                                nullable: false,
                            },
                            $recursiveAnchor: {
                                type: "boolean",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["type", "nullable", "properties"],
                        "x-tson_jsDocTags": [],
                    },
                    "__type.o1": {
                        type: "object",
                        properties: {},
                        additionalProperties: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_boolean_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_number_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_bigint_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_string_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INumber",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IString",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IArray",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.ITuple",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IReference",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IUnkown",
                                },
                            ],
                        },
                        nullable: false,
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
