import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_application } from "./_test_application";

export const test_application_atomic_union = _test_application(
    "union atomic",
    TSON.application<[AtomicUnion]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/Array_lt_AtomicUnion.Union_gt_",
                    },
                    {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    type: "boolean",
                                    enum: [false, true],
                                    nullable: true,
                                },
                                {
                                    type: "string",
                                    nullable: true,
                                },
                                {
                                    type: "number",
                                    nullable: true,
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
                "Array_lt_AtomicUnion.Union_gt_": {
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
