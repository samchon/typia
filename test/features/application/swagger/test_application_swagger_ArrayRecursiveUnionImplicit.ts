import typia from "../../../../src";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayRecursiveUnionImplicit = 
    _test_application("swagger")(
        "ArrayRecursiveUnionImplicit",
        typia.application<[ArrayRecursiveUnionImplicit], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory"
                    },
                    {
                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory"
                    },
                    {
                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile"
                    },
                    {
                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile"
                    },
                    {
                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile"
                    },
                    {
                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut"
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ArrayRecursiveUnionImplicit.IDirectory": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    path: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    children: {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                    "x-typia-required": true
                                }
                            ],
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name",
                    "path",
                    "children"
                ],
                "x-typia_jsDocTags": []
            },
            "ArrayRecursiveUnionImplicit.ISharedDirectory": {
                type: "object",
                properties: {
                    access: {
                        type: "string",
                        "enum": [
                            "read",
                            "write"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    path: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    children: {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                    "x-typia-required": true
                                }
                            ],
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "access",
                    "id",
                    "name",
                    "path",
                    "children"
                ],
                "x-typia_jsDocTags": []
            },
            "ArrayRecursiveUnionImplicit.IImageFile": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    path: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    width: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    height: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    url: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    size: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name",
                    "path",
                    "width",
                    "height",
                    "url",
                    "size"
                ],
                "x-typia_jsDocTags": []
            },
            "ArrayRecursiveUnionImplicit.ITextFile": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    path: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    size: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    content: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name",
                    "path",
                    "size",
                    "content"
                ],
                "x-typia_jsDocTags": []
            },
            "ArrayRecursiveUnionImplicit.IZipFile": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    path: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    size: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    count: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name",
                    "path",
                    "size",
                    "count"
                ],
                "x-typia_jsDocTags": []
            },
            "ArrayRecursiveUnionImplicit.IShortcut": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    path: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    target: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                "x-typia-required": true
                            }
                        ],
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name",
                    "path",
                    "target"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);