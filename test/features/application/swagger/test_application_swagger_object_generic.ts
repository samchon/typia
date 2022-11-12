import TSON from "../../../../src";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_generic =
    _test_application_swagger(
        "generic object",
        TSON.application<[ObjectGeneric], "swagger">(),
        {
            schemas: [
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
            components: {
                schemas: {
                    "ObjectGeneric.ISomething_lt_boolean_gt_": {
                        type: "object",
                        properties: {
                            value: {
                                type: "boolean",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            child: {
                                $ref: "#/components/schemas/ObjectGeneric.IChild_lt_boolean_comma__space_boolean_gt_",
                                "x-tson-required": true,
                            },
                            elements: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectGeneric.IChild_lt_boolean_comma__space_boolean_gt_",
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value", "child", "elements"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectGeneric.IChild_lt_boolean_comma__space_boolean_gt_":
                        {
                            type: "object",
                            properties: {
                                child_value: {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                                child_next: {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                            },
                            nullable: false,
                            required: ["child_value", "child_next"],
                            "x-tson_jsDocTags": [],
                        },
                    "ObjectGeneric.ISomething_lt_number_gt_": {
                        type: "object",
                        properties: {
                            value: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            child: {
                                $ref: "#/components/schemas/ObjectGeneric.IChild_lt_number_comma__space_number_gt_",
                                "x-tson-required": true,
                            },
                            elements: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectGeneric.IChild_lt_number_comma__space_number_gt_",
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value", "child", "elements"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectGeneric.IChild_lt_number_comma__space_number_gt_": {
                        type: "object",
                        properties: {
                            child_value: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            child_next: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["child_value", "child_next"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectGeneric.ISomething_lt_string_gt_": {
                        type: "object",
                        properties: {
                            value: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            child: {
                                $ref: "#/components/schemas/ObjectGeneric.IChild_lt_string_comma__space_string_gt_",
                                "x-tson-required": true,
                            },
                            elements: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectGeneric.IChild_lt_string_comma__space_string_gt_",
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value", "child", "elements"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectGeneric.IChild_lt_string_comma__space_string_gt_": {
                        type: "object",
                        properties: {
                            child_value: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            child_next: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["child_value", "child_next"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
