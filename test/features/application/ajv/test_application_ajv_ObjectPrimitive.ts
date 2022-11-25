import TSON from "../../../../src";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectPrimitive = _test_application("ajv")(
    "ObjectPrimitive",
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
                            "x-tson-required": true,
                        },
                        extension: {
                            type: "string",
                            enum: ["txt", "md", "html"],
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
                                $ref: "components#/schemas/ObjectPrimitive.IFile",
                                "x-tson-required": true,
                            },
                            nullable: false,
                            "x-tson-required": true,
                        },
                        secret: {
                            type: "boolean",
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
                            "x-tson-required": true,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        extension: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        url: {
                            type: "string",
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
                    required: ["id", "name", "extension", "url", "created_at"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
