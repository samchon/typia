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
                },
                "IJsonSchema.IEnumeration_lt_string_gt_": {
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            enum: ["string", "number", "bigint", "boolean"],
                            nullable: false,
                        },
                        enum: {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false,
                            },
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
                    },
                    nullable: false,
                    required: ["type", "enum", "nullable"],
                },
                "IJsonSchema.IEnumeration_lt_bigint_gt_": {
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            enum: ["string", "number", "bigint", "boolean"],
                            nullable: false,
                        },
                        enum: {
                            type: "array",
                            items: {
                                type: "bigint",
                                nullable: false,
                            },
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
                    },
                    nullable: false,
                    required: ["type", "enum", "nullable"],
                },
                "IJsonSchema.IEnumeration_lt_number_gt_": {
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            enum: ["string", "number", "bigint", "boolean"],
                            nullable: false,
                        },
                        enum: {
                            type: "array",
                            items: {
                                type: "number",
                                nullable: false,
                            },
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
                    },
                    nullable: false,
                    required: ["type", "enum", "nullable"],
                },
                "IJsonSchema.IEnumeration_lt_boolean_gt_": {
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            enum: ["string", "number", "bigint", "boolean"],
                            nullable: false,
                        },
                        enum: {
                            type: "array",
                            items: {
                                type: "boolean",
                                nullable: false,
                            },
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
                    },
                    nullable: false,
                    required: ["type", "enum", "nullable"],
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
                    },
                    nullable: false,
                    required: ["type", "nullable"],
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
                    },
                    nullable: false,
                    required: ["type", "nullable"],
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
                    },
                    nullable: false,
                    required: ["type", "nullable"],
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
                    },
                    nullable: false,
                    required: ["type", "nullable"],
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
                    },
                    nullable: false,
                    required: ["items", "type", "nullable"],
                },
                "IJsonSchema.ITuple": {
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            enum: ["array"],
                            nullable: false,
                        },
                        nullable: {
                            type: "boolean",
                            nullable: false,
                        },
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
                        description: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["type", "nullable", "items"],
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
                    },
                    nullable: false,
                    required: ["$ref"],
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
                    },
                    nullable: false,
                    required: ["$recursiveRef"],
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
                                        $ref: "#/components/schemas/IJsonSchema.IUnkown",
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        description: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["oneOf"],
                },
                "IJsonSchema.IUnkown": {
                    type: "object",
                    properties: {},
                    nullable: false,
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
                },
                __type: {
                    type: "object",
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
