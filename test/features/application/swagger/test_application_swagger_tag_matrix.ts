import TSON from "../../../../src";
import { TagMatrix } from "../../../structures/TagMatrix";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_tag_matrix = _test_application_swagger(
    "matrix tag",
    TSON.application<[TagMatrix], "swagger">(),
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
                                    "x-tson-metaTags": [
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
                                    "x-tson-jsDocTags": [
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
                                    "x-tson-required": true,
                                    format: "uuid",
                                },
                                nullable: false,
                                description: "Doubled array.",
                                "x-tson-metaTags": [
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
                                "x-tson-jsDocTags": [
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
                                "x-tson-required": true,
                                minItems: 3,
                                maxItems: 3,
                            },
                            nullable: false,
                            description: "Doubled array.",
                            "x-tson-metaTags": [
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
                            "x-tson-jsDocTags": [
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
                            "x-tson-required": true,
                            minItems: 3,
                            maxItems: 3,
                        },
                    },
                    nullable: false,
                    required: ["matrix"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
