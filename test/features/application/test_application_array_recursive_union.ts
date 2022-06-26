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
                        type: {
                            enum: ["directory"],
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["id", "name", "path", "children", "type"],
                },
                "ArrayRecursiveUnion.IImageFile": {
                    $id: "ArrayRecursiveUnion.IImageFile",
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
                            enum: ["file"],
                            nullable: false,
                        },
                        extension: {
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
                },
                "ArrayRecursiveUnion.ITextFile": {
                    $id: "ArrayRecursiveUnion.ITextFile",
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
                            enum: ["file"],
                            nullable: false,
                        },
                        extension: {
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
                },
                "ArrayRecursiveUnion.IZipFile": {
                    $id: "ArrayRecursiveUnion.IZipFile",
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
                            enum: ["file"],
                            nullable: false,
                        },
                        extension: {
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
                },
                "ArrayRecursiveUnion.IShortcut": {
                    $id: "ArrayRecursiveUnion.IShortcut",
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
                        type: {
                            enum: ["shortcut"],
                            nullable: false,
                        },
                        extension: {
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
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
