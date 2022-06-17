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
                        code: {
                            type: "string",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
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
                    },
                    nullable: false,
                    required: ["code", "name", "children"],
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
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
