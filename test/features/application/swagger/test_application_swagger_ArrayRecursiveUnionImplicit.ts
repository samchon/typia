import TSON from "../../../../src";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayRecursiveUnionImplicit =
    _test_application("swagger")(
        "ArrayRecursiveUnionImplicit",
        TSON.application<[ArrayRecursiveUnionImplicit], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                            },
                        ],
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    "ArrayRecursiveUnionImplicit.IDirectory": {
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
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                            "x-tson-required": true,
                                        },
                                    ],
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "children"],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.ISharedDirectory": {
                        type: "object",
                        properties: {
                            access: {
                                type: "string",
                                enum: ["read", "write"],
                                nullable: false,
                                "x-tson-required": true,
                            },
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
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                            "x-tson-required": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                            "x-tson-required": true,
                                        },
                                    ],
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["access", "id", "name", "path", "children"],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.IImageFile": {
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
                        },
                        nullable: false,
                        required: ["id", "name", "path", "size", "content"],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.IZipFile": {
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
                        },
                        nullable: false,
                        required: ["id", "name", "path", "size", "count"],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayRecursiveUnionImplicit.IShortcut": {
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
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                        "x-tson-required": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                        "x-tson-required": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                        "x-tson-required": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                        "x-tson-required": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                        "x-tson-required": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                        "x-tson-required": true,
                                    },
                                ],
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "target"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
