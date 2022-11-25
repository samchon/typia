import TSON from "../../../../src";
import { TagDefault } from "../../../structures/TagDefault";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TagDefault = _test_application("swagger")(
    "TagDefault",
    TSON.application<[TagDefault], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagDefault",
            },
        ],
        components: {
            schemas: {
                TagDefault: {
                    type: "object",
                    properties: {
                        boolean: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            default: true,
                        },
                        number: {
                            type: "number",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            default: 1,
                        },
                        string: {
                            type: "string",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            default: "two",
                        },
                        text: {
                            type: "string",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "Very long text, can you understand it?",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            default: "Very long text, can you understand it?",
                        },
                        template: {
                            type: "string",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "prefix_A",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            pattern: "^(prefix_(.*))",
                            default: "prefix_A",
                        },
                        boolean_and_number_and_string: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                    default: "two",
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                    default: 1,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                    default: true,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                        },
                        union_but_boolean: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                    default: true,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                        },
                        union_but_number: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                    default: 1,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                        },
                        union_but_string: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                    default: "two",
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                        },
                        vulnerable_range: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                                {
                                    kind: "maximum",
                                    value: 5,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
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
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            minimum: 3,
                            maximum: 5,
                        },
                        vulnerable_template: {
                            type: "string",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            pattern: "^(prefix_(.*))",
                        },
                        boolean_and_number_and_template: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "prefix_B",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                    pattern:
                                        "^(-?\\d+\\.?\\d*|true|false|(prefix_(.*)))",
                                    default: "prefix_B",
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "prefix_B",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                    default: 1,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "prefix_B",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-tson-required": true,
                                    default: true,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "prefix_B",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: [
                        "boolean",
                        "number",
                        "string",
                        "text",
                        "template",
                        "boolean_and_number_and_string",
                        "union_but_boolean",
                        "union_but_number",
                        "union_but_string",
                        "vulnerable_range",
                        "vulnerable_template",
                        "boolean_and_number_and_template",
                    ],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
