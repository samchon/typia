import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_application } from "./_test_application";

export const test_application_tag_tuple = _test_application(
    "tuple tag",
    TSON.application<[TagTuple]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagTuple",
            },
        ],
        components: {
            schemas: {
                TagTuple: {
                    type: "object",
                    properties: {
                        tuple: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
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
                                                    include: true,
                                                    value: 7,
                                                },
                                            },
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
                                        jsDocTags: [
                                            {
                                                name: "items",
                                                text: [
                                                    {
                                                        text: "[3, 7]",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "range",
                                                text: [
                                                    {
                                                        text: "[3, 7]",
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
                                        metaTags: [
                                            {
                                                kind: "items",
                                                minimum: {
                                                    include: true,
                                                    value: 3,
                                                },
                                                maximum: {
                                                    include: true,
                                                    value: 7,
                                                },
                                            },
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
                                        jsDocTags: [
                                            {
                                                name: "items",
                                                text: [
                                                    {
                                                        text: "[3, 7]",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "range",
                                                text: [
                                                    {
                                                        text: "[3, 7]",
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
                                        maximum: 7,
                                    },
                                    {
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
                                                        include: true,
                                                        value: 7,
                                                    },
                                                },
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
                                            jsDocTags: [
                                                {
                                                    name: "items",
                                                    text: [
                                                        {
                                                            text: "[3, 7]",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "range",
                                                    text: [
                                                        {
                                                            text: "[3, 7]",
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
                                        nullable: false,
                                        metaTags: [
                                            {
                                                kind: "items",
                                                minimum: {
                                                    include: true,
                                                    value: 3,
                                                },
                                                maximum: {
                                                    include: true,
                                                    value: 7,
                                                },
                                            },
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
                                        jsDocTags: [
                                            {
                                                name: "items",
                                                text: [
                                                    {
                                                        text: "[3, 7]",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "range",
                                                text: [
                                                    {
                                                        text: "[3, 7]",
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
                                        minItems: 3,
                                        maxItems: 7,
                                    },
                                    {
                                        type: "array",
                                        items: {
                                            type: "number",
                                            nullable: false,
                                            metaTags: [
                                                {
                                                    kind: "items",
                                                    minimum: {
                                                        include: true,
                                                        value: 3,
                                                    },
                                                    maximum: {
                                                        include: true,
                                                        value: 7,
                                                    },
                                                },
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
                                            jsDocTags: [
                                                {
                                                    name: "items",
                                                    text: [
                                                        {
                                                            text: "[3, 7]",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "range",
                                                    text: [
                                                        {
                                                            text: "[3, 7]",
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
                                            maximum: 7,
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
                                                    include: true,
                                                    value: 7,
                                                },
                                            },
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
                                        jsDocTags: [
                                            {
                                                name: "items",
                                                text: [
                                                    {
                                                        text: "[3, 7]",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "range",
                                                text: [
                                                    {
                                                        text: "[3, 7]",
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
                                        minItems: 3,
                                        maxItems: 7,
                                    },
                                ],
                                metaTags: [
                                    {
                                        kind: "items",
                                        minimum: {
                                            include: true,
                                            value: 3,
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7,
                                        },
                                    },
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
                                jsDocTags: [
                                    {
                                        name: "items",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "range",
                                        text: [
                                            {
                                                text: "[3, 7]",
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
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "items",
                                    minimum: {
                                        include: true,
                                        value: 3,
                                    },
                                    maximum: {
                                        include: true,
                                        value: 7,
                                    },
                                },
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
                            jsDocTags: [
                                {
                                    name: "items",
                                    text: [
                                        {
                                            text: "[3, 7]",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "[3, 7]",
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
                            minItems: 3,
                            maxItems: 7,
                        },
                    },
                    nullable: false,
                    required: ["tuple"],
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
