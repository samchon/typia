import TSON from "../../../../src";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_tag_object_union = _test_application_ajv(
    "object union tag",
    TSON.application<[TagObjectUnion], "ajv">(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "components#/schemas/TagObjectUnion.Numeric",
                    },
                    {
                        $ref: "components#/schemas/TagObjectUnion.Literal",
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "TagObjectUnion.Numeric": {
                    $id: "components#/schemas/TagObjectUnion.Numeric",
                    type: "object",
                    properties: {
                        value: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "minimum",
                                    value: 3,
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
                            ],
                            minimum: 3,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-tson_jsDocTags": [],
                },
                "TagObjectUnion.Literal": {
                    $id: "components#/schemas/TagObjectUnion.Literal",
                    type: "object",
                    properties: {
                        value: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
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
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
