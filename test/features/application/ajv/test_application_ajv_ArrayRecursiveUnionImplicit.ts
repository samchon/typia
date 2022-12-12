import typia from "../../../../src";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArrayRecursiveUnionImplicit =
    _test_application("ajv")(
        "ArrayRecursiveUnionImplicit",
        typia.application<[ArrayRecursiveUnionImplicit], "ajv">(),
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
                                $recursiveRef:
                                    "components#/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
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
                                "x-typia-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            children: {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $recursiveRef:
                                                "components#/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                            "x-typia-required": true,
                                        },
                                        {
                                            $recursiveRef:
                                                "components#/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                            "x-typia-required": true,
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                            "x-typia-required": true,
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                            "x-typia-required": true,
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                            "x-typia-required": true,
                                        },
                                        {
                                            $recursiveRef:
                                                "components#/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                            "x-typia-required": true,
                                        },
                                    ],
                                    "x-typia-required": true,
                                },
                                nullable: false,
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "children"],
                        "x-typia_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.ISharedDirectory": {
                        $id: "components#/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                        $recursiveAnchor: true,
                        type: "object",
                        properties: {
                            access: {
                                type: "string",
                                enum: ["read", "write"],
                                nullable: false,
                                "x-typia-required": true,
                            },
                            id: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            children: {
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $recursiveRef:
                                                "components#/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                            "x-typia-required": true,
                                        },
                                        {
                                            $recursiveRef:
                                                "components#/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                            "x-typia-required": true,
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                            "x-typia-required": true,
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                            "x-typia-required": true,
                                        },
                                        {
                                            $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                            "x-typia-required": true,
                                        },
                                        {
                                            $recursiveRef:
                                                "components#/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                            "x-typia-required": true,
                                        },
                                    ],
                                    "x-typia-required": true,
                                },
                                nullable: false,
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["access", "id", "name", "path", "children"],
                        "x-typia_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.IImageFile": {
                        $id: "components#/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            width: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            height: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            url: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            size: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
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
                        "x-typia_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.ITextFile": {
                        $id: "components#/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            size: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            content: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "size", "content"],
                        "x-typia_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.IZipFile": {
                        $id: "components#/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            size: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            count: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "size", "count"],
                        "x-typia_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.IShortcut": {
                        $id: "components#/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                        $recursiveAnchor: true,
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            path: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            target: {
                                oneOf: [
                                    {
                                        $recursiveRef:
                                            "components#/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                        "x-typia-required": true,
                                    },
                                    {
                                        $recursiveRef:
                                            "components#/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                        "x-typia-required": true,
                                    },
                                    {
                                        $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                        "x-typia-required": true,
                                    },
                                    {
                                        $ref: "components#/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                        "x-typia-required": true,
                                    },
                                    {
                                        $ref: "components#/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                        "x-typia-required": true,
                                    },
                                    {
                                        $recursiveRef:
                                            "components#/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                        "x-typia-required": true,
                                    },
                                ],
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "target"],
                        "x-typia_jsDocTags": [],
                    },
                },
            },
            purpose: "ajv",
            prefix: "components#/schemas",
        },
    );
