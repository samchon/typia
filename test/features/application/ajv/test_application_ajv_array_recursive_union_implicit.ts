import TSON from "../../../../src";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_array_recursive_union_implicit =
    _test_application_ajv(
        "recursive union array",
        TSON.application<[ArrayRecursiveUnionImplicit], "ajv">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                $recursiveRef:
                                    "components#/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                            },
                            {
                                $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                            },
                            {
                                $ref: "components#/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                            },
                            {
                                $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                            },
                            {
                                $recursiveRef:
                                    "components#/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                            },
                        ],
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    "ArrayRecursiveUnionImplicit.IDirectory": {
                        $id: "components#/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                        $recursiveAnchor: true,
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                            },
                            children: {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $recursiveRef:
                                                "components#/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                        },
                                        {
                                            $recursiveRef:
                                                "components#/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "children"],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.IImageFile": {
                        $id: "components#/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                            },
                            width: {
                                type: "number",
                                nullable: false,
                            },
                            height: {
                                type: "number",
                                nullable: false,
                            },
                            url: {
                                type: "string",
                                nullable: false,
                            },
                            size: {
                                type: "number",
                                nullable: false,
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
                        ],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.ITextFile": {
                        $id: "components#/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                            },
                            size: {
                                type: "number",
                                nullable: false,
                            },
                            content: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "size", "content"],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.IZipFile": {
                        $id: "components#/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                            },
                            size: {
                                type: "number",
                                nullable: false,
                            },
                            count: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "size", "count"],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.IShortcut": {
                        $id: "components#/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                        $recursiveAnchor: true,
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                            },
                            target: {
                                oneOf: [
                                    {
                                        $recursiveRef:
                                            "components#/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                    },
                                    {
                                        $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                    },
                                    {
                                        $ref: "components#/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                    },
                                    {
                                        $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                    },
                                    {
                                        $recursiveRef:
                                            "components#/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                    },
                                ],
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "target"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "ajv",
            prefix: "components#/schemas",
        },
    );
