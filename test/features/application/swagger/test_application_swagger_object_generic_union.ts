import TSON from "../../../../src";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_generic_union =
    _test_application_swagger(
        "generic unioned object",
        TSON.application<[ObjectGenericUnion], "swagger">(),
        {
            schemas: [
                {
                    oneOf: [
                        {
                            $ref: "#/components/schemas/ObjectGenericUnion.ISaleQuestion",
                        },
                        {
                            $ref: "#/components/schemas/ObjectGenericUnion.ISaleReview",
                        },
                    ],
                },
            ],
            components: {
                schemas: {
                    "ObjectGenericUnion.ISaleQuestion": {
                        type: "object",
                        properties: {
                            writer: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            answer: {
                                $ref: "#/components/schemas/ObjectGenericUnion.ISaleAnswer.Nullable",
                                "x-tson-required": true,
                            },
                            id: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            hit: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            contents: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectGenericUnion.ISaleArticle.IContent",
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
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
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectGenericUnion.ISaleAnswer.Nullable": {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            hit: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            contents: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectGenericUnion.ISaleArticle.IContent",
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: true,
                        required: ["id", "hit", "contents", "created_at"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectGenericUnion.ISaleArticle.IContent": {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            title: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            body: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            files: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/Omit_lt_ObjectGenericUnion.IAttachmentFile_comma__space__doublequote_id_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: [
                            "id",
                            "created_at",
                            "title",
                            "body",
                            "files",
                        ],
                        "x-tson_jsDocTags": [],
                    },
                    "Omit_lt_ObjectGenericUnion.IAttachmentFile_comma__space__doublequote_id_doublequote__gt_":
                        {
                            type: "object",
                            properties: {
                                url: {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                                name: {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                                extension: {
                                    type: "string",
                                    nullable: true,
                                    "x-tson-required": true,
                                },
                            },
                            nullable: false,
                            required: ["url", "name", "extension"],
                            "x-tson_jsDocTags": [],
                        },
                    "ObjectGenericUnion.ISaleReview": {
                        type: "object",
                        properties: {
                            writer: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            answer: {
                                $ref: "#/components/schemas/ObjectGenericUnion.ISaleAnswer.Nullable",
                                "x-tson-required": true,
                            },
                            id: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            hit: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            contents: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectGenericUnion.ISaleReview.IContent",
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
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
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectGenericUnion.ISaleReview.IContent": {
                        type: "object",
                        properties: {
                            score: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            id: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            title: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            body: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            files: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/Omit_lt_ObjectGenericUnion.IAttachmentFile_comma__space__doublequote_id_doublequote__gt_",
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
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
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
