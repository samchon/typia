import typia from "../../../../src";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectPrimitive = _test_application(
    "swagger",
)("ObjectPrimitive", typia.application<[ObjectPrimitive], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectPrimitive.IArticle",
        },
    ],
    components: {
        schemas: {
            "ObjectPrimitive.IArticle": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    extension: {
                        type: "string",
                        enum: ["txt", "md", "html"],
                        nullable: false,
                        "x-typia-required": true,
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    body: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    files: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectPrimitive.IFile",
                            "x-typia-required": true,
                        },
                        nullable: false,
                        "x-typia-required": true,
                    },
                    secret: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    created_at: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
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
                "x-typia_jsDocTags": [],
            },
            "ObjectPrimitive.IFile": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    extension: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    url: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    created_at: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                },
                nullable: false,
                required: ["id", "name", "extension", "url", "created_at"],
                "x-typia_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
