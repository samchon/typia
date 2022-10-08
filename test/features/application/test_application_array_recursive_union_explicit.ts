import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_application } from "./_test_application";

export const test_application_array_recursive_union_explicit =
    _test_application(
        "recursive union array",
        TSON.application<[ArrayRecursiveUnionExplicit]>(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                            },
                            {
                                $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                            },
                        ],
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    "ArrayRecursiveUnionExplicit.IImageFile": {
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
                            type: {
                                type: "string",
                                enum: ["file"],
                                nullable: false,
                            },
                            extension: {
                                type: "string",
                                enum: ["jpg"],
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
                            "type",
                            "extension",
                        ],
                        jsDocTags: [],
                    },
                    "ArrayRecursiveUnionExplicit.ITextFile": {
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
                            type: {
                                type: "string",
                                enum: ["file"],
                                nullable: false,
                            },
                            extension: {
                                type: "string",
                                enum: ["txt"],
                                nullable: false,
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
                        jsDocTags: [],
                    },
                    "ArrayRecursiveUnionExplicit.IZipFile": {
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
                            type: {
                                type: "string",
                                enum: ["file"],
                                nullable: false,
                            },
                            extension: {
                                type: "string",
                                enum: ["zip"],
                                nullable: false,
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
                        jsDocTags: [],
                    },
                    "ArrayRecursiveUnionExplicit.IDirectory": {
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
                                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                                        },
                                        {
                                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                                        },
                                    ],
                                },
                                nullable: false,
                            },
                            type: {
                                type: "string",
                                enum: ["directory"],
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "path", "children", "type"],
                        jsDocTags: [],
                    },
                    "ArrayRecursiveUnionExplicit.IShortcut": {
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
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                                    },
                                ],
                            },
                            type: {
                                type: "string",
                                enum: ["file"],
                                nullable: false,
                            },
                            extension: {
                                type: "string",
                                enum: ["lnk"],
                                nullable: false,
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
                        jsDocTags: [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
