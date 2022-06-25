import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_application } from "./_test_application";

export const test_application_constant_atomic_union = _test_application(
    "constant atomic",
    TSON.application<[ConstantAtomicUnion]>(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            enum: [false],
                            nullable: false,
                        },
                        {
                            enum: [2, 1],
                            nullable: false,
                        },
                        {
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
        components: {
            schemas: {
                __type: {
                    $id: "__type",
                    type: "object",
                    properties: {
                        key: {
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
