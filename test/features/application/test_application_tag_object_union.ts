import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_application } from "./_test_application";

export const test_application_tag_object_union = _test_application(
    "object union tag",
    TSON.application<[TagObjectUnion]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/TagObjectUnion.Literal",
                    },
                    {
                        $ref: "#/components/schemas/TagObjectUnion.Numeric",
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "TagObjectUnion.Literal": {
                    type: "object",
                    properties: {
                        value: {
                            type: "string",
                            nullable: false,
                            metaTags: [
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
                    },
                    nullable: false,
                    required: ["value"],
                    jsDocTags: [],
                },
                "TagObjectUnion.Numeric": {
                    type: "object",
                    properties: {
                        value: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                            ],
                            jsDocTags: [
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
                    },
                    nullable: false,
                    required: ["value"],
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
