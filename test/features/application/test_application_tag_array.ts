import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_application } from "./_test_application";

export const test_application_tag_array = _test_application(
    "array tag",
    TSON.application<[TagArray]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagArray",
            },
        ],
        components: {
            schemas: {
                TagArray: {
                    type: "object",
                    properties: {
                        items: {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false,
                                metaTags: [
                                    {
                                        kind: "items",
                                        minimum: {
                                            include: true,
                                            value: 3,
                                        },
                                        maximum: {
                                            include: false,
                                            value: 7,
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
                                                text: "[3, 7)",
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
                            metaTags: [
                                {
                                    kind: "items",
                                    minimum: {
                                        include: true,
                                        value: 3,
                                    },
                                    maximum: {
                                        include: false,
                                        value: 7,
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
                                            text: "[3, 7)",
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
                            maxItems: 6,
                        },
                        minItems: {
                            type: "array",
                            items: {
                                type: "number",
                                nullable: false,
                                metaTags: [
                                    {
                                        kind: "minItems",
                                        value: 3,
                                    },
                                    {
                                        kind: "minimum",
                                        value: 3,
                                    },
                                ],
                                jsDocTags: [
                                    {
                                        name: "minItems",
                                        text: [
                                            {
                                                text: "3",
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
                                ],
                                minimum: 3,
                            },
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "minItems",
                                    value: 3,
                                },
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "minItems",
                                    text: [
                                        {
                                            text: "3",
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
                            ],
                            minItems: 3,
                        },
                        maxItems: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        type: "string",
                                        nullable: false,
                                        metaTags: [
                                            {
                                                kind: "maxItems",
                                                value: 7,
                                            },
                                            {
                                                kind: "maxLength",
                                                value: 7,
                                            },
                                            {
                                                kind: "maximum",
                                                value: 7,
                                            },
                                        ],
                                        jsDocTags: [
                                            {
                                                name: "maxItems",
                                                text: [
                                                    {
                                                        text: "7",
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
                                        maxLength: 7,
                                    },
                                    {
                                        type: "number",
                                        nullable: false,
                                        metaTags: [
                                            {
                                                kind: "maxItems",
                                                value: 7,
                                            },
                                            {
                                                kind: "maxLength",
                                                value: 7,
                                            },
                                            {
                                                kind: "maximum",
                                                value: 7,
                                            },
                                        ],
                                        jsDocTags: [
                                            {
                                                name: "maxItems",
                                                text: [
                                                    {
                                                        text: "7",
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
                                        maximum: 7,
                                    },
                                ],
                                metaTags: [
                                    {
                                        kind: "maxItems",
                                        value: 7,
                                    },
                                    {
                                        kind: "maxLength",
                                        value: 7,
                                    },
                                    {
                                        kind: "maximum",
                                        value: 7,
                                    },
                                ],
                                jsDocTags: [
                                    {
                                        name: "maxItems",
                                        text: [
                                            {
                                                text: "7",
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
                            },
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "maxItems",
                                    value: 7,
                                },
                                {
                                    kind: "maxLength",
                                    value: 7,
                                },
                                {
                                    kind: "maximum",
                                    value: 7,
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "maxItems",
                                    text: [
                                        {
                                            text: "7",
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
                            maxItems: 7,
                        },
                        both: {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false,
                                metaTags: [
                                    {
                                        kind: "minItems",
                                        value: 3,
                                    },
                                    {
                                        kind: "maxItems",
                                        value: 7,
                                    },
                                    {
                                        kind: "format",
                                        value: "uuid",
                                    },
                                ],
                                jsDocTags: [
                                    {
                                        name: "minItems",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "maxItems",
                                        text: [
                                            {
                                                text: "7",
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
                            metaTags: [
                                {
                                    kind: "minItems",
                                    value: 3,
                                },
                                {
                                    kind: "maxItems",
                                    value: 7,
                                },
                                {
                                    kind: "format",
                                    value: "uuid",
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "minItems",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "maxItems",
                                    text: [
                                        {
                                            text: "7",
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
                            maxItems: 7,
                        },
                    },
                    nullable: false,
                    required: ["items", "minItems", "maxItems", "both"],
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
