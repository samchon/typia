import TSON from "../../../../src";
import { TagLength } from "../../../structures/TagLength";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_tag_length = _test_application_ajv(
    "length tag",
    TSON.application<[TagLength], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/TagLength",
            },
        ],
        components: {
            schemas: {
                TagLength: {
                    $id: "components#/schemas/TagLength",
                    type: "object",
                    properties: {
                        fixed: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "length",
                                    minimum: {
                                        include: true,
                                        value: 5,
                                    },
                                    maximum: {
                                        include: true,
                                        value: 5,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "length",
                                    text: [
                                        {
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minLength: 5,
                            maxLength: 5,
                        },
                        greater: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "length",
                                    minimum: {
                                        include: false,
                                        value: 3,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "length",
                                    text: [
                                        {
                                            text: "(3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minLength: 4,
                        },
                        greater_equal: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "length",
                                    minimum: {
                                        include: true,
                                        value: 3,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "length",
                                    text: [
                                        {
                                            text: "[3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minLength: 3,
                        },
                        less: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "length",
                                    maximum: {
                                        include: false,
                                        value: 7,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "length",
                                    text: [
                                        {
                                            text: "7)",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            maxLength: 6,
                        },
                        less_equal: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "length",
                                    maximum: {
                                        include: true,
                                        value: 7,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "length",
                                    text: [
                                        {
                                            text: "7]",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            maxLength: 7,
                        },
                        greater_less: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "length",
                                    minimum: {
                                        include: false,
                                        value: 3,
                                    },
                                    maximum: {
                                        include: false,
                                        value: 7,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "length",
                                    text: [
                                        {
                                            text: "(3, 7)",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minLength: 4,
                            maxLength: 6,
                        },
                        greater_equal_less: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "length",
                                    minimum: {
                                        include: true,
                                        value: 3,
                                    },
                                    maximum: {
                                        include: false,
                                        value: 7,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "length",
                                    text: [
                                        {
                                            text: "[3, 7)",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minLength: 3,
                            maxLength: 6,
                        },
                        greater_less_equal: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "length",
                                    minimum: {
                                        include: false,
                                        value: 3,
                                    },
                                    maximum: {
                                        include: true,
                                        value: 7,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "length",
                                    text: [
                                        {
                                            text: "(3, 7]",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minLength: 4,
                            maxLength: 7,
                        },
                        greater_equal_less_equal: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "length",
                                    minimum: {
                                        include: true,
                                        value: 3,
                                    },
                                    maximum: {
                                        include: true,
                                        value: 7,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "length",
                                    text: [
                                        {
                                            text: "[3, 7]",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minLength: 3,
                            maxLength: 7,
                        },
                        minimum: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "minLength",
                                    value: 3,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "minLength",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minLength: 3,
                        },
                        maximum: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "maxLength",
                                    value: 7,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "maxLength",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            maxLength: 7,
                        },
                        minimum_and_maximum: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "minLength",
                                    value: 3,
                                },
                                {
                                    kind: "maxLength",
                                    value: 7,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "minLength",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "maxLength",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minLength: 3,
                            maxLength: 7,
                        },
                    },
                    nullable: false,
                    required: [
                        "fixed",
                        "greater",
                        "greater_equal",
                        "less",
                        "less_equal",
                        "greater_less",
                        "greater_equal_less",
                        "greater_less_equal",
                        "greater_equal_less_equal",
                        "minimum",
                        "maximum",
                        "minimum_and_maximum",
                    ],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
