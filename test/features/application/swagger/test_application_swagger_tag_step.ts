import TSON from "../../../../src";
import { TagStep } from "../../../structures/TagStep";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_tag_step = _test_application_swagger(
    "range tag",
    TSON.application<[TagStep], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagStep",
            },
        ],
        components: {
            schemas: {
                TagStep: {
                    type: "object",
                    properties: {
                        exclusiveMinimum: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "step",
                                    value: 5,
                                },
                                {
                                    kind: "exclusiveMinimum",
                                    value: 3,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "step",
                                    text: [
                                        {
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "exclusiveMinimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                        },
                        minimum: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "step",
                                    value: 5,
                                },
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "step",
                                    text: [
                                        {
                                            text: "5",
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
                        range: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "step",
                                    value: 5,
                                },
                                {
                                    kind: "range",
                                    minimum: {
                                        include: false,
                                        value: 0,
                                    },
                                    maximum: {
                                        include: false,
                                        value: 100,
                                    },
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "step",
                                    text: [
                                        {
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "(0, 100)",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            exclusiveMinimum: 0,
                            exclusiveMaximum: 100,
                        },
                        multipleOf: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "multipleOf",
                                    value: 5,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "multipleOf",
                                    text: [
                                        {
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: [
                        "exclusiveMinimum",
                        "minimum",
                        "range",
                        "multipleOf",
                    ],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
