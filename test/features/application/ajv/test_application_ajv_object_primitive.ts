import TSON from "../../../../src";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_primitive = _test_application_ajv(
    "primitive object",
    TSON.application<[ObjectPrimitive], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectPrimitive.IArticle",
            },
        ],
        components: {
            schemas: {
                "ObjectPrimitive.IArticle": {
                    $id: "components#/schemas/ObjectPrimitive.IArticle",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        extension: {
                            type: "string",
                            enum: ["txt", "md", "html"],
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
                                $ref: "components#/schemas/ObjectPrimitive.IFile",
                            },
                            nullable: false,
                        },
                        secret: {
                            type: "boolean",
                            nullable: false,
                        },
                        created_at: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "extension",
                        "title",
                        "body",
                        "files",
                        "secret",
                        "created_at",
                    ],
                    "x-tson_jsDocTags": [],
                },
                "ObjectPrimitive.IFile": {
                    $id: "components#/schemas/ObjectPrimitive.IFile",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        extension: {
                            type: "string",
                            nullable: false,
                        },
                        url: {
                            type: "string",
                            nullable: false,
                        },
                        created_at: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["id", "name", "extension", "url", "created_at"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
