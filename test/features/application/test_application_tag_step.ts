import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_application } from "./_test_application";

export const test_application_tag_step = _test_application(
    "range tag",
    TSON.application<[TagStep]>(),
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
                            metaTags: [
                                {
                                    kind: "step",
                                    value: 5,
                                },
                                {
                                    kind: "exclusiveMinimum",
                                    value: 3,
                                },
                            ],
                            jsDocTags: [
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
                            metaTags: [
                                {
                                    kind: "step",
                                    value: 5,
                                },
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                            ],
                            jsDocTags: [
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
                            metaTags: [
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
                            jsDocTags: [
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
                            metaTags: [
                                {
                                    kind: "multipleOf",
                                    value: 5,
                                },
                            ],
                            jsDocTags: [
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
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
