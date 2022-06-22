import TSON from "../../../src";
import { ArrayRecursiveUnion } from "../../structures/ArrayRecursiveUnion";
import { _test_application } from "./_test_application";

export const test_application_array_recursive_union = _test_application(
    "recursive union array",
    TSON.application<[ArrayRecursiveUnion]>(),
{schemas: [
        {
            type: "array",
            $type: "array",
            items: {
                $type: "oneOf",
                oneOf: [
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/ArrayRecursiveUnion.IDirectory"
                    },
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/ArrayRecursiveUnion.IImageFile"
                    },
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/ArrayRecursiveUnion.ITextFile"
                    },
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/ArrayRecursiveUnion.IZipFile"
                    },
                    {
                        $type: "reference",
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
                $type: "object",
                type: "object",
                properties: {
                    children: {
                        type: "array",
                        $type: "array",
                        items: {
                            $type: "oneOf",
                            oneOf: [
                                {
                                    $type: "reference",
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IDirectory"
                                },
                                {
                                    $type: "reference",
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IImageFile"
                                },
                                {
                                    $type: "reference",
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.ITextFile"
                                },
                                {
                                    $type: "reference",
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IZipFile"
                                },
                                {
                                    $type: "reference",
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IShortcut"
                                }
                            ]
                        },
                        nullable: false
                    },
                    id: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    type: {
                        $type: "enum",
                        "enum": [
                            "directory"
                        ],
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    path: {
                        $type: "string",
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
                $type: "object",
                type: "object",
                properties: {
                    width: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    height: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    url: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    extension: {
                        $type: "enum",
                        "enum": [
                            "jpg",
                            "png",
                            "gif"
                        ],
                        nullable: false
                    },
                    size: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    id: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    type: {
                        $type: "enum",
                        "enum": [
                            "file"
                        ],
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    path: {
                        $type: "string",
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
                $type: "object",
                type: "object",
                properties: {
                    content: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    extension: {
                        $type: "enum",
                        "enum": [
                            "txt",
                            "md",
                            "ts"
                        ],
                        nullable: false
                    },
                    size: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    id: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    type: {
                        $type: "enum",
                        "enum": [
                            "file"
                        ],
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    path: {
                        $type: "string",
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
                $type: "object",
                type: "object",
                properties: {
                    count: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    extension: {
                        $type: "enum",
                        "enum": [
                            "zip"
                        ],
                        nullable: false
                    },
                    size: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    id: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    type: {
                        $type: "enum",
                        "enum": [
                            "file"
                        ],
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    path: {
                        $type: "string",
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
                $type: "object",
                type: "object",
                properties: {
                    target: {
                        $type: "oneOf",
                        oneOf: [
                            {
                                $type: "reference",
                                $ref: "#/components/schemas/ArrayRecursiveUnion.IDirectory"
                            },
                            {
                                $type: "reference",
                                $ref: "#/components/schemas/ArrayRecursiveUnion.IImageFile"
                            },
                            {
                                $type: "reference",
                                $ref: "#/components/schemas/ArrayRecursiveUnion.ITextFile"
                            },
                            {
                                $type: "reference",
                                $ref: "#/components/schemas/ArrayRecursiveUnion.IZipFile"
                            },
                            {
                                $type: "reference",
                                $ref: "#/components/schemas/ArrayRecursiveUnion.IShortcut"
                            }
                        ]
                    },
                    extension: {
                        $type: "enum",
                        "enum": [
                            "lnk"
                        ],
                        nullable: false
                    },
                    id: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    type: {
                        $type: "enum",
                        "enum": [
                            "shortcut"
                        ],
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    path: {
                        $type: "string",
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