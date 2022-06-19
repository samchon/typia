import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_application } from "./_test_application";

export const test_application_array_recursive = _test_application(
    "recursive array",
    TSON.application<[ArrayRecursive]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/Array_lt_ArrayRecursive.ICategory_gt_.o1",
                    },
                    {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ArrayRecursive.ICategory",
                        },
                        nullable: false,
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "Array_lt_ArrayRecursive.ICategory_gt_.o1": {
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
                "ArrayRecursive.ICategory": {
                    type: "object",
                    properties: {
                        children: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_ArrayRecursive.ICategory_gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/ArrayRecursive.ICategory",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                        id: {
                            type: "number",
                            nullable: false,
                        },
                        code: {
                            type: "string",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        sequence: {
                            type: "number",
                            nullable: false,
                        },
                        created_at: {
                            $ref: "#/components/schemas/ArrayRecursive.ITimestamp",
                        },
                    },
                    nullable: false,
                    required: [
                        "children",
                        "id",
                        "code",
                        "name",
                        "sequence",
                        "created_at",
                    ],
                },
                "Array_lt_ArrayRecursive.ICategory_gt_": {
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
                "ArrayRecursive.ITimestamp": {
                    type: "object",
                    properties: {
                        time: {
                            type: "number",
                            nullable: false,
                        },
                        zone: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["time", "zone"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
