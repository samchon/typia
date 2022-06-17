import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_application } from "./_test_application";

export const test_application_array_union = _test_application(
    "union arrray",
    TSON.application<[ArrayUnion]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/Array_lt_string_gt_",
                    },
                    {
                        $ref: "#/components/schemas/Array_lt_string_or_number_or_boolean_gt_",
                    },
                    {
                        $ref: "#/components/schemas/Array_lt_boolean_gt_",
                    },
                    {
                        $ref: "#/components/schemas/Array_lt_number_gt_",
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
                            oneOf: [
                                {
                                    type: "boolean",
                                    enum: [false, true],
                                    nullable: false,
                                },
                                {
                                    type: "string",
                                    nullable: false,
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                },
                            ],
                        },
                        nullable: false,
                    },
                    {
                        type: "array",
                        items: {
                            type: "boolean",
                            enum: [false, true],
                            nullable: false,
                        },
                        nullable: false,
                    },
                    {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false,
                        },
                        nullable: false,
                    },
                ],
            },
        ],
        components: {
            schemas: {
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
                Array_lt_string_or_number_or_boolean_gt_: {
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
                Array_lt_boolean_gt_: {
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
                Array_lt_number_gt_: {
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
