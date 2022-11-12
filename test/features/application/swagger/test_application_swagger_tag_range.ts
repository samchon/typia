import TSON from "../../../../src";
import { TagRange } from "../../../structures/TagRange";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_tag_range = _test_application_swagger(
    "range tag",
    TSON.application<[TagRange], "swagger">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/TagRange.Type",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "TagRange.Type": {
                    type: "object",
                    properties: {
                        minimum: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "minimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            minimum: 3,
                        },
                        maximum: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "maximum",
                                    value: 7,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "maximum",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            maximum: 7,
                        },
                        minimum_and_maximum: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                                {
                                    kind: "maximum",
                                    value: 7,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "minimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "maximum",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            minimum: 3,
                            maximum: 7,
                        },
                        greater: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "range",
                                    minimum: {
                                        include: false,
                                        value: 3,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "(3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            exclusiveMinimum: 3,
                        },
                        greater_equal: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "range",
                                    minimum: {
                                        include: true,
                                        value: 3,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "[3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            minimum: 3,
                        },
                        less: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "range",
                                    maximum: {
                                        include: false,
                                        value: 7,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "7)",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            exclusiveMaximum: 7,
                        },
                        less_equal: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "range",
                                    maximum: {
                                        include: true,
                                        value: 7,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "7]",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            maximum: 7,
                        },
                        greater_less: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "range",
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
                                    name: "range",
                                    text: [
                                        {
                                            text: "(3, 7)",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            exclusiveMinimum: 3,
                            exclusiveMaximum: 7,
                        },
                        greater_equal_less: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "range",
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
                                    name: "range",
                                    text: [
                                        {
                                            text: "[3, 7)",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            minimum: 3,
                            exclusiveMaximum: 7,
                        },
                        greater_less_equal: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "range",
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
                                    name: "range",
                                    text: [
                                        {
                                            text: "(3, 7]",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            exclusiveMinimum: 3,
                            maximum: 7,
                        },
                        greater_equal_less_equal: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "range",
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
                                    name: "range",
                                    text: [
                                        {
                                            text: "[3, 7]",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            minimum: 3,
                            maximum: 7,
                        },
                    },
                    nullable: false,
                    required: [
                        "minimum",
                        "maximum",
                        "minimum_and_maximum",
                        "greater",
                        "greater_equal",
                        "less",
                        "less_equal",
                        "greater_less",
                        "greater_equal_less",
                        "greater_less_equal",
                        "greater_equal_less_equal",
                    ],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
