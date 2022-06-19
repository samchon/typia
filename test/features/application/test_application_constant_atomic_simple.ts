import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_application } from "./_test_application";

export const test_application_constant_atomic_simple = _test_application(
    "constant atomic",
    TSON.application<[ConstantAtomicSimple]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ConstantAtomicSimple_lt_false_comma_true_comma_2_comma_three_gt_",
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
                                    type: "number",
                                    enum: [2],
                                    nullable: false,
                                },
                                {
                                    type: "string",
                                    enum: ["three"],
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
                ConstantAtomicSimple_lt_false_comma_true_comma_2_comma_three_gt_:
                    {
                        type: "object",
                        properties: {},
                        nullable: false,
                    },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
