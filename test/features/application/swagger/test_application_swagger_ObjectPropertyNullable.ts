import TSON from "../../../../src";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectPropertyNullable =
    _test_application("swagger")(
        "ObjectPropertyNullable",
        TSON.application<[ObjectPropertyNullable], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_boolean_gt_",
                                },
                                nullable: false,
                            },
                            {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_number_gt_",
                                },
                                nullable: false,
                            },
                            {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_string_gt_",
                                },
                                nullable: false,
                            },
                            {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_ObjectPropertyNullable.IMember_gt_",
                                },
                                nullable: false,
                            },
                        ],
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    "ObjectPropertyNullable.IPointer_lt_boolean_gt_": {
                        type: "object",
                        properties: {
                            value: {
                                type: "boolean",
                                nullable: true,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectPropertyNullable.IPointer_lt_number_gt_": {
                        type: "object",
                        properties: {
                            value: {
                                type: "number",
                                nullable: true,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectPropertyNullable.IPointer_lt_string_gt_": {
                        type: "object",
                        properties: {
                            value: {
                                type: "string",
                                nullable: true,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectPropertyNullable.IPointer_lt_ObjectPropertyNullable.IMember_gt_":
                        {
                            type: "object",
                            properties: {
                                value: {
                                    $ref: "#/components/schemas/ObjectPropertyNullable.IMember.Nullable",
                                    "x-tson-required": true,
                                },
                            },
                            nullable: false,
                            required: ["value"],
                            "x-tson_jsDocTags": [],
                        },
                    "ObjectPropertyNullable.IMember.Nullable": {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: true,
                                "x-tson-required": true,
                            },
                            grade: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": false,
                            },
                            serial: {
                                type: "number",
                                nullable: true,
                                "x-tson-required": false,
                            },
                            activated: {
                                type: "boolean",
                                nullable: true,
                                "x-tson-required": true,
                            },
                        },
                        nullable: true,
                        required: ["id", "name", "activated"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
