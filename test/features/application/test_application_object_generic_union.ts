import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_application } from "./_test_application";

export const test_application_object_generic_union = _test_application(
    "generic unioned object",
    TSON.application<[ObjectGenericUnion]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleReview.IContent_gt_",
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_":
                    {
                        type: "object",
                        properties: {
                            writer: {
                                type: "string",
                                nullable: false,
                            },
                            answer: {
                                $ref: "#/components/schemas/ObjectGenericUnion.ISaleArticle_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_.Nullable",
                            },
                            id: {
                                type: "string",
                                nullable: false,
                            },
                            hit: {
                                type: "number",
                                nullable: false,
                            },
                            contents: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/Array_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_",
                                    },
                                    {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/ObjectGenericUnion.ISaleArticle.IContent",
                                        },
                                        nullable: false,
                                    },
                                ],
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: [
                            "writer",
                            "answer",
                            "id",
                            "hit",
                            "contents",
                            "created_at",
                        ],
                    },
                "ObjectGenericUnion.ISaleArticle_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_.Nullable":
                    {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                nullable: false,
                            },
                            hit: {
                                type: "number",
                                nullable: false,
                            },
                            contents: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/Array_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_",
                                    },
                                    {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/ObjectGenericUnion.ISaleArticle.IContent",
                                        },
                                        nullable: false,
                                    },
                                ],
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: true,
                        required: ["id", "hit", "contents", "created_at"],
                    },
                "Array_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_": {
                    type: "object",
                    properties: {
                        length: {
                            type: "number",
                            nullable: false,
                            description:
                                "Gets or sets the length of the array. This is a number one higher than the highest index in the array.",
                        },
                    },
                    nullable: false,
                    required: ["length"],
                },
                "ObjectGenericUnion.ISaleArticle.IContent": {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        created_at: {
                            type: "string",
                            nullable: false,
                        },
                        title: {
                            type: "string",
                            nullable: false,
                        },
                        body: {
                            type: "string",
                            nullable: false,
                        },
                        files: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt___type_gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/__type",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["id", "created_at", "title", "body", "files"],
                },
                Array_lt___type_gt_: {
                    type: "object",
                    properties: {
                        length: {
                            type: "number",
                            nullable: false,
                            description:
                                "Gets or sets the length of the array. This is a number one higher than the highest index in the array.",
                        },
                    },
                    nullable: false,
                    required: ["length"],
                },
                __type: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        extension: {
                            type: "string",
                            nullable: true,
                        },
                        url: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["name", "extension", "url"],
                },
                "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleReview.IContent_gt_":
                    {
                        type: "object",
                        properties: {
                            writer: {
                                type: "string",
                                nullable: false,
                            },
                            answer: {
                                $ref: "#/components/schemas/ObjectGenericUnion.ISaleArticle_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_.Nullable",
                            },
                            id: {
                                type: "string",
                                nullable: false,
                            },
                            hit: {
                                type: "number",
                                nullable: false,
                            },
                            contents: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/Array_lt_ObjectGenericUnion.ISaleReview.IContent_gt_",
                                    },
                                    {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/ObjectGenericUnion.ISaleReview.IContent",
                                        },
                                        nullable: false,
                                    },
                                ],
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: [
                            "writer",
                            "answer",
                            "id",
                            "hit",
                            "contents",
                            "created_at",
                        ],
                    },
                "Array_lt_ObjectGenericUnion.ISaleReview.IContent_gt_": {
                    type: "object",
                    properties: {
                        length: {
                            type: "number",
                            nullable: false,
                            description:
                                "Gets or sets the length of the array. This is a number one higher than the highest index in the array.",
                        },
                    },
                    nullable: false,
                    required: ["length"],
                },
                "ObjectGenericUnion.ISaleReview.IContent": {
                    type: "object",
                    properties: {
                        score: {
                            type: "number",
                            nullable: false,
                        },
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        created_at: {
                            type: "string",
                            nullable: false,
                        },
                        title: {
                            type: "string",
                            nullable: false,
                        },
                        body: {
                            type: "string",
                            nullable: false,
                        },
                        files: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt___type_gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/__type",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: [
                        "score",
                        "id",
                        "created_at",
                        "title",
                        "body",
                        "files",
                    ],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
