import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicitPointer } from "../../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_application_swagger_ArrayRecursiveUnionExplicitPointer =
    _test_json_application("swagger")("ArrayRecursiveUnionExplicitPointer")({
        schemas: [
            {
                $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer",
            },
        ],
        components: {
            schemas: {
                ArrayRecursiveUnionExplicitPointer: {
                    type: "object",
                    properties: {
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IBucket",
                            },
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicitPointer.IBucket": {
                    type: "object",
                    properties: {
                        value: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IDirectory",
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IImageFile",
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.ITextFile",
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IZipFile",
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IShortcut",
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicitPointer.IDirectory": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        path: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        children: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IBucket",
                            },
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["directory"],
                        },
                    },
                    nullable: false,
                    required: ["id", "name", "path", "children", "type"],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicitPointer.IImageFile": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        path: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        width: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        height: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        url: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["jpg"],
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "name",
                        "path",
                        "width",
                        "height",
                        "url",
                        "size",
                        "type",
                        "extension",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicitPointer.ITextFile": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        path: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        content: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["txt"],
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "name",
                        "path",
                        "size",
                        "content",
                        "type",
                        "extension",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicitPointer.IZipFile": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        path: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        count: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["zip"],
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "name",
                        "path",
                        "size",
                        "count",
                        "type",
                        "extension",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicitPointer.IShortcut": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        path: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        target: {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IBucket",
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["lnk"],
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "name",
                        "path",
                        "target",
                        "type",
                        "extension",
                    ],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
