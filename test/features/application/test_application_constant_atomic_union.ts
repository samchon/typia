import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_application } from "./_test_application";

export const test_application_constant_atomic = _test_application(
    "constant atomic",
    TSON.application<[ConstantAtomicUnion]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/Array_lt_ConstantAtomicUnion.Union_gt_",
                    },
                    {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    type: "boolean",
                                    enum: [false],
                                    nullable: false,
                                },
                                {
                                    type: "number",
                                    enum: [2, 1],
                                    nullable: false,
                                },
                                {
                                    type: "string",
                                    enum: ["three", "four"],
                                    nullable: false,
                                },
                                {
                                    $ref: "#/components/schemas/__type",
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
                "Array_lt_ConstantAtomicUnion.Union_gt_": {
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
                __type: {
                    type: "object",
                    properties: {
                        key: {
                            type: "string",
                            enum: ["key"],
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["key"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
