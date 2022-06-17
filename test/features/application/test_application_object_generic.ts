import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_application } from "./_test_application";

export const test_application_object_generic = _test_application(
    "generic object",
    TSON.application<[ObjectGeneric]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ObjectGeneric_lt_ObjectGeneric.ISomething_lt_boolean_gt__comma_ObjectGeneric.ISomething_lt_number_gt__comma_ObjectGeneric.ISomething_lt_string_gt__gt_",
                    },
                    {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ObjectGeneric.ISomething_lt_boolean_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/ObjectGeneric.ISomething_lt_number_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/ObjectGeneric.ISomething_lt_string_gt_",
                                },
                            ],
                        },
                        nullable: false,
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "ObjectGeneric_lt_ObjectGeneric.ISomething_lt_boolean_gt__comma_ObjectGeneric.ISomething_lt_number_gt__comma_ObjectGeneric.ISomething_lt_string_gt__gt_":
                    {
                        type: "object",
                        properties: {},
                        nullable: false,
                    },
                "ObjectGeneric.ISomething_lt_boolean_gt_": {
                    type: "object",
                    properties: {
                        value: {
                            type: "boolean",
                            enum: [false, true],
                            nullable: false,
                        },
                        child: {
                            $ref: "#/components/schemas/ObjectGeneric.IChild_lt_boolean_comma_boolean_gt_",
                        },
                        elements: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_ObjectGeneric.IChild_lt_boolean_comma_boolean_gt__gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/ObjectGeneric.IChild_lt_boolean_comma_boolean_gt_",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["value", "child", "elements"],
                },
                "ObjectGeneric.IChild_lt_boolean_comma_boolean_gt_": {
                    type: "object",
                    properties: {
                        child_value: {
                            type: "boolean",
                            enum: [false, true],
                            nullable: false,
                        },
                        child_next: {
                            type: "boolean",
                            enum: [false, true],
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["child_value", "child_next"],
                },
                "Array_lt_ObjectGeneric.IChild_lt_boolean_comma_boolean_gt__gt_":
                    {
                        type: "object",
                        properties: {
                            length: {
                                type: "number",
                                nullable: false,
                                description:
                                    "Gets or sets the length of the array. This is a number one higher than the highest index in the array.",
                            },
                        },
                        nullable: false,
                        required: ["length"],
                    },
                "ObjectGeneric.ISomething_lt_number_gt_": {
                    type: "object",
                    properties: {
                        value: {
                            type: "number",
                            nullable: false,
                        },
                        child: {
                            $ref: "#/components/schemas/ObjectGeneric.IChild_lt_number_comma_number_gt_",
                        },
                        elements: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_ObjectGeneric.IChild_lt_number_comma_number_gt__gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/ObjectGeneric.IChild_lt_number_comma_number_gt_",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["value", "child", "elements"],
                },
                "ObjectGeneric.IChild_lt_number_comma_number_gt_": {
                    type: "object",
                    properties: {
                        child_value: {
                            type: "number",
                            nullable: false,
                        },
                        child_next: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["child_value", "child_next"],
                },
                "Array_lt_ObjectGeneric.IChild_lt_number_comma_number_gt__gt_":
                    {
                        type: "object",
                        properties: {
                            length: {
                                type: "number",
                                nullable: false,
                                description:
                                    "Gets or sets the length of the array. This is a number one higher than the highest index in the array.",
                            },
                        },
                        nullable: false,
                        required: ["length"],
                    },
                "ObjectGeneric.ISomething_lt_string_gt_": {
                    type: "object",
                    properties: {
                        value: {
                            type: "string",
                            nullable: false,
                        },
                        child: {
                            $ref: "#/components/schemas/ObjectGeneric.IChild_lt_string_comma_string_gt_",
                        },
                        elements: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_ObjectGeneric.IChild_lt_string_comma_string_gt__gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/ObjectGeneric.IChild_lt_string_comma_string_gt_",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["value", "child", "elements"],
                },
                "ObjectGeneric.IChild_lt_string_comma_string_gt_": {
                    type: "object",
                    properties: {
                        child_value: {
                            type: "string",
                            nullable: false,
                        },
                        child_next: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["child_value", "child_next"],
                },
                "Array_lt_ObjectGeneric.IChild_lt_string_comma_string_gt__gt_":
                    {
                        type: "object",
                        properties: {
                            length: {
                                type: "number",
                                nullable: false,
                                description:
                                    "Gets or sets the length of the array. This is a number one higher than the highest index in the array.",
                            },
                        },
                        nullable: false,
                        required: ["length"],
                    },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
