import TSON from "../../../../src";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArrayRecursiveUnionExplicit =
    _test_application("ajv")(
        "ArrayRecursiveUnionExplicit",
        TSON.application<[ArrayRecursiveUnionExplicit], "ajv">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                $recursiveRef:
                                    "components#/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                            },
                            {
                                $ref: "components#/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                            },
                            {
                                $ref: "components#/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                            },
                            {
                                $ref: "components#/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                            },
                            {
                                $recursiveRef:
                                    "components#/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                            },
                        ],
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    "ArrayRecursiveUnionExplicit.IDirectory": {
                        $id: "components#/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                        $recursiveAnchor: true,
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            children: {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $recursiveRef:
                                                "components#/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $recursiveRef:
                                                "components#/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                                            "x-tson-required": true,
                                        },
                                    ],
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["directory"],
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "children", "type"],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionExplicit.IImageFile": {
                        $id: "components#/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            width: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            height: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            url: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            size: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["file"],
                                nullable: false,
                                "x-tson-required": true,
                            },
                            extension: {
                                type: "string",
                                enum: ["jpg"],
                                nullable: false,
                                "x-tson-required": true,
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
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionExplicit.ITextFile": {
                        $id: "components#/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            size: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            content: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["file"],
                                nullable: false,
                                "x-tson-required": true,
                            },
                            extension: {
                                type: "string",
                                enum: ["txt"],
                                nullable: false,
                                "x-tson-required": true,
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
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionExplicit.IZipFile": {
                        $id: "components#/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            size: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            count: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["file"],
                                nullable: false,
                                "x-tson-required": true,
                            },
                            extension: {
                                type: "string",
                                enum: ["zip"],
                                nullable: false,
                                "x-tson-required": true,
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
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionExplicit.IShortcut": {
                        $id: "components#/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                        $recursiveAnchor: true,
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            target: {
                                oneOf: [
                                    {
                                        $recursiveRef:
                                            "components#/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                                        "x-tson-required": true,
                                    },
                                    {
                                        $ref: "components#/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                                        "x-tson-required": true,
                                    },
                                    {
                                        $ref: "components#/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                                        "x-tson-required": true,
                                    },
                                    {
                                        $ref: "components#/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                                        "x-tson-required": true,
                                    },
                                    {
                                        $recursiveRef:
                                            "components#/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                                        "x-tson-required": true,
                                    },
                                ],
                                "x-tson-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["file"],
                                nullable: false,
                                "x-tson-required": true,
                            },
                            extension: {
                                type: "string",
                                enum: ["lnk"],
                                nullable: false,
                                "x-tson-required": true,
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
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "ajv",
            prefix: "components#/schemas",
        },
    );
