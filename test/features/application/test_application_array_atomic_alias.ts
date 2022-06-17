import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_application } from "./_test_application";

export const test_application_array_alias = _test_application(
    "atomic alias array",
    TSON.application<[ArrayAtomicAlias]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ArrayAtomicAlias_lt_Array_lt_boolean_gt__comma_Array_lt_number_gt__comma_Array_lt_string_gt__gt_",
                    },
                    {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_boolean_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/Array_lt_number_gt_",
                                },
                                {
                                    $ref: "#/components/schemas/Array_lt_string_gt_",
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
                                {
                                    type: "array",
                                    items: {
                                        type: "string",
                                        nullable: false,
                                    },
                                    nullable: false,
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
                ArrayAtomicAlias_lt_Array_lt_boolean_gt__comma_Array_lt_number_gt__comma_Array_lt_string_gt__gt_:
                    {
                        type: "object",
                        properties: {},
                        nullable: false,
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
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
