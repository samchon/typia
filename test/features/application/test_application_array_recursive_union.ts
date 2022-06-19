import TSON from "../../../src";
import { ArrayRecursiveUnion } from "../../structures/ArrayRecursiveUnion";
import { _test_application } from "./_test_application";

export const test_application_array_recursive_union = _test_application(
    "recursive union array",
    TSON.application<[ArrayRecursiveUnion]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/Array_lt_ArrayRecursiveUnion.IBucket_gt_.o1",
                    },
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
            },
        ],
        components: {
            schemas: {
                "Array_lt_ArrayRecursiveUnion.IBucket_gt_.o1": {
                    type: "object",
                    properties: {
                        length: {
                            type: "number",
                            nullable: false,
                            description:
                                "Gets or sets the length of the array. This is a number one higher than the highest index in the array.",
                        },
                    },
                    nullable: false,
                    required: ["length"],
                },
                "ArrayRecursiveUnion.IDirectory": {
                    type: "object",
                    properties: {
                        children: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_ArrayRecursiveUnion.IBucket_gt_",
                                },
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
                    required: ["children", "id", "type", "name", "path"],
                },
                "Array_lt_ArrayRecursiveUnion.IBucket_gt_": {
                    type: "object",
                    properties: {
                        length: {
                            type: "number",
                            nullable: false,
                            description:
                                "Gets or sets the length of the array. This is a number one higher than the highest index in the array.",
                        },
                    },
                    nullable: false,
                    required: ["length"],
                },
                "ArrayRecursiveUnion.IImageFile": {
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
                        "width",
                        "height",
                        "url",
                        "extension",
                        "size",
                        "id",
                        "type",
                        "name",
                        "path",
                    ],
                },
                "ArrayRecursiveUnion.ITextFile": {
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
                        "content",
                        "extension",
                        "size",
                        "id",
                        "type",
                        "name",
                        "path",
                    ],
                },
                "ArrayRecursiveUnion.IZipFile": {
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
                        "count",
                        "extension",
                        "size",
                        "id",
                        "type",
                        "name",
                        "path",
                    ],
                },
                "ArrayRecursiveUnion.IShortcut": {
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
                        "target",
                        "extension",
                        "id",
                        "type",
                        "name",
                        "path",
                    ],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
