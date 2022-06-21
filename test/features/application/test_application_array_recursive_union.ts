import TSON from "../../../src";
import { ArrayRecursiveUnion } from "../../structures/ArrayRecursiveUnion";
import { _test_application } from "./_test_application";

export const test_application_array_recursive_union = _test_application(
    "recursive union array",
    TSON.application<[ArrayRecursiveUnion]>(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnion.IDirectory",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnion.IImageFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnion.ITextFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnion.IZipFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnion.IShortcut",
                        },
                    ],
                },
                nullable: false,
            },
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
                                        $ref: "#/components/schemas/ArrayRecursiveUnion.IDirectory",
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnion.IImageFile",
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnion.ITextFile",
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnion.IZipFile",
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnion.IShortcut",
                                    },
                                ],
                            },
                            nullable: false,
                        },
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        type: {
                            type: "string",
                            enum: ["directory"],
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
                    },
                    nullable: false,
                    required: [
                        "ArrayRecursiveUnion.IDirectory",
                        "ArrayRecursiveUnion.IDirectory",
                        "ArrayRecursiveUnion.IDirectory",
                        "ArrayRecursiveUnion.IDirectory",
                        "ArrayRecursiveUnion.IDirectory",
                    ],
                },
                "ArrayRecursiveUnion.IImageFile": {
                    $id: "ArrayRecursiveUnion.IImageFile",
                    type: "object",
                    properties: {
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
                        extension: {
                            type: "string",
                            enum: ["jpg", "png", "gif"],
                            nullable: false,
                        },
                        size: {
                            type: "number",
                            nullable: false,
                        },
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        type: {
                            type: "string",
                            enum: ["file"],
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
                    },
                    nullable: false,
                    required: [
                        "ArrayRecursiveUnion.IImageFile",
                        "ArrayRecursiveUnion.IImageFile",
                        "ArrayRecursiveUnion.IImageFile",
                        "ArrayRecursiveUnion.IImageFile",
                        "ArrayRecursiveUnion.IImageFile",
                        "ArrayRecursiveUnion.IImageFile",
                        "ArrayRecursiveUnion.IImageFile",
                        "ArrayRecursiveUnion.IImageFile",
                        "ArrayRecursiveUnion.IImageFile",
                    ],
                },
                "ArrayRecursiveUnion.ITextFile": {
                    $id: "ArrayRecursiveUnion.ITextFile",
                    type: "object",
                    properties: {
                        content: {
                            type: "string",
                            nullable: false,
                        },
                        extension: {
                            type: "string",
                            enum: ["txt", "md", "ts"],
                            nullable: false,
                        },
                        size: {
                            type: "number",
                            nullable: false,
                        },
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        type: {
                            type: "string",
                            enum: ["file"],
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
                    },
                    nullable: false,
                    required: [
                        "ArrayRecursiveUnion.ITextFile",
                        "ArrayRecursiveUnion.ITextFile",
                        "ArrayRecursiveUnion.ITextFile",
                        "ArrayRecursiveUnion.ITextFile",
                        "ArrayRecursiveUnion.ITextFile",
                        "ArrayRecursiveUnion.ITextFile",
                        "ArrayRecursiveUnion.ITextFile",
                    ],
                },
                "ArrayRecursiveUnion.IZipFile": {
                    $id: "ArrayRecursiveUnion.IZipFile",
                    type: "object",
                    properties: {
                        count: {
                            type: "number",
                            nullable: false,
                        },
                        extension: {
                            type: "string",
                            enum: ["zip"],
                            nullable: false,
                        },
                        size: {
                            type: "number",
                            nullable: false,
                        },
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        type: {
                            type: "string",
                            enum: ["file"],
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
                    },
                    nullable: false,
                    required: [
                        "ArrayRecursiveUnion.IZipFile",
                        "ArrayRecursiveUnion.IZipFile",
                        "ArrayRecursiveUnion.IZipFile",
                        "ArrayRecursiveUnion.IZipFile",
                        "ArrayRecursiveUnion.IZipFile",
                        "ArrayRecursiveUnion.IZipFile",
                        "ArrayRecursiveUnion.IZipFile",
                    ],
                },
                "ArrayRecursiveUnion.IShortcut": {
                    $id: "ArrayRecursiveUnion.IShortcut",
                    type: "object",
                    properties: {
                        target: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IDirectory",
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IImageFile",
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.ITextFile",
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IZipFile",
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnion.IShortcut",
                                },
                            ],
                        },
                        extension: {
                            type: "string",
                            enum: ["lnk"],
                            nullable: false,
                        },
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        type: {
                            type: "string",
                            enum: ["shortcut"],
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
                    },
                    nullable: false,
                    required: [
                        "ArrayRecursiveUnion.IShortcut",
                        "ArrayRecursiveUnion.IShortcut",
                        "ArrayRecursiveUnion.IShortcut",
                        "ArrayRecursiveUnion.IShortcut",
                        "ArrayRecursiveUnion.IShortcut",
                        "ArrayRecursiveUnion.IShortcut",
                    ],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
