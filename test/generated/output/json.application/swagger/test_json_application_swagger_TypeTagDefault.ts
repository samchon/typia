import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagDefault } from "../../../../structures/TypeTagDefault";

export const test_json_application_swagger_TypeTagDefault =
    _test_json_application("swagger")("TypeTagDefault")({
        schemas: [
            {
                $ref: "#/components/schemas/TypeTagDefault",
            },
        ],
        components: {
            schemas: {
                TypeTagDefault: {
                    type: "object",
                    properties: {
                        boolean: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            default: false,
                            type: "boolean",
                            "x-typia-typeTags": [
                                {
                                    target: "boolean",
                                    name: "Default<false>",
                                    kind: "default",
                                    value: false,
                                    exclusive: true,
                                },
                            ],
                        },
                        number: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            default: 1,
                            "x-typia-typeTags": [
                                {
                                    target: "number",
                                    name: "Default<1>",
                                    kind: "default",
                                    value: 1,
                                    exclusive: true,
                                },
                            ],
                        },
                        string: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            default: "two",
                            "x-typia-typeTags": [
                                {
                                    target: "string",
                                    name: 'Default<"two">',
                                    kind: "default",
                                    value: "two",
                                    exclusive: true,
                                },
                            ],
                        },
                        text: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            default: "Very long text, can you understand it?",
                            "x-typia-typeTags": [
                                {
                                    target: "string",
                                    name: 'Default<"Very long text, can you understand it?">',
                                    kind: "default",
                                    value: "Very long text, can you understand it?",
                                    exclusive: true,
                                },
                            ],
                        },
                        boolean_and_number_and_string: {
                            oneOf: [
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                    default: 1,
                                    "x-typia-typeTags": [
                                        {
                                            target: "number",
                                            name: "Default<1>",
                                            kind: "default",
                                            value: 1,
                                            exclusive: true,
                                        },
                                    ],
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                    default: "two",
                                    "x-typia-typeTags": [
                                        {
                                            target: "string",
                                            name: 'Default<"two">',
                                            kind: "default",
                                            value: "two",
                                            exclusive: true,
                                        },
                                    ],
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    default: false,
                                    type: "boolean",
                                    "x-typia-typeTags": [
                                        {
                                            target: "boolean",
                                            name: "Default<false>",
                                            kind: "default",
                                            value: false,
                                            exclusive: true,
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        union_but_boolean: {
                            oneOf: [
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    default: false,
                                    type: "boolean",
                                    "x-typia-typeTags": [
                                        {
                                            target: "boolean",
                                            name: "Default<false>",
                                            kind: "default",
                                            value: false,
                                            exclusive: true,
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        union_but_number: {
                            oneOf: [
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                    default: 1,
                                    "x-typia-typeTags": [
                                        {
                                            target: "number",
                                            name: "Default<1>",
                                            kind: "default",
                                            value: 1,
                                            exclusive: true,
                                        },
                                    ],
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "boolean",
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        union_but_string: {
                            oneOf: [
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                    default: "two",
                                    "x-typia-typeTags": [
                                        {
                                            target: "string",
                                            name: 'Default<"two">',
                                            kind: "default",
                                            value: "two",
                                            exclusive: true,
                                        },
                                    ],
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "boolean",
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        boolean_and_number_and_template: {
                            oneOf: [
                                {
                                    type: "string",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    pattern:
                                        "^([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?|true|false|(prefix_(.*)))",
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                    default: 2,
                                    "x-typia-typeTags": [
                                        {
                                            target: "number",
                                            name: "Default<2>",
                                            kind: "default",
                                            value: 2,
                                            exclusive: true,
                                        },
                                    ],
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    default: false,
                                    type: "boolean",
                                    "x-typia-typeTags": [
                                        {
                                            target: "boolean",
                                            name: "Default<false>",
                                            kind: "default",
                                            value: false,
                                            exclusive: true,
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    nullable: false,
                    required: [
                        "boolean",
                        "number",
                        "string",
                        "text",
                        "boolean_and_number_and_string",
                        "union_but_boolean",
                        "union_but_number",
                        "union_but_string",
                        "boolean_and_number_and_template",
                    ],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
