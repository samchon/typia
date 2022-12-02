import TSON from "../../../../src";
import { UltimateUnion } from "../../../structures/UltimateUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_UltimateUnion = _test_application(
    "swagger",
)("UltimateUnion", TSON.application<[UltimateUnion], "swagger">(), {
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
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INumber",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IString",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IArray",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.ITuple",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IReference",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson-required": true,
                    },
                    components: {
                        $ref: "#/components/schemas/IJsonComponents",
                        "x-tson-required": true,
                    },
                    purpose: {
                        type: "string",
                        enum: ["swagger", "ajv"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                    prefix: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["schemas", "components", "purpose", "prefix"],
                "x-tson_jsDocTags": [],
            },
            "IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_":
                {
                    type: "object",
                    properties: {
                        enum: {
                            type: "array",
                            items: {
                                type: "boolean",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            nullable: false,
                            "x-tson-required": true,
                        },
                        default: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        type: {
                            type: "string",
                            enum: ["boolean"],
                            nullable: false,
                            "x-tson-required": true,
                        },
                        nullable: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        deprecated: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        title: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        description: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-metaTags": {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.INumberType",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                        "x-tson-required": false,
                                    },
                                ],
                                "x-tson-required": false,
                            },
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-jsDocTags": {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-tson-required": false,
                            },
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-required": {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": false,
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
                        "x-tson-required": true,
                    },
                    minimum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-tson-required": false,
                    },
                    maximum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-tson-required": false,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "string",
                        enum: ["uuid", "email", "url", "ipv4", "ipv6"],
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    minimum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-tson-required": false,
                    },
                    maximum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-tson-required": false,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["kind", "value"],
                "x-tson_jsDocTags": [],
            },
            "IMetadataTag.INumberType": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        enum: ["type"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                    value: {
                        type: "string",
                        enum: [
                            "int",
                            "uint",
                            "int32",
                            "uint32",
                            "int64",
                            "uint64",
                            "float",
                            "double",
                        ],
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    minimum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-tson-required": false,
                    },
                    maximum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-tson-required": false,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["kind", "value"],
                "x-tson_jsDocTags": [],
            },
            "IMetadataTag.IBigintType": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        enum: ["type"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                    value: {
                        type: "string",
                        enum: ["int64", "uint64"],
                        nullable: false,
                        "x-tson-required": true,
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
                        "x-tson-required": true,
                    },
                    text: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo.IText",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
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
                        "x-tson-required": true,
                    },
                    kind: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["text", "kind"],
                "x-tson_jsDocTags": [],
            },
            "IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_":
                {
                    type: "object",
                    properties: {
                        enum: {
                            type: "array",
                            items: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            nullable: false,
                            "x-tson-required": true,
                        },
                        default: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        type: {
                            type: "string",
                            enum: ["number"],
                            nullable: false,
                            "x-tson-required": true,
                        },
                        nullable: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        deprecated: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        title: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        description: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-metaTags": {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.INumberType",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                        "x-tson-required": false,
                                    },
                                ],
                                "x-tson-required": false,
                            },
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-jsDocTags": {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-tson-required": false,
                            },
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-required": {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": false,
                        },
                    },
                    nullable: false,
                    required: ["enum", "type", "nullable"],
                    "x-tson_jsDocTags": [],
                },
            "IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_":
                {
                    type: "object",
                    properties: {
                        enum: {
                            type: "array",
                            items: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            nullable: false,
                            "x-tson-required": true,
                        },
                        default: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        type: {
                            type: "string",
                            enum: ["bigint"],
                            nullable: false,
                            "x-tson-required": true,
                        },
                        nullable: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        deprecated: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        title: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        description: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-metaTags": {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.INumberType",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                        "x-tson-required": false,
                                    },
                                ],
                                "x-tson-required": false,
                            },
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-jsDocTags": {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-tson-required": false,
                            },
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-required": {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": false,
                        },
                    },
                    nullable: false,
                    required: ["enum", "type", "nullable"],
                    "x-tson_jsDocTags": [],
                },
            "IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_":
                {
                    type: "object",
                    properties: {
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            nullable: false,
                            "x-tson-required": true,
                        },
                        default: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        type: {
                            type: "string",
                            enum: ["string"],
                            nullable: false,
                            "x-tson-required": true,
                        },
                        nullable: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        deprecated: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        title: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        description: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-metaTags": {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.INumberType",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-tson-required": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                        "x-tson-required": false,
                                    },
                                ],
                                "x-tson-required": false,
                            },
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-jsDocTags": {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-tson-required": false,
                            },
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "x-tson-required": {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": false,
                        },
                    },
                    nullable: false,
                    required: ["enum", "type", "nullable"],
                    "x-tson_jsDocTags": [],
                },
            "IJsonSchema.IBoolean": {
                type: "object",
                properties: {
                    default: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    type: {
                        type: "string",
                        enum: ["boolean"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.INumberType",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                    "x-tson-required": false,
                                },
                            ],
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-required": {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
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
                        "x-tson-required": false,
                    },
                    maximum: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    exclusiveMinimum: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    exclusiveMaximum: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    multipleOf: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    default: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    type: {
                        type: "string",
                        enum: ["number", "integer"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.INumberType",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                    "x-tson-required": false,
                                },
                            ],
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-required": {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                },
                nullable: false,
                required: ["type", "nullable"],
                "x-tson_jsDocTags": [],
            },
            "IJsonSchema.IBigInt": {
                type: "object",
                properties: {
                    default: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    type: {
                        type: "string",
                        enum: ["bigint"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.INumberType",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                    "x-tson-required": false,
                                },
                            ],
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-required": {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
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
                        "x-tson-required": false,
                    },
                    maxLength: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    pattern: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    format: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    default: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    type: {
                        type: "string",
                        enum: ["string"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.INumberType",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                    "x-tson-required": false,
                                },
                            ],
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-required": {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
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
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.INumber",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IString",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IArray",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.ITuple",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IReference",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                "x-tson-required": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                "x-tson-required": true,
                            },
                        ],
                        "x-tson-required": true,
                    },
                    minItems: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    maxItems: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    type: {
                        type: "string",
                        enum: ["array"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.INumberType",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                    "x-tson-required": false,
                                },
                            ],
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-required": {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
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
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INumber",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IString",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.ITuple",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IArray",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IReference",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson-required": true,
                    },
                    type: {
                        type: "string",
                        enum: ["array"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.INumberType",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                    "x-tson-required": false,
                                },
                            ],
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-required": {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
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
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INumber",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IString",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.ITuple",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IArray",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IReference",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson-required": true,
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.INumberType",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                    "x-tson-required": false,
                                },
                            ],
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-required": {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
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
                        "x-tson-required": true,
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.INumberType",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                    "x-tson-required": false,
                                },
                            ],
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-required": {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
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
                        "x-tson-required": true,
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.INumberType",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                    "x-tson-required": false,
                                },
                            ],
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-required": {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
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
                        "x-tson-required": true,
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.INumberType",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-tson-required": false,
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IBigintType",
                                    "x-tson-required": false,
                                },
                            ],
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson-required": {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                },
                nullable: false,
                required: ["type"],
                "x-tson_jsDocTags": [],
            },
            "IJsonSchema.IUnknown": {
                type: "object",
                properties: {},
                nullable: false,
                "x-tson_jsDocTags": [],
            },
            IJsonComponents: {
                type: "object",
                properties: {
                    schemas: {
                        $ref: "#/components/schemas/Record_lt_string_comma__space_IJsonComponents.IObject_gt_",
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["schemas"],
                "x-tson_jsDocTags": [],
            },
            "Record_lt_string_comma__space_IJsonComponents.IObject_gt_": {
                type: "object",
                properties: {},
                additionalProperties: {
                    $ref: "#/components/schemas/IJsonComponents.IObject",
                    "x-tson-required": true,
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
                        "x-tson-required": false,
                    },
                    type: {
                        type: "string",
                        enum: ["object"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    properties: {
                        $ref: "#/components/schemas/Record_lt_string_comma__space_IJsonSchema_gt_",
                        "x-tson-required": true,
                    },
                    patternProperties: {
                        $ref: "#/components/schemas/Record_lt_string_comma__space_IJsonSchema_gt_",
                        "x-tson-required": false,
                    },
                    additionalProperties: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.INumber",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IString",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IArray",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.ITuple",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IReference",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                "x-tson-required": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                "x-tson-required": false,
                            },
                        ],
                        "x-tson-required": false,
                    },
                    required: {
                        type: "array",
                        items: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    "x-tson_jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    $recursiveAnchor: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": false,
                    },
                },
                nullable: false,
                required: ["type", "nullable", "properties"],
                "x-tson_jsDocTags": [],
            },
            Record_lt_string_comma__space_IJsonSchema_gt_: {
                type: "object",
                properties: {},
                additionalProperties: {
                    oneOf: [
                        {
                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IBoolean",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.INumber",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IBigInt",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IString",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IArray",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.ITuple",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IOneOf",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IReference",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.INullOnly",
                            "x-tson-required": true,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IUnknown",
                            "x-tson-required": true,
                        },
                    ],
                    "x-tson-required": true,
                },
                nullable: false,
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
