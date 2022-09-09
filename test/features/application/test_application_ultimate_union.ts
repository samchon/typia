import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_application } from "./_test_application";

export const test_application_ultimate_union = _test_application(
    "ultimate union",
    TSON.application<[UltimateUnion]>(),
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
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_string_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_bigint_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_number_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_boolean_gt_",
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
                                        $ref: "#/components/schemas/IJsonSchema.IReference",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IOneOf",
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
                    required: ["schemas", "components", "purpose", "prefix"],
                    jsDocTags: [],
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
                        description: {
                            type: "string",
                            nullable: false,
                        },
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["enum", "type", "nullable"],
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                            enum: ["url", "email", "uuid", "ipv4", "ipv6"],
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["kind", "value"],
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
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
                    jsDocTags: [],
                },
                "IJsonSchema.IEnumeration_lt_bigint_gt_": {
                    type: "object",
                    properties: {
                        enum: {
                            type: "array",
                            items: {
                                type: "bigint",
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
                        description: {
                            type: "string",
                            nullable: false,
                        },
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["enum", "type", "nullable"],
                    jsDocTags: [],
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
                        description: {
                            type: "string",
                            nullable: false,
                        },
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["enum", "type", "nullable"],
                    jsDocTags: [],
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
                        description: {
                            type: "string",
                            nullable: false,
                        },
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["enum", "type", "nullable"],
                    jsDocTags: [],
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
                        description: {
                            type: "string",
                            nullable: false,
                        },
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["type", "nullable"],
                    jsDocTags: [],
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
                        description: {
                            type: "string",
                            nullable: false,
                        },
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["type", "nullable"],
                    jsDocTags: [],
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
                        description: {
                            type: "string",
                            nullable: false,
                        },
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["type", "nullable"],
                    jsDocTags: [],
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
                        description: {
                            type: "string",
                            nullable: false,
                        },
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["type", "nullable"],
                    jsDocTags: [],
                },
                "IJsonSchema.IArray": {
                    type: "object",
                    properties: {
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_string_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_bigint_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_number_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_boolean_gt_",
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
                                    $ref: "#/components/schemas/IJsonSchema.IReference",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IOneOf",
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
                        description: {
                            type: "string",
                            nullable: false,
                        },
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["items", "type", "nullable"],
                    jsDocTags: [],
                },
                "IJsonSchema.ITuple": {
                    type: "object",
                    properties: {
                        items: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_string_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_bigint_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_number_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_boolean_gt_",
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
                                        $ref: "#/components/schemas/IJsonSchema.IReference",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IOneOf",
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
                        description: {
                            type: "string",
                            nullable: false,
                        },
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["items", "type", "nullable"],
                    jsDocTags: [],
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
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["$ref"],
                    jsDocTags: [],
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
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["$recursiveRef"],
                    jsDocTags: [],
                },
                "IJsonSchema.IOneOf": {
                    type: "object",
                    properties: {
                        oneOf: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_string_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_bigint_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_number_gt_",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt_boolean_gt_",
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
                                        $ref: "#/components/schemas/IJsonSchema.IUnkown",
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
                                ],
                            },
                            nullable: false,
                        },
                        description: {
                            type: "string",
                            nullable: false,
                        },
                        metaTags: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IRange",
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        jsDocTags: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["oneOf"],
                    jsDocTags: [],
                },
                "IJsonSchema.IUnkown": {
                    type: "object",
                    properties: {},
                    nullable: false,
                    jsDocTags: [],
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
                    jsDocTags: [],
                },
                __type: {
                    type: "object",
                    properties: {},
                    nullable: false,
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
