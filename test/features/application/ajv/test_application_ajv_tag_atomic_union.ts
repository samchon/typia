import TSON from "../../../../src";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_tag_atomic_union = _test_application_ajv(
    "atomic union tag",
    TSON.application<[TagAtomicUnion], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "components#/schemas/TagAtomicUnion.Type",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "TagAtomicUnion.Type": {
                    $id: "components#/schemas/TagAtomicUnion.Type",
                    type: "object",
                    properties: {
                        value: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-metaTags": [
                                        {
                                            kind: "minimum",
                                            value: 3,
                                        },
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
                                            name: "minimum",
                                            text: [
                                                {
                                                    text: "3",
                                                    kind: "text",
                                                },
                                            ],
                                        },
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
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-metaTags": [
                                        {
                                            kind: "minimum",
                                            value: 3,
                                        },
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
                                            name: "minimum",
                                            text: [
                                                {
                                                    text: "3",
                                                    kind: "text",
                                                },
                                            ],
                                        },
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
                                    minimum: 3,
                                },
                            ],
                            "x-tson-metaTags": [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
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
                                    name: "minimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
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
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
