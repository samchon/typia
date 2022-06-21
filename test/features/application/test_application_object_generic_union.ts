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
                        $id: "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_",
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
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectGenericUnion.ISaleArticle.IContent",
                                },
                                nullable: false,
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: [
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_",
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_",
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_",
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_",
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_",
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_",
                        ],
                    },
                "ObjectGenericUnion.ISaleArticle_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_.Nullable":
                    {
                        $id: "ObjectGenericUnion.ISaleArticle_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_.Nullable",
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
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectGenericUnion.ISaleArticle.IContent",
                                },
                                nullable: false,
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: true,
                        required: [
                            "ObjectGenericUnion.ISaleArticle_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_.Nullable",
                            "ObjectGenericUnion.ISaleArticle_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_.Nullable",
                            "ObjectGenericUnion.ISaleArticle_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_.Nullable",
                            "ObjectGenericUnion.ISaleArticle_lt_ObjectGenericUnion.ISaleArticle.IContent_gt_.Nullable",
                        ],
                    },
                "ObjectGenericUnion.ISaleArticle.IContent": {
                    $id: "ObjectGenericUnion.ISaleArticle.IContent",
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
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/__type",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: [
                        "ObjectGenericUnion.ISaleArticle.IContent",
                        "ObjectGenericUnion.ISaleArticle.IContent",
                        "ObjectGenericUnion.ISaleArticle.IContent",
                        "ObjectGenericUnion.ISaleArticle.IContent",
                        "ObjectGenericUnion.ISaleArticle.IContent",
                    ],
                },
                __type: {
                    $id: "__type",
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        url: {
                            type: "string",
                            nullable: false,
                        },
                        extension: {
                            type: "null",
                        },
                    },
                    nullable: false,
                    required: ["__type", "__type", "__type"],
                },
                "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleReview.IContent_gt_":
                    {
                        $id: "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleReview.IContent_gt_",
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
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectGenericUnion.ISaleReview.IContent",
                                },
                                nullable: false,
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: [
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleReview.IContent_gt_",
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleReview.IContent_gt_",
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleReview.IContent_gt_",
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleReview.IContent_gt_",
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleReview.IContent_gt_",
                            "ObjectGenericUnion.ISaleInquiry_lt_ObjectGenericUnion.ISaleReview.IContent_gt_",
                        ],
                    },
                "ObjectGenericUnion.ISaleReview.IContent": {
                    $id: "ObjectGenericUnion.ISaleReview.IContent",
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
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/__type",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: [
                        "ObjectGenericUnion.ISaleReview.IContent",
                        "ObjectGenericUnion.ISaleReview.IContent",
                        "ObjectGenericUnion.ISaleReview.IContent",
                        "ObjectGenericUnion.ISaleReview.IContent",
                        "ObjectGenericUnion.ISaleReview.IContent",
                        "ObjectGenericUnion.ISaleReview.IContent",
                    ],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
