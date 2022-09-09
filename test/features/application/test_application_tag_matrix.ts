import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_application } from "./_test_application";

export const test_application_tag_matrix = _test_application(
    "matrix tag",
    TSON.application<[TagMatrix]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagMatrix",
            },
        ],
        components: {
            schemas: {
                TagMatrix: {
                    type: "object",
                    properties: {
                        matrix: {
                            type: "array",
                            items: {
                                type: "array",
                                items: {
                                    type: "string",
                                    nullable: false,
                                    description: "Doubled array.",
                                    metaTags: [
                                        {
                                            kind: "items",
                                            minimum: {
                                                include: true,
                                                value: 3,
                                            },
                                            maximum: {
                                                include: true,
                                                value: 3,
                                            },
                                        },
                                        {
                                            kind: "format",
                                            value: "uuid",
                                        },
                                    ],
                                    jsDocTags: [
                                        {
                                            name: "items",
                                            text: [
                                                {
                                                    text: "3",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "format",
                                            text: [
                                                {
                                                    text: "uuid",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    format: "uuid",
                                },
                                nullable: false,
                                description: "Doubled array.",
                                metaTags: [
                                    {
                                        kind: "items",
                                        minimum: {
                                            include: true,
                                            value: 3,
                                        },
                                        maximum: {
                                            include: true,
                                            value: 3,
                                        },
                                    },
                                    {
                                        kind: "format",
                                        value: "uuid",
                                    },
                                ],
                                jsDocTags: [
                                    {
                                        name: "items",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "format",
                                        text: [
                                            {
                                                text: "uuid",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                ],
                                minItems: 3,
                                maxItems: 3,
                            },
                            nullable: false,
                            description: "Doubled array.",
                            metaTags: [
                                {
                                    kind: "items",
                                    minimum: {
                                        include: true,
                                        value: 3,
                                    },
                                    maximum: {
                                        include: true,
                                        value: 3,
                                    },
                                },
                                {
                                    kind: "format",
                                    value: "uuid",
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "items",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "uuid",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minItems: 3,
                            maxItems: 3,
                        },
                    },
                    nullable: false,
                    required: ["matrix"],
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
