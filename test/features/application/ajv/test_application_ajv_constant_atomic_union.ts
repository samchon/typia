import TSON from "../../../../src";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_constant_atomic_union = _test_application_ajv(
    "constant atomic",
    TSON.application<[ConstantAtomicUnion], "ajv">(),
    {
        schemas: [
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
                            $ref: "components#/schemas/__type",
                        },
                    ],
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                __type: {
                    $id: "components#/schemas/__type",
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
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
