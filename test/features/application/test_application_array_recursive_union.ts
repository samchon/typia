import TSON from "../../../src";
import { ArrayRecursiveUnion } from "../../structures/ArrayRecursiveUnion";
import { _test_application } from "./_test_application";

export const test_application_array_recursive_union = _test_application(
    "recursive union array",
    TSON.application<[ArrayRecursiveUnion]>(),
{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ArrayRecursiveUnion.IDirectory"
                    },
                    {
                        $ref: "#/components/schemas/ArrayRecursiveUnion.IImageFile"
                    },
                    {
                        $ref: "#/components/schemas/ArrayRecursiveUnion.ITextFile"
                    },
                    {
                        $ref: "#/components/schemas/ArrayRecursiveUnion.IZipFile"
                    },
                    {
                        $ref: "#/components/schemas/ArrayRecursiveUnion.IShortcut"
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ArrayRecursiveUnion.IDirectory": {
                $id: "ArrayRecursiveUnion.IDirectory",
                type: "object",
                properties: {
                    children: {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IDirectory"
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IImageFile"
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.ITextFile"
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IZipFile"
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IShortcut"
                                }
                            ]
                        },
                        nullable: false
                    },
                    id: {
                        type: "string",
                        nullable: false
                    },
                    type: {
                        "enum": [
                            "directory"
                        ],
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    },
                    path: {
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "children",
                    "id",
                    "type",
                    "name",
                    "path"
                ]
            },
            "ArrayRecursiveUnion.IImageFile": {
                $id: "ArrayRecursiveUnion.IImageFile",
                type: "object",
                properties: {
                    width: {
                        type: "number",
                        nullable: false
                    },
                    height: {
                        type: "number",
                        nullable: false
                    },
                    url: {
                        type: "string",
                        nullable: false
                    },
                    extension: {
                        "enum": [
                            "jpg",
                            "png",
                            "gif"
                        ],
                        nullable: false
                    },
                    size: {
                        type: "number",
                        nullable: false
                    },
                    id: {
                        type: "string",
                        nullable: false
                    },
                    type: {
                        "enum": [
                            "file"
                        ],
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    },
                    path: {
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "width",
                    "height",
                    "url",
                    "extension",
                    "size",
                    "id",
                    "type",
                    "name",
                    "path"
                ]
            },
            "ArrayRecursiveUnion.ITextFile": {
                $id: "ArrayRecursiveUnion.ITextFile",
                type: "object",
                properties: {
                    content: {
                        type: "string",
                        nullable: false
                    },
                    extension: {
                        "enum": [
                            "txt",
                            "md",
                            "ts"
                        ],
                        nullable: false
                    },
                    size: {
                        type: "number",
                        nullable: false
                    },
                    id: {
                        type: "string",
                        nullable: false
                    },
                    type: {
                        "enum": [
                            "file"
                        ],
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    },
                    path: {
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "content",
                    "extension",
                    "size",
                    "id",
                    "type",
                    "name",
                    "path"
                ]
            },
            "ArrayRecursiveUnion.IZipFile": {
                $id: "ArrayRecursiveUnion.IZipFile",
                type: "object",
                properties: {
                    count: {
                        type: "number",
                        nullable: false
                    },
                    extension: {
                        "enum": [
                            "zip"
                        ],
                        nullable: false
                    },
                    size: {
                        type: "number",
                        nullable: false
                    },
                    id: {
                        type: "string",
                        nullable: false
                    },
                    type: {
                        "enum": [
                            "file"
                        ],
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    },
                    path: {
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "count",
                    "extension",
                    "size",
                    "id",
                    "type",
                    "name",
                    "path"
                ]
            },
            "ArrayRecursiveUnion.IShortcut": {
                $id: "ArrayRecursiveUnion.IShortcut",
                type: "object",
                properties: {
                    target: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnion.IDirectory"
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnion.IImageFile"
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnion.ITextFile"
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnion.IZipFile"
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnion.IShortcut"
                            }
                        ]
                    },
                    extension: {
                        "enum": [
                            "lnk"
                        ],
                        nullable: false
                    },
                    id: {
                        type: "string",
                        nullable: false
                    },
                    type: {
                        "enum": [
                            "shortcut"
                        ],
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    },
                    path: {
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "target",
                    "extension",
                    "id",
                    "type",
                    "name",
                    "path"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);