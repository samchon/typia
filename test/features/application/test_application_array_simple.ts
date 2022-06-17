import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_application } from "./_test_application";

export const test_application_array_simple = _test_application(
    "simple array",
    TSON.application<[ArraySimple]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/Array_lt_ArraySimple.IPerson_gt_",
                    },
                    {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ArraySimple.IPerson",
                        },
                        nullable: false,
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "Array_lt_ArraySimple.IPerson_gt_": {
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
                "ArraySimple.IPerson": {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        email: {
                            type: "string",
                            nullable: false,
                        },
                        hobbies: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_string_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/Array_lt_ArraySimple.IHobby_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/Array_lt_ArraySimple.IContent_gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        type: "string",
                                        nullable: false,
                                    },
                                    nullable: false,
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/ArraySimple.IHobby",
                                    },
                                    nullable: false,
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/ArraySimple.IContent",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["name", "email", "hobbies"],
                },
                Array_lt_string_gt_: {
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
                "Array_lt_ArraySimple.IHobby_gt_": {
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
                "Array_lt_ArraySimple.IContent_gt_": {
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
                "ArraySimple.IHobby": {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        rank: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["name", "rank"],
                },
                "ArraySimple.IContent": {
                    type: "object",
                    properties: {
                        body: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["body"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
