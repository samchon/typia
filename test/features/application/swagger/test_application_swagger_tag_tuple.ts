import TSON from "../../../../src";
import { TagTuple } from "../../../structures/TagTuple";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_tag_tuple = _test_application_swagger(
    "tuple tag",
    TSON.application<[TagTuple], "swagger">(),
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
                                        "x-tson-metaTags": [
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
                                        "x-tson-jsDocTags": [
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
                                        "x-tson-metaTags": [
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
                                        "x-tson-jsDocTags": [
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
                                            "x-tson-metaTags": [
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
                                            "x-tson-jsDocTags": [
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
                                        "x-tson-metaTags": [
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
                                        "x-tson-jsDocTags": [
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
                                            "x-tson-metaTags": [
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
                                            "x-tson-jsDocTags": [
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
                                        "x-tson-metaTags": [
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
                                        "x-tson-jsDocTags": [
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
                                "x-tson-metaTags": [
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
                                "x-tson-jsDocTags": [
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
                            "x-tson-metaTags": [
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
                            "x-tson-jsDocTags": [
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
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
